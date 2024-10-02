import { MenuItem, styled } from '@mui/material';

export const StyledMenuItem = styled(MenuItem)(({ theme }) => {
  return {
    borderRadius: theme.shape?.borderRadius,
    height: 48,
    minWidth: 48,
    padding: theme.spacing(0, 1.5),
    color: theme.palette.grey[500],
    transition: theme.transitions.create('all'),
    textTransform: 'none',
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',

    '&.active': {
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.customShadows.boxInset,
      color: theme.palette.grey[700],
    },

    ':hover': {
      color: theme.palette.grey[700],
    },
  };
});
