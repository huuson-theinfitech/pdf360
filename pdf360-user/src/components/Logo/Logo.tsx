import { Box, Link, SxProps } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import LogoDark from '@/assets/images/logo-dark.png';
import LogoLight from '@/assets/images/logo-light.png';

interface ILogoProps {
  disabledLink?: boolean;
  size?: number;
  inverted?: boolean;
  sx?: SxProps;
}

const Logo: React.FC<ILogoProps> = ({
  disabledLink = false,
  size = 48,
  inverted = false,
  sx = {},
  ...others
}) => {
  const logo = (
    <Box sx={{ width: size, height: size, display: 'inline-flex', ...sx }} {...others}>
      <img src={inverted ? LogoLight : LogoDark} alt='Logo' />
    </Box>
  );

  if (disabledLink) return logo;
  return (
    <Link to='/' component={RouterLink}>
      {logo}
    </Link>
  );
};

export default Logo;
