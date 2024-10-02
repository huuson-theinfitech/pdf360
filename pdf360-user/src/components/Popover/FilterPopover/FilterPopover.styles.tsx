import { Popover, alpha, styled } from '@mui/material';

export const StyledPopover = styled(Popover)(({ theme }) => ({
  '.MuiBackdrop-root ': {
    backgroundColor: alpha(theme.palette.grey[200], 0.8),
  },

  '.MuiPaper-root': {
    width: 400,
    padding: theme.spacing(3),
    borderRadius: 16,
    boxShadow: theme.customShadows.popover,
    transform: `translateY(-${theme.spacing(3)}) translateX(${theme.spacing(3)}) !important`,
  },
}));
