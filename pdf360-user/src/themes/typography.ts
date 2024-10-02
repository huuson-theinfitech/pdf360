import { pxToRem } from '@/utils/typography';

const FONT_PRIMARY =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';

export interface Typography {
  fontFamily: string;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;

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

const typography: Typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,

  // Heading
  h1: {
    fontWeight: 600,
    fontSize: pxToRem(64),
    lineHeight: 64 / 64,
    letterSpacing: -1.92 /* -3% */,
  },
  h2: {
    fontWeight: 600,
    fontSize: pxToRem(48),
    lineHeight: 48 / 48,
    letterSpacing: -1.44 /* -3% */,
  },
  h3: {
    fontWeight: 600,
    fontSize: pxToRem(40),
    lineHeight: 48 / 40,
    letterSpacing: -0.8 /* -2% */,
  },
  h4: {
    fontWeight: 600,
    fontSize: pxToRem(32),
    lineHeight: 40 / 32,
    letterSpacing: -0.96 /* -3% */,
  },

  // Title
  title1Semibold: {
    fontWeight: 600,
    fontSize: pxToRem(20),
    lineHeight: 32 / 20,
    letterSpacing: -0.4 /* -2% */,
  },
  title1Medium: {
    fontWeight: 500,
    fontSize: pxToRem(20),
    lineHeight: 32 / 20,
    letterSpacing: -0.4 /* -2% */,
  },
  title1Mobile: {
    fontWeight: 600,
    fontSize: pxToRem(18),
    lineHeight: 32 / 20,
    letterSpacing: -0.36 /* -2% */,
  },

  // Base
  base1Semibold: {
    fontWeight: 600,
    fontSize: pxToRem(15),
    lineHeight: 24 / 15,
    letterSpacing: -0.15 /* -1% */,
  },
  base1Bold: {
    fontWeight: 700,
    fontSize: pxToRem(15),
    lineHeight: 24 / 15,
    letterSpacing: -0.15 /* -1% */,
  },
  base2: {
    fontWeight: 600,
    fontSize: pxToRem(14),
    lineHeight: 24 / 14,
    letterSpacing: -0.54 /* -1% */,
  },

  // Body
  body1Semibold: {
    fontWeight: 600,
    fontSize: pxToRem(15),
    lineHeight: 24 / 15,
    letterSpacing: -0.15 /* -1% */,
  },
  body1Medium: {
    fontWeight: 500,
    fontSize: pxToRem(15),
    lineHeight: 24 / 15,
    letterSpacing: -0.225 /* -1.5% */,
  },
  body2Semibold: {
    fontWeight: 600,
    fontSize: pxToRem(14),
    lineHeight: 24 / 14,
    letterSpacing: -0.14 /* -1% */,
  },

  // Caption
  caption1: {
    fontWeight: 600,
    fontSize: pxToRem(13),
    lineHeight: 16 / 13,
    letterSpacing: -0.13 /* -1% */,
  },
  caption1Medium: {
    fontWeight: 500,
    fontSize: pxToRem(13),
    lineHeight: 16 / 13,
    letterSpacing: -0.13 /* -1% */,
  },
  caption2Bold: {
    fontWeight: 700,
    fontSize: pxToRem(12),
    lineHeight: 16 / 12,
    letterSpacing: -0.12 /* -1% */,
  },
  caption2Semibold: {
    fontWeight: 600,
    fontSize: pxToRem(12),
    lineHeight: 16 / 12,
    letterSpacing: -0.12 /* -1% */,
  },
  caption2Medium: {
    fontWeight: 500,
    fontSize: pxToRem(12),
    lineHeight: 16 / 12,
    letterSpacing: -0.12 /* -1% */,
  },

  // Button
  button1: {
    fontWeight: 700,
    fontSize: pxToRem(15),
    lineHeight: 24 / 15,
    letterSpacing: -0.15 /* -1% */,
  },
  button2: {
    fontWeight: 700,
    fontSize: pxToRem(13),
    lineHeight: 24 / 13,
    letterSpacing: -0.13 /* -1% */,
  },
};

export default typography;
