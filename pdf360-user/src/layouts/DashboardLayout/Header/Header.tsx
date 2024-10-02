import { AppBar, Badge, IconButton, Stack, SxProps, Toolbar } from '@mui/material';
import * as React from 'react';

import { BellSvg, MenuSvg, MessageLineSvg, SearchSvg } from '@/assets/icons';
import { SuggestionSearch } from '@/components';
import HeaderMenu from './HeaderMenu';

interface IHeaderProps {
  onToggleDrawer: () => void;
  sx: SxProps;
}

const Header: React.FC<IHeaderProps> = ({ onToggleDrawer, sx }) => {
  return (
    <AppBar position='fixed'>
      <Toolbar
        component={Stack}
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        gap={2}
        borderLeft='none'
        sx={{ p: 2, ...sx }}
      >
        <Stack direction='row' alignItems='center' gap={2}>
          <SuggestionSearch shortcutKey='⌘ K' sx={{ display: { xs: 'none', lg: 'block' } }} />
          <IconButton
            edge='start'
            onClick={onToggleDrawer}
            aria-label='Open drawer'
            sx={{ display: { lg: 'none' } }}
          >
            <MenuSvg />
          </IconButton>
        </Stack>

        <Stack direction='row' alignItems='center' gap={3}>
          <IconButton
            edge='start'
            aria-label='Search'
            sx={{ display: { lg: 'none' }, m: 0, color: 'grey.400' }}
          >
            <SearchSvg />
          </IconButton>

          <>
            <IconButton edge='start' aria-label='Message' sx={{ m: 0, color: 'grey.400' }}>
              <Badge color='error' variant='dot' overlap='circular'>
                <MessageLineSvg />
              </Badge>
            </IconButton>

            <IconButton edge='start' aria-label='Notifcation' sx={{ m: 0, color: 'grey.400' }}>
              <Badge color='error' variant='dot' overlap='circular'>
                <BellSvg />
              </Badge>
            </IconButton>

            <HeaderMenu />
          </>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
