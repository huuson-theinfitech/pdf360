import { FormControl, InputProps, Stack } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Dropzone } from '..';

interface IRHFDropzoneProps extends Omit<InputProps, 'value'> {
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RHFDropzone: React.FC<IRHFDropzoneProps> = ({ name, onChange, ...others }) => {
  const { control } = useFormContext<Record<string, FileList>>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange: controllerOnChange, ...field } }) => (
        <FormControl component={Stack} gap={1} sx={{ width: '100%' }}>
          <Dropzone
            {...field}
            {...others}
            id={name}
            value={value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const { files } = event.target;

              if (Number(files?.length) <= 0) return;

              controllerOnChange(event.target.files);
              onChange?.(event);
            }}
          />
        </FormControl>
      )}
    />
  );
};

export default RHFDropzone;
