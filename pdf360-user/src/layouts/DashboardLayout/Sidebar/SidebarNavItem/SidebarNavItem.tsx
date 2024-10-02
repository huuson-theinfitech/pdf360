import {
  Breakpoint,
  Button,
  MenuItemProps,
  Stack,
  SvgIcon,
  SxProps,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import * as React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

import { StyledMenuItem } from './SidebarNavItem.styles';

interface ISidebarNavItemProps extends Partial<MenuItemProps & NavLinkProps> {
  title?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  url?: string;
  badge?: string | number;
  sx?: SxProps;
  foldBreakpoint?: Breakpoint;

  // Other props
  onClick?: () => void;
  className?: string;
}

const SidebarNavItem: React.FC<ISidebarNavItemProps> = ({
  title,
  startIcon,
  endIcon,
  url,
  badge,
  sx,
  foldBreakpoint,
  ...others
}) => {
  const theme = useTheme();
  const isFolded = useMediaQuery(theme.breakpoints.up(foldBreakpoint ?? 'xs'));

  return (
    <StyledMenuItem
      sx={sx}
      {...(url ? { component: NavLink, to: url } : { component: Button })}
      {...others}
    >
      <Tooltip title={title} placement='right'>
        <Stack direction='row' gap={1.5} alignItems='center' width='100%'>
          {startIcon && (
            <SvgIcon fill='gray.600' sx={{ width: 24 }}>
              {startIcon}
            </SvgIcon>
          )}

          {(!foldBreakpoint || isFolded) && (
            <>
              <Typography variant='base1Semibold' sx={{ flexGrow: 1, textAlign: 'left' }}>
                {title}
              </Typography>

              {badge && (
                <Stack
                  width={22}
                  height={24}
                  bgcolor='grey.200'
                  alignItems='center'
                  justifyContent='center'
                  borderRadius={0.5}
                  sx={{ typography: 'base1Semibold', color: 'grey.600' }}
                >
                  {badge}
                </Stack>
              )}

              {endIcon && <SvgIcon sx={{ width: 24 }}>{endIcon}</SvgIcon>}
            </>
          )}
        </Stack>
      </Tooltip>
    </StyledMenuItem>
  );
};

export default SidebarNavItem;
