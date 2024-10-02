import { Components, Theme } from '@mui/material';

export default function Link(theme: Theme): Components<Theme> {
  return {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: theme.palette.grey[700],
          transition: theme.transitions.create('color'),

          '&:hover': {
            color: theme.palette.info.dark,
          },
        },
      },
    },
  };
}
