import { Components, Theme } from '@mui/material';

export default function Pagination(theme: Theme): Components<Theme> {
  return {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: theme.palette.grey[400],
          borderColor: theme.palette.grey[350],
          borderWidth: 0,

          '&.Mui-selected': {
            borderWidth: 1,
            backgroundColor: theme.palette.grey[100],
          },
        },
      },
    },
  };
}
