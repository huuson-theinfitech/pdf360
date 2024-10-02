import { Components, Theme } from '@mui/material';

export default function Typography(): Components<Theme> {
  return {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          title1Semibold: 'p',
          title1Medium: 'p',
          title1Mobile: 'p',
          base1Semibold: 'div',
          base1Bold: 'div',
          base2: 'div',
          body1Semibold: 'div',
          body1Medium: 'div',
          body2Semibold: 'div',
          caption1: 'span',
          caption1Medium: 'span',
          caption2Bold: 'span',
          caption2Medium: 'span',
          button1: 'span',
          button2: 'span',
        },
      },
    },
  };
}
