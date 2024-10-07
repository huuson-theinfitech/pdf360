import { Box, Drawer, alpha, useTheme } from '@mui/material';
import * as React from 'react';
import { useLocation } from 'react-router-dom';

import { FOLD_BREAKPOINT, SIDEBAR_WIDTH } from './Sidebar.config';
import SidebarNav from './SidebarNav';

interface ISidebarProps {
  isOpen: boolean;
  onToggleOpen: () => void;
}

const Sidebar: React.FC<ISidebarProps> = ({ isOpen, onToggleOpen }) => {
  const { pathname } = useLocation();
  const theme = useTheme();

  React.useEffect(() => {
    if (isOpen) onToggleOpen();
  }, [pathname]);

  return (
    <Box component='aside' sx={{ flexShrink: { md: 0 }, width: SIDEBAR_WIDTH }}>
      <Drawer
        variant='permanent'
        sx={{ display: { xs: 'none', lg: 'block' } }}
        PaperProps={{ sx: { width: SIDEBAR_WIDTH, p: { '4xl': 3 } } }}
      >
        <SidebarNav onToggleOpen={onToggleOpen} foldBreakpoint={FOLD_BREAKPOINT} />
      </Drawer>

      <Drawer
        open={isOpen}
        onClose={onToggleOpen}
        variant='temporary'
        ModalProps={{ keepMounted: true }}
        sx={{ display: { [FOLD_BREAKPOINT]: 'none' } }}
        PaperProps={{
          sx: {
            width: { xs: '100%', md: 300 },
            boxShadow: `4px 0 32px ${alpha(theme.palette.grey[800], 0.05)}`,
            border: 'none',
            p: { '4xl': 3 },
          },
        }}
      >
        <SidebarNav onToggleOpen={onToggleOpen} />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
