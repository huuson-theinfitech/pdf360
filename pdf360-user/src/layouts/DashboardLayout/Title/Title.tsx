import { Stack, Typography } from '@mui/material';
import * as React from 'react';

interface ITitleProps {
  children?: React.ReactNode;
  actions?: React.ReactNode;
}

const Title: React.FC<ITitleProps> = ({ children, actions }) => {
  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center' mb={3} gap={3}>
      <Typography sx={{ typography: { xs: 'h4', lg: 'h3' } }}>{children}</Typography>

      {actions}
    </Stack>
  );
};

export default Title;
