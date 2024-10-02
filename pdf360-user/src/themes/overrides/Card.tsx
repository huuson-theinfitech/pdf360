import { Components, Theme } from '@mui/material';

export default function Card(theme: Theme): Components<Theme> {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          position: 'relative',
          zIndex: 0, // Fix Safari overflow: hidden with border radius
          borderRadius: (theme.shape.borderRadius * 8) / 12,
          boxShadow: 'none',
          padding: theme.spacing(3),
          overflow: 'unset',
        },
      },
    },
  };
}
