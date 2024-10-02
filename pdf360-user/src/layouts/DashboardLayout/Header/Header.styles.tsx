import { Menu, MenuItem, alpha, styled } from '@mui/material';

export const StyledMenu = styled(Menu)(({ theme }) => ({
  marginTop: theme.spacing(1),

  '.MuiPaper-root': {
    width: 280,
    borderRadius: (theme.shape.borderRadius * 16) / 12,
    overflow: 'visible',
    filter: `drop-shadow(0 0 12px ${alpha(theme.palette.grey[500], 0.1)})`,
    marginTop: theme.spacing(1.5),

    ':before': {
      display: 'block',
      content: '""',
      position: 'absolute',
      background: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='10' fill='none'%3E%3Cpath d='M6.927 1.687 0 10h20l-6.927-8.313a4 4 0 0 0-6.146 0z' fill='%23fff'/%3E%3C/svg%3E") no-repeat 50% 50%/100% auto`,
      bottom: '100%',
      height: 10,
      right: 16,
      width: 20,
    },
  },

  '.MuiList-root': {
    padding: `${theme.spacing(2)} !important`,
  },
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.grey[400],
  ...theme.typography.base1Semibold,
  transition: theme.transitions.create('all'),

  '&:hover': {
    color: theme.palette.grey[800],
    backgroundColor: 'transparent',
  },

  '&.active': {
    color: theme.palette.grey[800],
    backgroundColor: theme.palette.grey[300],
  },
}));
