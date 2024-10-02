import { Components, Theme } from '@mui/material';

export default function Avatar(theme: Theme): Components<Theme> {
  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.grey[350],
        },
        rounded: {
          borderRadius: (theme.shape.borderRadius * 8) / 12,
        },
      },
    },
  };
}
