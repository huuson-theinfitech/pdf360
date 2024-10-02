import { IconButton, styled } from '@mui/material';

export const StyledCloseButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
  color: theme.palette.grey[700],
  transition: theme.transitions.create('all', { duration: 200 }),

  position: 'absolute',
  top: theme.spacing(3),
  right: theme.spacing(3),

  ':hover': {
    transform: 'rotate(90deg)',
  },
}));
