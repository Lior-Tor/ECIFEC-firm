/**
 * ImageZoom Component
 *
 * Permet de cliquer sur une image pour l'afficher en grand dans une modale
 * Utile pour les schémas, diagrammes et images complexes
 */

'use client';
import { useState } from 'react';
import { Dialog, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Image from 'next/image';

export default function ImageZoom({ src, alt, width, height, priority = false }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Image cliquable avec indicateur de zoom */}
      <Box
        sx={{
          position: 'relative',
          display: 'inline-block',
          cursor: 'pointer',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.02)',
          },
          '&:hover .zoom-icon': {
            opacity: 1,
          },
        }}
        onClick={handleOpen}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
          priority={priority}
        />

        {/* Icône de zoom qui apparaît au survol */}
        <Box
          className="zoom-icon"
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderRadius: '50%',
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.2s',
          }}
        >
          <ZoomInIcon sx={{ color: 'white', fontSize: 28 }} />
        </Box>

        {/* Texte d'indication */}
        <Box
          className="zoom-icon"
          sx={{
            position: 'absolute',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            px: 2,
            py: 1,
            borderRadius: 2,
            fontSize: '0.875rem',
            opacity: 0,
            transition: 'opacity 0.2s',
            whiteSpace: 'nowrap',
          }}
        >
          Cliquer pour agrandir
        </Box>
      </Box>

      {/* Modale pour afficher l'image en grand */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={false}
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            overflow: 'hidden',
          },
        }}
        sx={{
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
          },
        }}
      >
        {/* Bouton de fermeture */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Image en plein écran */}
        <Box
          onClick={handleClose}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: { xs: 2, md: 4 },
            maxWidth: '95vw',
            maxHeight: '95vh',
            cursor: 'zoom-out',
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            style={{
              maxWidth: '100%',
              maxHeight: '90vh',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Dialog>
    </>
  );
}
