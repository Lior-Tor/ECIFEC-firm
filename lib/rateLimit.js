/**
 * Rate limiting en mémoire avec sliding window
 *
 * Ce module implémente un système de rate limiting côté serveur pour protéger
 * l'API de contact contre le spam et les abus. Utilise un algorithme de fenêtre
 * glissante (sliding window) plutôt qu'une fenêtre fixe pour une protection plus robuste.
 *
 * POURQUOI sliding window plutôt que fixed window:
 * - Fenêtre fixe: un utilisateur peut envoyer 10 requêtes en 1 minute à la limite de la fenêtre
 * - Fenêtre glissante: limite stricte de 5 requêtes sur toute période de 60 minutes
 *
 * LIMITATIONS:
 * - Stockage en mémoire: les données sont perdues au redémarrage du serveur
 * - Non adapté pour déploiement horizontal (plusieurs instances)
 * - Pour production à grande échelle, migrer vers Redis (voir RATE_LIMITING.md)
 *
 * @module rateLimit
 */

/**
 * Stockage en mémoire des tentatives par IP
 * Structure: Map<string, {attempts: number[], firstAttempt: number}>
 * - key: 'contact:${ip}' - Identifiant unique par IP
 * - value.attempts: Array de timestamps des tentatives dans la fenêtre active
 * - value.firstAttempt: Timestamp de la première tentative (pour statistiques)
 *
 * @type {Map<string, {attempts: number[], firstAttempt: number}>}
 */
const rateLimitStore = new Map();

/**
 * Configuration du rate limiting
 *
 * Ces valeurs sont ajustables selon les besoins du projet.
 * Configuration actuelle: 5 requêtes par heure par IP
 *
 * @constant
 * @type {{windowMs: number, maxRequests: number, cleanupInterval: number}}
 * @property {number} windowMs - Fenêtre de temps en millisecondes (1 heure = 3600000ms)
 * @property {number} maxRequests - Nombre maximum de requêtes autorisées par fenêtre
 * @property {number} cleanupInterval - Intervalle de nettoyage automatique (10 minutes)
 */
const RATE_LIMIT_CONFIG = {
  windowMs: 60 * 60 * 1000,
  maxRequests: 5,
  cleanupInterval: 10 * 60 * 1000,
};

/**
 * Timer pour le nettoyage périodique
 * @type {NodeJS.Timeout|undefined}
 */
let cleanupTimer;

/**
 * Démarre le nettoyage périodique des entrées expirées
 *
 * POURQUOI ce nettoyage est nécessaire:
 * - Sans nettoyage, le Map accumulerait indéfiniment des IPs (memory leak)
 * - Supprime les entrées dont toutes les tentatives sont hors de la fenêtre active
 *
 * COMMENT ça fonctionne:
 * - Vérifie toutes les 10 minutes (RATE_LIMIT_CONFIG.cleanupInterval)
 * - Parcourt chaque IP stockée
 * - Filtre les tentatives encore dans la fenêtre active
 * - Supprime les entrées sans tentatives valides
 *
 * @private
 * @returns {void}
 */
function startCleanup() {
  if (cleanupTimer) return;

  cleanupTimer = setInterval(() => {
    const now = Date.now();
    const expiredKeys = [];

    for (const [key, data] of rateLimitStore.entries()) {
      const validAttempts = data.attempts.filter(
        timestamp => now - timestamp < RATE_LIMIT_CONFIG.windowMs
      );

      if (validAttempts.length === 0) {
        expiredKeys.push(key);
      }
    }

    expiredKeys.forEach(key => rateLimitStore.delete(key));

    if (process.env.NODE_ENV === 'development') {
      console.log(`[RateLimit] Cleaned ${expiredKeys.length} expired entries`);
    }
  }, RATE_LIMIT_CONFIG.cleanupInterval);
}

// Démarrer le nettoyage automatique au chargement du module
startCleanup();

