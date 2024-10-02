import { Components, SvgIcon, Theme } from '@mui/material';

import { ChevronDownSvg, XMarkSvg } from '@/assets/icons';

export default function Autocomplete(theme: Theme): Components<Theme> {
  return {
    MuiAutocomplete: {
      defaultProps: {
        popupIcon: (
          <SvgIcon sx={{ width: 16, height: 16 }}>
            <ChevronDownSvg />
          </SvgIcon>
        ),
        ChipProps: {
          deleteIcon: (
            <SvgIcon sx={{ width: 20, height: 20 }}>
              <XMarkSvg />
            </SvgIcon>
          ),
        },
      },
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            '.MuiInputBase-root': {
              backgroundColor: theme.palette.grey[300],
            },
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: `${theme.palette.info.main} !important`,
            },
          },
        },

        tag: {
          background: theme.palette.info.main,
          color: theme.palette.grey[100],

          '.MuiChip-deleteIcon': {
            color: 'inherit',
            transition: theme.transitions.create('all', { duration: 200 }),

            '&:hover': {
              transform: 'rotate(90deg)',
              color: 'inherit',
            },
          },
        },

        paper: {
          marginTop: theme.spacing(1),
          padding: theme.spacing(1.5),
          boxShadow: theme.customShadows.popover,
          border: `2px solid ${theme.palette.grey[200]}`,
        },

        listbox: {
          padding: 0,
        },

        option: {
          ...theme.typography.base1Semibold,
          borderRadius: theme.shape.borderRadius,

          '&[aria-selected="true"]': {
            ...theme.typography.base1Bold,
          },

          ':not(:last-child)': {
            marginBottom: theme.spacing(0.5),
          },
        },
      },
    },
  };
}
