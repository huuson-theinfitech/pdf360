import { ArchivePopover } from '@/components';
import useDeletePdfFile from '@/hooks/useDeletePdfFile';
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
  onClick?: () => void;
  className?: string;
  pdfId?: string;
}

const SidebarNavItem: React.FC<ISidebarNavItemProps> = ({
  title,
  startIcon,
  endIcon,
  url,
  badge,
  sx,
  pdfId,
  foldBreakpoint,
  ...others
}) => {
  const { mutate } = useDeletePdfFile(pdfId ?? '');
  const theme = useTheme();
  const isFolded = useMediaQuery(theme.breakpoints.up(foldBreakpoint ?? 'xs'));
  const [isHovered, setIsHovered] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleSubmit = () => {
    mutate();
    setAnchorEl(null);
  };

  return (
    <StyledMenuItem
      sx={sx}
      {...(url ? { component: NavLink, to: url } : { component: Button })}
      {...others}
    >
      <Stack
        direction='row'
        gap={1.5}
        alignItems='center'
        width='100%'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {startIcon && (
          <SvgIcon fill='gray.600' sx={{ width: 24 }}>
            {startIcon}
          </SvgIcon>
        )}
        {(!foldBreakpoint || isFolded) && (
          <>
            <Tooltip title={title} placement='bottom'>
              <Typography
                variant='base1Semibold'
                sx={{
                  flexGrow: 1,
                  textAlign: 'left',
                  maxWidth: '250px',
                  overflowX: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                {title}
              </Typography>
            </Tooltip>

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

            {endIcon && isHovered && (
              <ArchivePopover
                title='Delete the file'
                icon={<SvgIcon sx={{ width: 20 }}>{endIcon}</SvgIcon>}
                anchorEl={anchorEl}
                open={!!anchorEl}
                onOpen={handleOpen}
                onClose={handleClose}
                children={
                  <Stack gap={2}>
                    <Typography>Are you sure to delete this file?</Typography>
                    <Stack direction='row' justifyContent='flex-end' gap={1}>
                      <Button variant='contained' color='inherit' onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button variant='contained' onClick={handleSubmit}>
                        Yes
                      </Button>
                    </Stack>
                  </Stack>
                }
              />
            )}
          </>
        )}
      </Stack>
    </StyledMenuItem>
  );
};

export default SidebarNavItem;
