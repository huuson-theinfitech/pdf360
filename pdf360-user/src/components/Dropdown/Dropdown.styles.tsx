import { Button, Menu, MenuItem, styled } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  justifyContent: 'space-between',

  ':hover': {
    borderColor: theme.palette.grey[350],
  },
}));

export const StyledMenu = styled(Menu)(({ theme }) => ({
  '.MuiPaper-root': {
    marginTop: theme.spacing(0.5),
    minWidth: 180,
    border: `2px solid ${theme.palette.grey[300]}`,
  },
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.grey[400],
  transition: theme.transitions.create('all'),
  ...theme.typography.base2,

  ':hover': {
    color: theme.palette.grey[800],
  },

  '&.Mui-selected': {
    color: theme.palette.info.dark,
    backgroundColor: 'transparent',
  },
}));
