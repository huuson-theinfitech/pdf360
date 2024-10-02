import { ButtonProps, MenuProps, SvgIcon, Typography, useTheme } from '@mui/material';
import * as React from 'react';

import { ChevronDownSvg } from '@/assets/icons';
import { Menu, MenuItem } from '.';
import { StyledButton, StyledMenu, StyledMenuItem } from './Dropdown.styles';

interface IDropdownProps {
  defaultSelectedKey?: MenuItem['key'];
  placeholder?: string;
  menu: Menu;
  buttonProps?: ButtonProps;
  menuProps?: MenuProps;
}

const Dropdown: React.FC<IDropdownProps> = ({
  defaultSelectedKey,
  placeholder,
  menu,
  buttonProps = { size: 'large' },
  menuProps,
}) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [selectedKey, setSelectedKey] = React.useState<MenuItem['key'] | undefined>(
    defaultSelectedKey,
  );

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSelect = (key: MenuItem['key']) => {
    setSelectedKey(key);
    menu.onSelect?.(key);
    handleCloseMenu();
  };

  const selectedLabel = React.useMemo(
    () => menu.items.find((item) => item.key === selectedKey)?.label,
    [menu.items, selectedKey],
  );

  return (
    <>
      <StyledButton
        id='dropdown-button'
        variant='outlined'
        size={buttonProps.size}
        disableElevation
        onClick={handleOpenMenu}
        endIcon={
          <SvgIcon
            sx={{
              width: 16,
              height: 16,
              rotate: `${open ? 180 : 0}deg`,
              transition: theme.transitions.create('all'),
            }}
          >
            <ChevronDownSvg />
          </SvgIcon>
        }
        sx={{ typography: buttonProps.size === 'large' ? 'base1Semibold' : 'base2' }}
        aria-controls={open ? 'dropdown-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open}
        {...buttonProps}
      >
        {selectedLabel ?? (
          <Typography variant='inherit' color='grey.400'>
            {placeholder ?? 'Select'}
          </Typography>
        )}
      </StyledButton>

      <StyledMenu
        id='dropdown-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        elevation={0}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        MenuListProps={{ 'aria-labelledby': 'dropdown-button' }}
        {...menuProps}
      >
        {menu.items.map(({ key, label, disabled }) => (
          <StyledMenuItem
            key={key}
            selected={key === selectedKey}
            disabled={disabled}
            onClick={() => handleSelect(key)}
          >
            {label}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </>
  );
};

export default Dropdown;
