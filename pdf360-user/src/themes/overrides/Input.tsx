import { Components, Theme, alpha } from '@mui/material';

export default function Input(theme: Theme): Components<Theme> {
  return {
    MuiInputBase: {
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          ...theme.typography.base1Semibold,
        },
        disabled: {
          svg: {
            color: theme.palette.text.disabled,
          },
        },

        input: {
          height: 20,
          paddingTop: theme.spacing(1.75),
          paddingBottom: theme.spacing(1.75),

          '&::placeholder': {
            opacity: 1,
            color: alpha(theme.palette.grey[400], 0.75),
            ...theme.typography.base1Semibold,
          },
        },

        inputSizeSmall: {
          height: 16,
          padding: theme.spacing(1.5, 0.5),
        },
        sizeSmall: {
          padding: theme.spacing(0, 1.5),
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.grey[200],
          transition: theme.transitions.create('all'),

          '.MuiOutlinedInput-notchedOutline': {
            borderWidth: 2,
            borderColor: 'transparent',
            transition: theme.transitions.create('border'),
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
          },

          '&.Mui-focused': {
            backgroundColor: theme.palette.grey[100],
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.grey[400],
            },
          },
        },

        input: {
          height: 20,
          paddingTop: theme.spacing(1.75),
          paddingBottom: theme.spacing(1.75),
        },

        inputSizeSmall: {
          height: 16,
          padding: theme.spacing(1.5, 0.5),
        },
        sizeSmall: {
          padding: theme.spacing(0, 1.5),
        },
      },
    },
  };
}
