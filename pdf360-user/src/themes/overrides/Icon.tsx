import { Components, Theme } from '@mui/material';

export default function Icon(theme: Theme): Components<Theme> {
  return {
    MuiSvgIcon: {
      defaultProps: {
        color: 'inherit',
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
    },
  };
}
