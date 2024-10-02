import { Box, Stack, SxProps, Typography } from '@mui/material';
import * as React from 'react';

interface ICardTitleProps extends Partial<typeof Stack> {
  id?: string;
  color?: string;
  children: React.ReactNode;
  sx?: SxProps;
}

const CardTitle: React.FC<ICardTitleProps> = ({ color = 'info.light', children, ...others }) => {
  return (
    <Stack direction='row' gap={2} alignItems='center' {...others}>
      <Box width={16} height={32} bgcolor={color} sx={{ borderRadius: 0.25 }} />
      <Typography variant='title1Semibold'>{children}</Typography>
    </Stack>
  );
};

export default CardTitle;
