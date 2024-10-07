import { Button, Stack, Typography } from '@mui/material';
import * as React from 'react';

import { BrandAppleSvg, BrandGoogleSvg } from '@/assets/icons';

const LoginPlatform: React.FC = () => {
  return (
    <Stack direction='column' gap={2.5}>
      <Typography variant='body2Semibold'>Sign in with Open account</Typography>
      <Stack direction='row' gap={1}>
        <Button variant='outlined' size='large' sx={{ flexGrow: 1 }} startIcon={<BrandGoogleSvg />}>
          Google
        </Button>
        <Button variant='outlined' size='large' sx={{ flexGrow: 1 }} startIcon={<BrandAppleSvg />}>
          Apple ID
        </Button>
      </Stack>
    </Stack>
  );
};

export default LoginPlatform;
