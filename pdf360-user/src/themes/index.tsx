import { CssBaseline, ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material';
// import { StylesProvider } from '@mui/styles';
import React from 'react';

import GlobalStyles from './GlobalStyle';
import componentsOverride from './overrides';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';

interface IThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const theme = createTheme({
    palette,
    shape: { borderRadius: 12 },
    typography,
    customShadows: shadows,
    breakpoints: {
      values: {
        xs: 0,
        sm: 474,
        md: 639,
        lg: 767,
        xl: 1023,
        '2xl': 1259,
        '3xl': 1339,
        '4xl': 1650,
      },
    },
  });

  // TODO: Fix Theme and BaseTheme type conflict
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  theme.components = componentsOverride(theme);
  theme.shadows = { ...theme.shadows, ...shadows };

  return (
    // <StylesProvider injectFirst>
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </MUIThemeProvider>
    // </StylesProvider>
  );
};

export default ThemeProvider;
