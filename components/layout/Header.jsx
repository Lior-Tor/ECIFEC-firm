/**
 * Header / Navigation principale du site ECIFEC
 *
 * FONCTIONNALITÉS:
 * - Navigation responsive (desktop: menus déroulants, mobile: drawer)
 * - AppBar qui change de style au scroll (élévation + background)
 * - Menus déroulants pour Services et Secteurs (mega menu desktop)
 * - Drawer mobile avec accordéons pour sous-menus
 * - Logo cliquable (retour accueil)
 * - Bouton CTA "Nous contacter" avec icône téléphone
 *
 * RESPONSIVE:
 * - Desktop (≥md): Navigation horizontale + dropdown menus
 * - Mobile (<md): Hamburger menu + drawer latéral
 *
 * DONNÉES:
 * - Navigation structure importée de lib/data/navigation.js
 * - Icônes mappées dynamiquement via iconMap
 *
 * OPTIMISATIONS:
 * - useScrollTrigger pour détecter scroll (Material-UI)
 * - useMediaQuery pour responsive sans re-render inutiles
 * - Next.js Link pour navigation côté client (pas de rechargement page)
 *
 * @component
 */

'use client';
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  Collapse,
  Grid,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import Image from 'next/image';
import { NAVIGATION_LINKS, CABINET_INFO } from '@/lib/data/navigation';
import Business from '@mui/icons-material/Business';
import Receipt from '@mui/icons-material/Receipt';
import People from '@mui/icons-material/People';
import AccountBalance from '@mui/icons-material/AccountBalance';
import Storefront from '@mui/icons-material/Storefront';
import LocalHospital from '@mui/icons-material/LocalHospital';
import Construction from '@mui/icons-material/Construction';
import Gavel from '@mui/icons-material/Gavel';
import FindInPage from '@mui/icons-material/FindInPage';
import Assessment from '@mui/icons-material/Assessment';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Assignment from '@mui/icons-material/Assignment';
import CalendarToday from '@mui/icons-material/CalendarToday';
import Calculate from '@mui/icons-material/Calculate';
import BusinessCenter from '@mui/icons-material/BusinessCenter';
import PrecisionManufacturing from '@mui/icons-material/PrecisionManufacturing';
import LocalShipping from '@mui/icons-material/LocalShipping';
import AccountTree from '@mui/icons-material/AccountTree';

/**
 * Map d'icônes Material-UI pour rendu dynamique
 *
 * POURQUOI une map plutôt que import conditionnel:
 * - Les données navigation contiennent des strings d'icônes ("Business", "Receipt", etc.)
 * - On ne peut pas faire import dynamique de composants React
 * - Solution: map statique qui convertit string → composant Icon
 */
