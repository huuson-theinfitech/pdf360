import { Components, Theme } from '@mui/material';

export default function List(_theme: Theme): Components<Theme> {
  return {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
        },
      },
    },
  };
}
