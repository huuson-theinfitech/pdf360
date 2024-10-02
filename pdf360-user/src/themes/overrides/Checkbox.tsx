import { Components, Theme } from '@mui/material';

import { FilledSquareCheckSvg, FilledSquareMinusSvg, SquareSvg } from '@/assets/icons';

export default function Checkbox(theme: Theme): Components<Theme> {
  return {
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
        icon: <SquareSvg />,
        checkedIcon: <FilledSquareCheckSvg />,
        indeterminateIcon: <FilledSquareMinusSvg />,
      },
      styleOverrides: {
        root: {
          padding: 0,
          color: theme.palette.grey[350],

          '&:hover': {
            color: theme.palette.info.main,
          },
        },
        checked: {
          color: theme.palette.info.main,
        },
      },
    },
  };
}
