import '@mui/material/Typography';

// MUI customization docs: https://mui.com/material-ui/customization/typography/
// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: true;
    h2: true;
    h3: true;
    h4: true;

    title1Semibold: true;
    title1Medium: true;
    title1Mobile: true;
    base1Semibold: true;
    base1Bold: true;
    base2: true;
    body1Semibold: true;
    body1Medium: true;
    body2Semibold: true;
    caption1: true;
    caption1Medium: true;
    caption2Bold: true;
    caption2Semibold: true;
    caption2Medium: true;
    button1: true;
    button2: true;

    inherit: true;

    // Disable the following variants
    h5: false;
    h6: false;
    base1: false;
    body1: false;
    body2: false;
    subtitle1: false;
    subtitle2: false;
    button: false;
    caption: false;
    overline: false;
  }
}
