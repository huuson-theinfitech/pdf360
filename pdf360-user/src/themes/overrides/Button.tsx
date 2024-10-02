import { Components, Theme } from '@mui/material';

export default function Button(theme: Theme): Components<Theme> {
  return {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          ...theme.typography.button1,
          textTransform: 'none',
          borderRadius: theme.shape.borderRadius,
          boxShadow: 'none',

          '&:hover': {
            boxShadow: 'none',
          },
        },

        sizeMedium: {
          height: 40,
        },

        sizeLarge: {
          height: 48,
        },

        outlined: {
          borderColor: theme.palette.grey[300],
          borderWidth: 2,
          color: theme.palette.grey[800],
          transition: theme.transitions.create('all'),

          '&:hover': {
            borderWidth: 2,
            borderColor: theme.palette.grey[700],
            backgroundColor: theme.palette.grey[100],
          },
        },
      },

      variants: [
        {
          props: { variant: 'iconOutlined' },
          style: {
            padding: 0,
            minWidth: 40,
            border: `2px ${theme.palette.grey[300]} solid`,
            color: theme.palette.grey[400],

            '&:hover': {
              borderColor: theme.palette.info.dark,
              backgroundColor: theme.palette.info.dark,
              color: theme.palette.grey[100],
            },

            '.MuiButton-startIcon': {
              margin: 0,
            },
          },
        },
      ],
    },
  };
}
