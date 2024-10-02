import { Card, styled } from '@mui/material';

export const StyledSuggestionsCard = styled(Card)(({ theme }) => ({
  position: 'absolute',
  top: -12,
  left: -12,
  right: -12,
  padding: theme.spacing(10, 1.5, 1.5, 1.5),
  zIndex: -1,
  borderRadius: theme.shape.borderRadius * 1.75,
  backgroundColor: theme.palette.grey[0],
  boxShadow: theme.customShadows.popover,
  transition: theme.transitions.create('all'),
  visibility: 'hidden',
  opacity: 0,

  '&.active': {
    visibility: 'visible',
    opacity: 1,
  },
}));
