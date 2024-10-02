import { Stack } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { StyledMainWrapper } from './DashboardLayout.styles';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { SIDEBAR_WIDTH } from './Sidebar/Sidebar.config';
import Title from './Title/Title';

interface IDashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout: React.FC<IDashboardLayoutProps> & {
  Title: typeof Title;
} = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleToggleSideBar = () => {
    setIsSideBarOpen((currentState) => !currentState);
  };

  return (
    <Stack direction='row' minHeight='100vh'>
      <Header onToggleDrawer={handleToggleSideBar} sx={{ ml: SIDEBAR_WIDTH }} />
      <Sidebar isOpen={isSideBarOpen} onToggleOpen={handleToggleSideBar} />
      <StyledMainWrapper component='main'>{children ?? <Outlet />}</StyledMainWrapper>
    </Stack>
  );
};

DashboardLayout.Title = Title;

export default DashboardLayout;
