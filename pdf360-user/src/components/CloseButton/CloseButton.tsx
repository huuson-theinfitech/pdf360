import { IconButtonProps, SvgIcon } from '@mui/material';
import * as React from 'react';

import { XMarkSvg } from '@/assets/icons';
import { StyledCloseButton } from './CloseButton.styles';

interface ICloseButtonProps extends IconButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CloseButton: React.FC<ICloseButtonProps> = ({ ...others }) => {
  return (
    <StyledCloseButton {...others}>
      <SvgIcon sx={{ width: 20, height: 20 }}>
        <XMarkSvg />
      </SvgIcon>
    </StyledCloseButton>
  );
};

export default CloseButton;
