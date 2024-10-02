import { Components, Theme } from '@mui/material';

export default function Menu(theme: Theme): Components<Theme> {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.popover,
          borderRadius: theme.shape.borderRadius * 1.25,
        },
        list: {
          padding: `${theme.spacing(1)} !important`,
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1),
          borderRadius: theme.shape.borderRadius * 0.75,
          transition: theme.transitions.create('all'),

          ':hover': {
            backgroundColor: theme.palette.grey[200],
          },
        },
      },
    },
  };
}
