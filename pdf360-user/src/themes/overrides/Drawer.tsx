import { Components, Theme } from '@mui/material';

export default function Drawer(theme: Theme): Components<Theme> {
  return {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          height: '100vh',
          overflowY: 'hidden',
          background: theme.palette.background.paper,
          padding: theme.spacing(2),
        },
      },
    },
  };
}
