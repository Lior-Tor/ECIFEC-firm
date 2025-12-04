# API Documentation - Cabinet ECIFEC

## Endpoints disponibles

### POST /api/contact

Endpoint sécurisé pour l'envoi de formulaires de contact via EmailJS.

#### Sécurité

- **CSRF Protection** : Obligatoire
  - Token CSRF requis dans le header `X-CSRF-Token`
  - Le token est généré automatiquement par le middleware et stocké dans un cookie (accessible JavaScript pour lecture)

- **Rate Limiting** :
  - Client-side : 1 requête par minute (localStorage)
  - Server-side : Suivi basique par IP via header `x-forwarded-for`

- **Validation** :
  - Validation Zod côté client
  - Validation serveur supplémentaire
  - Sanitization XSS avec DOMPurify

#### Headers requis

```http
Content-Type: application/json
X-CSRF-Token: <csrf-token-from-cookie>
```

#### Body Parameters

| Champ | Type | Requis | Description |
|-------|------|--------|-------------|
| `name` | string | ✅ | Nom complet (min 2 caractères) |
| `email` | string | ✅ | Email valide |
| `phone` | string | ✅ | Numéro de téléphone (min 10 caractères) |
| `requestType` | string | ✅ | Type de demande : `devis`, `rendez-vous`, `question` |
| `sector` | string | ❌ | Secteur d'activité : `btp`, `liberal`, `restauration`, `autre` |
| `message` | string | ✅ | Message (min 10 caractères) |
| `rgpd` | boolean | ✅ | Acceptation RGPD (doit être `true`) |

#### Exemple de requête

```javascript
const csrfToken = document.cookie
  .split('; ')
  .find(row => row.startsWith('csrf-token='))
  ?.split('=')[1];

const response = await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-Token': csrfToken || '',
  },
  body: JSON.stringify({
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    phone: "0123456789",
    requestType: "devis",
    sector: "btp",
    message: "Je souhaite obtenir un devis pour ma TPE dans le BTP",
    rgpd: true
  }),
});

const result = await response.json();
```

#### Réponses

##### Success (200)

```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

##### Erreur CSRF (403)

```json
{
  "error": "Invalid CSRF token"
}
```

##### Erreur de validation (400)

```json
{
  "error": "Missing required fields"
}
```

##### Erreur de configuration (500)

```json
{
  "error": "Email service not configured"
}
```

##### Erreur d'envoi (500)

```json
{
  "error": "Failed to send email",
  "message": "<détails de l'erreur>"
}
```

#### Variables d'environnement requises

Ces variables doivent être configurées dans `.env.local` (développement) et dans Vercel (production) :

| Variable | Description | Type |
|----------|-------------|------|
| `EMAILJS_SERVICE_ID` | ID du service EmailJS | Serveur uniquement |
| `EMAILJS_TEMPLATE_ID` | ID du template principal | Serveur uniquement |
| `EMAILJS_PUBLIC_KEY` | Clé publique EmailJS | Serveur uniquement |
| `EMAILJS_PRIVATE_KEY` | Clé privée EmailJS | Serveur uniquement |
| `EMAILJS_AUTORESPONSE_TEMPLATE_ID` | ID du template auto-réponse (optionnel) | Serveur uniquement |

**Important** : Ces variables ne doivent JAMAIS avoir le préfixe `NEXT_PUBLIC_` pour éviter l'exposition côté client.

#### Fonctionnalités

1. **Envoi d'email principal**
   - Envoi des données du formulaire au cabinet via EmailJS
   - Inclut l'adresse IP pour traçabilité

2. **Auto-réponse (optionnel)**
   - Si `EMAILJS_AUTORESPONSE_TEMPLATE_ID` est configuré
   - Envoi automatique d'un email de confirmation à l'utilisateur

#### Méthodes autorisées

- `POST` : Envoi du formulaire
- `GET` : ❌ Non autorisé (retourne 405)

#### Notes de sécurité

- Les credentials EmailJS sont stockés uniquement côté serveur
- Le token CSRF est régénéré à chaque session
- La sanitization empêche les attaques XSS
- Le rate limiting côté client évite le spam
- Les logs d'erreur sont activés en développement uniquement

#### Debugging

En mode développement (`NODE_ENV=development`), les erreurs détaillées sont loggées dans la console serveur :

```javascript
console.error('Contact form error:', error);
```

En production, seuls les messages d'erreur génériques sont retournés au client.
