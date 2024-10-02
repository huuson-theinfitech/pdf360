import { GlobalStyles as MUIGlobalStyles } from '@mui/material';
import palette from './palette';

const ToastifyStyles = {
  Toastify__toast: {
    borderRadius: 8,

    '&-container': {
      zIndex: 9999,
    },
  },
};

const GlobalStyles = () => (
  <MUIGlobalStyles
    styles={{
      '*': {
        boxSizing: 'border-box',
      },

      ':root': {
        '--toastify-color-light': palette.grey[100],
        // '--toastify-color-success': palette.success.main,
      },

      html: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        WebkitOverflowScrolling: 'touch',
        scrollBehavior: 'smooth',
      },

      body: {
        padding: 0,
        width: '100%',
        height: '100%',
        backgroundColor: palette.grey[200],
      },

      '#root': {
        width: '100%',
        height: '100%',
      },

      input: {
        '&[type=number]': {
          MozAppearance: 'textfield',
          '&::-webkit-outer-spin-button': {
            margin: 0,
            WebkitAppearance: 'none',
          },
          '&::-webkit-inner-spin-button': {
            margin: 0,
            WebkitAppearance: 'none',
          },
        },
      },

      img: {
        display: 'block',
        maxWidth: '100%',
      },

      ul: {
        margin: 0,
        padding: 0,
      },

      a: {
        textDecoration: 'none',
        color: 'inherit',
      },

      ...ToastifyStyles,
    }}
  />
);

export default GlobalStyles;
