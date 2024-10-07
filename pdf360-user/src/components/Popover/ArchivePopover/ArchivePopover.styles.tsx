import { MenuItem, Popover, styled } from '@mui/material';

export const StyledPopover = styled(Popover)(({ theme }) => ({
  '.MuiPaper-root': {
    padding: theme.spacing(2),
    borderRadius: 16,
    boxShadow: theme.customShadows.popover,
    transform: `translateY(-${theme.spacing(3)}) translateX(${theme.spacing(3)}) !important`,
  },
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.grey[400],
  ...theme.typography.body1Semibold,
  ':hover': {
    color: theme.palette.grey[800],
  },
})) as typeof MenuItem;
