import { alpha } from '@mui/material';
import palette from './palette';

export interface Shadows {
  boxInset: string;
  popover: string;
}

const shadows: Shadows = {
  boxInset: [
    `inset 0px -2px 1px ${alpha(palette.grey[900], 0.05)}`,
    `inset 0px 1px 1px ${palette.grey[0]}`,
  ].join(', '),
  popover: [
    `0px 0px 14px -4px ${alpha(palette.grey[900], 0.05)}`,
    `0px 32px 48px -8px ${alpha(palette.grey[900], 0.1)}`,
    `0px 40px 64px -12px ${alpha(palette.grey[900], 0.08)}`,
  ].join(', '),
};

export default shadows;
