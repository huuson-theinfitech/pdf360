import { Components, Theme } from '@mui/material';

export default function Chip(theme: Theme): Components<Theme> {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius * 0.5,
          ...theme.typography.base1Semibold,
        },
        icon: {
          color: 'inherit',
        },
      },
    },
  };
}
