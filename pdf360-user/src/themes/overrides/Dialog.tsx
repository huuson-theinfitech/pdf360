import { Components, Theme } from '@mui/material';

export default function Dialog(theme: Theme): Components<Theme> {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: (theme.shape.borderRadius * 16) / 12,
          boxShadow: theme.customShadows.popover,
        },
      },
    },

    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3.25, 3, 3, 3),
        },
      },
    },

    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(0, 3, 1, 3),
        },
      },
    },

    MuiDialogContentText: {
      styleOverrides: {
        root: {
          ...theme.typography.base1Semibold,
          color: theme.palette.grey[400],
        },
      },
    },

    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3),
        },
      },
    },
  };
}