const iconMap = {
  Business,
  Receipt,
  People,
  AccountBalance,
  Storefront,
  LocalHospital,
  Construction,
  Gavel,
  FindInPage,
  Assessment,
  TrendingUp,
  Assignment,
  CalendarToday,
  Calculate,
  BusinessCenter,
  PrecisionManufacturing,
  LocalShipping,
  AccountTree,
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [expandedMobile, setExpandedMobile] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event, menuName) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menuName);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };

  const handleMobileExpand = (label) => {
    setExpandedMobile((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const drawer = (
    <Box sx={{ width: 280, pt: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {NAVIGATION_LINKS.map((link) => (
          <Box key={link.href}>
            <ListItem disablePadding>
              <ListItemButton
                component={link.submenu ? 'div' : Link}
                href={!link.submenu ? link.href : undefined}
                onClick={
                  link.submenu
                    ? () => handleMobileExpand(link.label)
                    : handleDrawerToggle
                }
                sx={{
                  py: 2,
                  px: 3,
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    color: 'white',
                  },
                }}
              >
                <ListItemText primary={link.label} />
                {link.submenu &&
                  (expandedMobile[link.label] ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  ))}
              </ListItemButton>
            </ListItem>
            {link.submenu && (
              <Collapse
                in={expandedMobile[link.label]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {link.submenu.map((sublink) => {
                    const IconComponent = sublink.icon ? iconMap[sublink.icon] : null;
                    return (
                      <ListItemButton
                        key={sublink.href}
                        component={Link}
                        href={sublink.href}
                        onClick={handleDrawerToggle}
                        sx={{
                          pl: 5,
                          py: 1.5,
                          '&:hover': {
                            backgroundColor: 'rgba(4, 48, 51, 0.08)',
                          },
                        }}
                      >
                        {IconComponent && (
                          <ListItemIcon sx={{ minWidth: 36, color: 'primary.main' }}>
                            <IconComponent fontSize="small" />
                          </ListItemIcon>
                        )}
                        <ListItemText
                          primary={sublink.label}
                          primaryTypographyProps={{
                            fontSize: '0.9rem',
                          }}
                        />
                      </ListItemButton>
                    );
                  })}
                  <ListItemButton
                    component={Link}
                    href={link.href}
                    onClick={handleDrawerToggle}
                    sx={{
                      pl: 5,
                      py: 1.5,
                      backgroundColor: 'rgba(199, 179, 118, 0.1)',
                      '&:hover': {
                        backgroundColor: 'rgba(199, 179, 118, 0.2)',
                      },
                    }}
                  >
                    <ListItemText
                      primary={`Tous les ${link.label.toLowerCase()}`}
                      primaryTypographyProps={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'secondary.main',
                      }}
                    />
                  </ListItemButton>
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>
      <Box sx={{ px: 3, mt: 3 }}>
        <Button
          component={Link}
          href="/contact"
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ mb: 2 }}
          onClick={handleDrawerToggle}
        >
          Contactez-nous
        </Button>
        <Button
          href={`tel:${CABINET_INFO.contact.phone.replace(/\s/g, '')}`}
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<PhoneIcon />}
        >
          {CABINET_INFO.contact.phone}
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: trigger ? 'white' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              py: { xs: 1.5, md: 2 },
              justifyContent: { xs: 'center', md: 'space-between' },
              position: 'relative',
            }}
          >
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                <Image
                  src="/images/logo.webp"
                  alt="Cabinet ECIFEC Logo"
                  width={isMobile ? 120 : 160}
                  height={isMobile ? 50 : 130}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Box>
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {NAVIGATION_LINKS.slice(0, -1).map((link) =>
                  link.submenu ? (
                    <Box key={link.href}>
                      <Button
                        onMouseEnter={(e) => handleMenuOpen(e, link.label)}
                        sx={{
                          color: 'text.primary',
                          fontWeight: 500,
                          px: 2,
                          '&:hover': {
                            color: 'primary.main',
                            backgroundColor: 'transparent',
                          },
                        }}
                        endIcon={<KeyboardArrowDownIcon />}
                      >
                        {link.label}
                      </Button>
                      <Menu
                        anchorEl={anchorEl}
                        open={currentMenu === link.label}
                        onClose={handleMenuClose}
                        MenuListProps={{
                          onMouseLeave: handleMenuClose,
                        }}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        sx={{
                          mt: 1,
                          '& .MuiPaper-root': {
                            borderRadius: 2,
                            minWidth: link.label === 'Services' ? 520 : 220,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                          },
                        }}
                      >
                        {link.label === 'Services' ? (
                          <Box sx={{ p: 1 }}>
                            <Grid container spacing={0}>
                              {/* Colonne 1 - Services 0 à 4 */}
                              <Grid item xs={6}>
                                {link.submenu.slice(0, 5).map((sublink) => {
                                  const IconComponent = sublink.icon ? iconMap[sublink.icon] : null;
                                  return (
                                    <MenuItem
                                      key={sublink.href}
                                      component={Link}
                                      href={sublink.href}
                                      onClick={handleMenuClose}
                                      sx={{
                                        py: 1.5,
                                        px: 2.5,
                                        '&:hover': {
                                          backgroundColor: 'primary.light',
                                          color: 'white',
                                          '& .MuiListItemIcon-root': {
                                            color: 'white',
                                          },
                                        },
                                      }}
                                    >
                                      {IconComponent && (
                                        <ListItemIcon sx={{ minWidth: 36, color: 'primary.main' }}>
                                          <IconComponent fontSize="small" />
                                        </ListItemIcon>
                                      )}
                                      {sublink.label}
                                    </MenuItem>
                                  );
                                })}
                              </Grid>
                              {/* Colonne 2 - Services 5 à 9 */}
                              <Grid item xs={6}>
                                {link.submenu.slice(5, 10).map((sublink) => {
                                  const IconComponent = sublink.icon ? iconMap[sublink.icon] : null;
                                  return (
                                    <MenuItem
                                      key={sublink.href}
                                      component={Link}
                                      href={sublink.href}
                                      onClick={handleMenuClose}
                                      sx={{
                                        py: 1.5,
                                        px: 2.5,
                                        '&:hover': {
                                          backgroundColor: 'primary.light',
                                          color: 'white',
                                          '& .MuiListItemIcon-root': {
                                            color: 'white',
                                          },
                                        },
                                      }}
                                    >
                                      {IconComponent && (
                                        <ListItemIcon sx={{ minWidth: 36, color: 'primary.main' }}>
                                          <IconComponent fontSize="small" />
                                        </ListItemIcon>
                                      )}
                                      {sublink.label}
                                    </MenuItem>
                                  );
                                })}
                              </Grid>
                              {/* Tous les services - au milieu */}
                              <Grid item xs={12}>
                                <Divider sx={{ my: 1 }} />
                                <MenuItem
                                  component={Link}
                                  href={link.href}
                                  onClick={handleMenuClose}
                                  sx={{
                                    py: 1.5,
                                    px: 2.5,
                                    fontWeight: 600,
                                    color: 'secondary.main',
                                    justifyContent: 'center',
                                    '&:hover': {
                                      backgroundColor: 'secondary.light',
                                      color: 'secondary.dark',
                                    },
                                  }}
                                >
                                  Tous les {link.label.toLowerCase()}
                                </MenuItem>
                                <Divider sx={{ mt: 1 }} />
                              </Grid>
                            </Grid>
                          </Box>
                        ) : (
                          [
                            ...link.submenu.map((sublink) => {
                              const IconComponent = sublink.icon ? iconMap[sublink.icon] : null;
                              return (
                                <MenuItem
                                  key={sublink.href}
                                  component={Link}
                                  href={sublink.href}
                                  onClick={handleMenuClose}
                                  sx={{
                                    py: 1.5,
                                    px: 2.5,
                                    '&:hover': {
                                      backgroundColor: 'primary.light',
                                      color: 'white',
                                      '& .MuiListItemIcon-root': {
                                        color: 'white',
                                      },
                                    },
                                  }}
                                >
                                  {IconComponent && (
                                    <ListItemIcon sx={{ minWidth: 36, color: 'primary.main' }}>
                                      <IconComponent fontSize="small" />
                                    </ListItemIcon>
                                  )}
                                  {sublink.label}
                                </MenuItem>
                              );
                            }),
                            <Divider key="divider" sx={{ my: 1 }} />,
                            <MenuItem
                              key="all-link"
                              component={Link}
                              href={link.href}
                              onClick={handleMenuClose}
                              sx={{
                                py: 1.5,
                                px: 2.5,
                                fontWeight: 600,
                                color: 'secondary.main',
                                '&:hover': {
                                  backgroundColor: 'secondary.light',
                                  color: 'secondary.dark',
                                },
                              }}
                            >
                              Tous les {link.label.toLowerCase()}
                            </MenuItem>
                          ]
                        )}
                      </Menu>
                    </Box>
                  ) : (
                    <Button
                      key={link.href}
                      component={Link}
                      href={link.href}
                      sx={{
                        color: 'text.primary',
                        fontWeight: 500,
                        px: 2,
                        '&:hover': {
                          color: 'primary.main',
                          backgroundColor: 'transparent',
                        },
                      }}
                    >
                      {link.label}
                    </Button>
                  )
                )}
              </Box>
            )}

            {/* CTA Buttons */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Button
                  href={`tel:${CABINET_INFO.contact.phone.replace(/\s/g, '')}`}
                  variant="contained"
                  color="primary"
                  startIcon={<PhoneIcon />}
                  sx={{
                    borderRadius: 50,
                    px: 3,
                  }}
                >
                  {CABINET_INFO.contact.phone}
                </Button>
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  color="secondary"
                  sx={{
                    borderRadius: 50,
                    px: 3,
                  }}
                >
                  Contactez-nous
                </Button>
              </Box>
            )}

            {/* Mobile menu button */}
            {isMobile && (
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  position: 'absolute',
                  right: 0,
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer - hauteur logo + padding */}
      <Box sx={{ height: { xs: 'calc(50px + 30px)', md: 'calc(130px + 32px)' } }} />
    </>
  );
}
