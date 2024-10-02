import { Components, Theme } from '@mui/material';

export default function Container(_theme: Theme): Components<Theme> {
  return {
    MuiContainer: {
      defaultProps: {
        maxWidth: '4xl',
      },
    },
  };
}
