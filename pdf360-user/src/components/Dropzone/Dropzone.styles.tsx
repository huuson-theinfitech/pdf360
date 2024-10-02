import { Button, Input, Stack, styled } from '@mui/material';

export const StyledWrapper = styled(Stack)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 80,

  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.grey[300],
  borderRadius: theme.shape.borderRadius,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.grey[700],
  position: 'unset',
  color: theme.palette.grey[100],
  ':hover': {
    backgroundColor: theme.palette.grey[600],
  },
  overflowX: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  maxWidth: '80%',
  fontSize: 12,
})) as typeof Button;

export const StyledFileInput = styled(Input)(() => ({
  opacity: 0,
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',

  ':before': {
    content: 'none',
  },

  ':after': {
    content: 'none',
  },

  '.MuiInput-input': {
    opacity: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    cursor: 'pointer',
    padding: 0,
  },
}));
