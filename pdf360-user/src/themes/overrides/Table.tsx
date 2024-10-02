import { Theme } from '@mui/material';

export default function Table(theme: Theme) {
  return {
    MuiTableHead: {
      styleOverrides: {
        root: {
          '.MuiTableCell-root': {
            ...theme.typography.caption2Semibold,
            padding: theme.spacing(0, 1.5, 2),
            color: theme.palette.grey[400],
          },
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          position: 'relative',
          borderBottom: 'none',
          padding: theme.spacing(2, 1.5),
          verticalAlign: 'top',
          ...theme.typography.body1Medium,

          '::after': {
            content: `""`,
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            height: 1,
            background: theme.palette.grey[300],
          },

          ':first-of-type::after': {
            left: theme.spacing(1.5),
          },

          ':last-of-type::after': {
            right: theme.spacing(1.5),
          },
        },
      },
    },
  };
}
