import { Components, Theme } from '@mui/material';

export default function Stack(_theme: Theme): Components<Theme> {
  return {
    MuiStack: {
      styleOverrides: {
        root: {
          // Accessable for sticky positioning
          overflow: 'unset',
        },
      },
    },
  };
}
