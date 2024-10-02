import { Components, Theme } from '@mui/material';

export default function AppBar(theme: Theme): Components<Theme> {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: theme.palette.background.paper,
          boxShadow: 'none',
          borderBottom: `1px solid ${theme.palette.divider}`,
        },
      },
    },
  };
}
