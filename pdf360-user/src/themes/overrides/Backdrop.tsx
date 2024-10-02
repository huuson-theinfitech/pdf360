import { Components, Theme, alpha } from '@mui/material';

export default function Backdrop(theme: Theme): Components<Theme> {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[200], 0.8),
        },
        invisible: {
          backgroundColor: 'transparent',
        },
      },
    },
  };
}
