import { MenuList, styled } from '@mui/material';
import SidebarNavItem from '../SidebarNavItem/SidebarNavItem';

export const StyledSubNavHead = styled(SidebarNavItem)(({ theme }) => ({
  ':hover:not(.active)': {
    backgroundColor: 'transparent',
  },

  // Down arrow
  '& > div > svg:last-of-type': {
    transition: theme.transitions.create('transform'),
  },
  '&.expanded > div > svg:not(:first-of-type):last-of-type': {
    transform: 'rotate(180deg)',
  },
}));

export const StyledMenuList = styled(MenuList)(({ theme }) => ({
  padding: 0,
  paddingLeft: theme.spacing(4.5),

  ':before': {
    content: `""` /* equal to none */,
    position: 'absolute',
    top: 0,
    left: 23,
    bottom: 32,
    width: 2,
    borderRadius: 2,
    background: theme.palette.grey[300],
  },
}));

export const StyledSidebarNavItem = styled(SidebarNavItem)(() => ({
  ':before': {
    content: `""` /* equal to none */,
    position: 'absolute',
    top: 12,
    left: -13,
    width: 12,
    height: 12,
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none' viewBox='0 0 14 14'%3E%3Cpath d='M1 1v4a8 8 0 0 0 8 8h4' stroke='%23efefef' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat 50% 50% / 100% auto`,
  },

  // Right arrow
  '& > div > svg:last-of-type': {
    display: 'none',
  },
  '&.active > div > svg:last-of-type': {
    display: 'block',
  },
}));
