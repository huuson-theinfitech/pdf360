import { alpha } from '@mui/material';

export interface Palette {
  grey: {
    0: string;
    100: string;
    200: string;
    300: string;
    350: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  success: {
    lighter: string;
    light: string;
    main: string;
    dark: string;
  };

  error: {
    light: string;
    main: string;
    dark: string;
  };

  warning: {
    light: string;
    main: string;
    dark: string;
  };

  info: {
    lighter: string;
    light: string;
    main: string;
    dark: string;
    darker: string;
  };

  purple: {
    light: string;
    main: string;
    dark: string;
  };

  divider: string;

  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };

  primary: {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
  };

  background: {
    paper: string;
    default: string;
  };

  action: {
    active: string;
    hover: string;
    selected: string;
    disabled: string;
    disabledBackground: string;
    focus: string;
    hoverOpacity: number;
    disabledOpacity: number;
  };
}

// TODO: Refactor palette with hue hierarchy and color functions

const GREY = {
  0: '#FFFFFF',
  100: '#FCFCFC',
  200: '#F4F4F4',
  300: '#EFEFEF',
  350: alpha('#6F767E', 0.75),
  400: '#6F767E',
  500: '#33383F',
  600: '#272B30',
  700: '#1A1D1F',
  800: '#111315',
  900: '#000000',
};

const SUCCESS = {
  lighter: '#EDF8F2',
  light: '#B5E4CA',
  main: '#83BF6E',
  dark: '#34A853',
};

const ERROR = {
  light: '#FFBC99',
  main: '#FF6A55',
  dark: '#EA4335',
};

const INFO = {
  lighter: '#ECF9FE',
  light: '#B1E5FC',
  main: '#659EEA',
  dark: '#2A85FF',
  darker: '#0069f6',
};

const WARNING = {
  light: '#FFD88D',
  main: '#FFC554',
  dark: '#FBBC05',
};

const PURPLE = {
  light: '#f2efff',
  main: '#CABDFF',
  dark: '#8E59FF',
};

const palette: Palette = {
  grey: GREY,
  divider: GREY[300],
  success: SUCCESS,
  error: ERROR,
  warning: WARNING,
  info: INFO,
  purple: PURPLE,

  primary: {
    light: INFO.light,
    main: INFO.dark,
    dark: INFO.darker,
    contrastText: GREY[100],
  },

  text: {
    primary: GREY[800],
    secondary: GREY[700],
    disabled: GREY[500],
  },

  background: {
    paper: GREY[100],
    default: GREY[100],
  },

  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[400], 0.75),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
