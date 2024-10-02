// Import experimental elements like TabList, TabPanel, etc. from @mui/lab
import type {} from '@mui/lab/themeAugmentation';
import { Components, Theme } from '@mui/material';

export default function Tabs(theme: Theme): Components<Theme> {
  return {
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 40,
        },
        flexContainer: {
          gap: theme.spacing(1),
        },
        indicator: {
          display: 'none',
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 40,
          minWidth: 80,
          textTransform: 'none',
          padding: theme.spacing(1, 2),
          color: theme.palette.grey[400],
          borderRadius: (theme.shape.borderRadius * 8) / 12,
          backgroundColor: theme.palette.grey[100],
          ...theme.typography.base1Semibold,

          '&.Mui-selected': {
            color: theme.palette.grey[600],
            backgroundColor: theme.palette.grey[300],
          },
        },
      },
    },

    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  };
}
