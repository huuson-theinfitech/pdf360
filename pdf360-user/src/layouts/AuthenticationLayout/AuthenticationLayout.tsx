import { Box, Stack } from '@mui/material';
import * as React from 'react';
import { Outlet } from 'react-router-dom';

interface IAuthenticationLayoutProps {
  children?: React.ReactNode;
}

const AuthenticationLayout: React.FC<IAuthenticationLayoutProps> = ({ children }) => {
  return (
    <Stack direction='row' flexGrow={1}>
      <Box
        position='fixed'
        height='100vh'
        width={{ lg: 320, xl: 480, '3xl': 520 }}
        sx={{ display: { xs: 'none', lg: 'block' } }}
      >
        <Box
          component='img'
          src='https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'
          alt='Core Dashboard'
          sx={{ objectFit: 'cover', height: '100%', width: '100%', filter: 'brightness(0.9)' }}
        />
      </Box>

      <Box
        width={{ lg: 320, xl: 480, '3xl': 520 }}
        sx={{ display: { xs: 'none', lg: 'block' } }}
        flexShrink={0}
      />

      <Stack
        alignItems='center'
        justifyContent='center'
        minHeight='100vh'
        width='100%'
        bgcolor='grey.100'
        p={6}
      >
        <Stack direction='column' maxWidth={320} gap={4}>
          {children ?? <Outlet />}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AuthenticationLayout;