/**
 * Vérifie si une IP a dépassé la limite de requêtes et enregistre la tentative si autorisée
 *
 * Cette fonction est le point d'entrée principal du module. Elle implémente l'algorithme
 * de fenêtre glissante (sliding window) pour un rate limiting robuste.
 *
 * ALGORITHME:
 * 1. Récupère les données de l'IP (ou crée une nouvelle entrée)
 * 2. Filtre les tentatives pour ne garder que celles dans la fenêtre active (dernière heure)
 * 3. Compare le nombre de tentatives avec la limite maximale (5)
 * 4. Si autorisé: ajoute la nouvelle tentative au compteur
 * 5. Si refusé: retourne le temps d'attente avant réinitialisation
 *
 * HEADERS HTTP RETOURNÉS (à utiliser dans la réponse API):
 * - X-RateLimit-Limit: 5 (limite maximale)
 * - X-RateLimit-Remaining: nombre de requêtes restantes
 * - X-RateLimit-Reset: timestamp ISO de réinitialisation
 * - Retry-After: secondes à attendre (si limite dépassée)
 *
 * @public
 * @param {string} ip - Adresse IP du client (obtenue via x-forwarded-for ou x-real-ip)
 * @returns {{allowed: boolean, remaining: number, resetTime: number, retryAfter: number}} Résultat de la vérification
 * @returns {boolean} returns.allowed - true si la requête est autorisée, false si la limite est dépassée
 * @returns {number} returns.remaining - Nombre de requêtes restantes (0 si limite dépassée)
 * @returns {number} returns.resetTime - Timestamp (ms) de la prochaine réinitialisation du compteur
 * @returns {number} returns.retryAfter - Secondes à attendre avant de réessayer (0 si autorisé)
 *
 * @example
 * // Dans une API route Next.js
 * const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
 * const rateLimitResult = checkRateLimit(ip);
 *
 * if (!rateLimitResult.allowed) {
 *   return NextResponse.json(
 *     { error: 'Trop de tentatives' },
 *     {
 *       status: 429,
 *       headers: {
 *         'Retry-After': rateLimitResult.retryAfter.toString(),
 *         'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
 *       }
 *     }
 *   );
 * }
 */
export function checkRateLimit(ip) {
  const now = Date.now();
  const key = `contact:${ip}`;

  let ipData = rateLimitStore.get(key);

  if (!ipData) {
    ipData = {
      attempts: [],
      firstAttempt: now,
    };
  }

  // Filtre sliding window: garde uniquement les tentatives dans la fenêtre active
  ipData.attempts = ipData.attempts.filter(
    timestamp => now - timestamp < RATE_LIMIT_CONFIG.windowMs
  );

  const currentCount = ipData.attempts.length;
  const remaining = Math.max(0, RATE_LIMIT_CONFIG.maxRequests - currentCount);

  // Le compteur se réinitialise quand la plus ancienne tentative sort de la fenêtre
  const oldestAttempt = ipData.attempts[0] || now;
  const resetTime = oldestAttempt + RATE_LIMIT_CONFIG.windowMs;

  const allowed = currentCount < RATE_LIMIT_CONFIG.maxRequests;

  if (allowed) {
    // Autorisé: enregistrer la tentative dans le compteur
    ipData.attempts.push(now);
    rateLimitStore.set(key, ipData);
  }

  return {
    allowed,
    remaining: allowed ? remaining - 1 : 0,
    resetTime,
    retryAfter: allowed ? 0 : Math.ceil((resetTime - now) / 1000),
  };
}

/**
 * Réinitialise le compteur pour une IP spécifique
 *
 * UTILISATION:
 * - Tests automatisés (réinitialiser entre chaque test)
 * - Administration (débloquer manuellement un utilisateur légitime)
 * - Développement (faciliter les tests en local)
 *
 * ATTENTION:
 * - Ne pas exposer cette fonction via une API publique (risque de contournement)
 * - Usage réservé aux scripts administratifs ou tests
 *
 * @public
 * @param {string} ip - Adresse IP dont le compteur doit être réinitialisé
 * @returns {void}
 *
 * @example
 * // Dans un test Jest
 * afterEach(() => {
 *   resetRateLimit('192.168.1.1');
 * });
 *
 * @example
 * // Script admin pour débloquer un utilisateur
 * import { resetRateLimit } from '@/lib/rateLimit';
 * resetRateLimit('203.0.113.45');
 */
export function resetRateLimit(ip) {
  const key = `contact:${ip}`;
  rateLimitStore.delete(key);
}

/**
 * Obtient les statistiques globales du rate limiting
 *
 * UTILISATION:
 * - Monitoring et observabilité (nombre d'IPs actives)
 * - Debugging (vérifier la configuration en cours)
 * - Dashboard d'administration
 *
 * ATTENTION:
 * - Ne pas exposer via API publique (information sensible)
 * - Usage réservé aux endpoints d'administration authentifiés
 *
 * @public
 * @returns {{totalIPs: number, config: typeof RATE_LIMIT_CONFIG}} Statistiques du rate limiting
 * @returns {number} returns.totalIPs - Nombre d'adresses IP actuellement trackées
 * @returns {Object} returns.config - Configuration active du rate limiting
 *
 * @example
 * // Endpoint admin pour monitoring
 * export async function GET(request) {
 *   const stats = getRateLimitStats();
 *   return NextResponse.json({
 *     activeIPs: stats.totalIPs,
 *     limit: stats.config.maxRequests,
 *     window: stats.config.windowMs / 1000 / 60 + ' minutes'
 *   });
 * }
 */
export function getRateLimitStats() {
  return {
    totalIPs: rateLimitStore.size,
    config: RATE_LIMIT_CONFIG,
  };
}
