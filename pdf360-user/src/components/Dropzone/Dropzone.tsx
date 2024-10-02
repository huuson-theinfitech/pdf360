import { InputProps } from '@mui/material';
import * as React from 'react';

import { UploadSvg } from '@/assets/icons';
import { StyledButton, StyledFileInput, StyledWrapper } from './Dropzone.styles';

interface IDropzoneProps extends Omit<InputProps, 'value'> {
  value?: FileList | null;
}

const Dropzone: React.FC<IDropzoneProps> = React.forwardRef(
  ({ value, onChange, ...others }, ref) => {
    return (
      <StyledWrapper>
        <StyledButton component='label' variant='outlined' size='large' startIcon={<UploadSvg />}>
          Upload file here
          <StyledFileInput
            {...others}
            ref={ref}
            type='file'
            onChange={onChange}
            inputProps={{
              accept: '*',
              hidden: true,
              'aria-hidden': 'true',
              ...others.inputProps,
            }}
          />
        </StyledButton>
      </StyledWrapper>
    );
  },
);

Dropzone.displayName = 'Dropzone';

export default Dropzone;
