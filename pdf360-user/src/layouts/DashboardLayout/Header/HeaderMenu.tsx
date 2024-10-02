import { FilledStarSvg } from '@/assets/icons';
import { LanguageMenu } from '@/components';
import { Avatar, Divider } from '@mui/material';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledMenu, StyledMenuItem } from './Header.styles';

const HeaderMenu: React.FC = () => {
  const avatarEl = React.useRef<HTMLDivElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const userMenu = [
    { key: 'profile', label: 'Profile' },
    { key: 'account-settings', label: 'Account Settings', to: '/profile/settings' },
    { type: 'divider' },
    {
      key: 'upgrade-to-pro',
      label: 'Upgrade to Pro',
      icon: <FilledStarSvg />,
      sx: { color: 'purple.dark' },
    },
    { type: 'divider' },
    { key: 'logout', label: 'Log out' },
  ];

  const handleItemClick = (event: React.MouseEvent<HTMLElement>, onClick?: () => Promise<void>) => {
    event.stopPropagation();
    onClick?.().then(
      () => {},
      () => {},
    );
    handleCloseMenu();
  };

  return (
    <>
      <LanguageMenu />
      <Avatar
        ref={avatarEl}
        sx={{ width: 48, height: 48, cursor: 'pointer' }}
        onClick={handleOpenMenu}
      />
      <StyledMenu
        id='header-menu'
        anchorEl={anchorEl ?? avatarEl.current}
        open={!!anchorEl && !!avatarEl.current}
        hidden={!avatarEl.current}
        onClose={handleCloseMenu}
        elevation={0}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        MenuListProps={{ 'aria-labelledby': 'dropdown-button' }}
        autoFocus={false}
      >
        {userMenu.map(({ key, label, type, icon, to, sx }, index) =>
          type === 'divider' ? (
            // eslint-disable-next-line react/no-array-index-key
            <Divider key={`divider-${index}`} sx={sx} />
          ) : (
            <StyledMenuItem
              key={key}
              onClick={(event) => handleItemClick(event)}
              sx={{ gap: 1, ...sx }}
              {...(to && { component: NavLink, to })}
            >
              {icon}
              {label}
            </StyledMenuItem>
          ),
        )}
      </StyledMenu>
    </>
  );
};

export default HeaderMenu;
