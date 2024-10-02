import '@mui/material/styles';

import { Palette } from '@/themes/palette';
import { Shadows } from '@/themes/shadows';
import { Typography } from '@/themes/typography';

// MUI customization docs: https://mui.com/material-ui/customization/theming/
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    '2xl': true;
    '3xl': true;
    '4xl': true;
  }

  interface TypographyVariants {
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    h3: React.CSSProperties;
    h4: React.CSSProperties;
    title1Semibold: React.CSSProperties;
    title1Medium: React.CSSProperties;
    title1Mobile: React.CSSProperties;
    base1Semibold: React.CSSProperties;
    base1Bold: React.CSSProperties;
    base2: React.CSSProperties;
    body1Semibold: React.CSSProperties;
    body1Medium: React.CSSProperties;
    body2Semibold: React.CSSProperties;
    caption1: React.CSSProperties;
    caption1Medium: React.CSSProperties;
    caption2Bold: React.CSSProperties;
    caption2Semibold: React.CSSProperties;
    caption2Medium: React.CSSProperties;
    button1: React.CSSProperties;
    button2: React.CSSProperties;
  }

  // Allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h1?: React.CSSProperties;
    h2?: React.CSSProperties;
    h3?: React.CSSProperties;
    h4?: React.CSSProperties;
    title1Semibold?: React.CSSProperties;
    title1Medium?: React.CSSProperties;
    title1Mobile?: React.CSSProperties;
    base1Semibold?: React.CSSProperties;
    base1Bold?: React.CSSProperties;
    base2?: React.CSSProperties;
    body1Semibold?: React.CSSProperties;
    body1Medium?: React.CSSProperties;
    body2Semibold?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption1Medium?: React.CSSProperties;
    caption2Bold?: React.CSSProperties;
    caption2Semibold?: React.CSSProperties;
    caption2Medium?: React.CSSProperties;
    button1?: React.CSSProperties;
    button2?: React.CSSProperties;
  }

  interface Theme {
    palette: Palette;
    typography: Typography;
    customShadows: Shadows;
  }

  interface ThemeOptions {
    palette: Palette;
    typography: Typography;
    customShadows: Shadows;
  }
}
