import { IconButton, TextField, alpha, styled } from '@mui/material';

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',

  '.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: `${theme.palette.info.dark} !important`,
  },
}));

export const StyledClearButton = styled(IconButton)(({ theme }) => ({
  color: alpha(theme.palette.grey[400], 0.75),
  padding: 0,
  transition: theme.transitions.create('color'),

  ':hover': {
    color: theme.palette.error.main,
  },
}));
