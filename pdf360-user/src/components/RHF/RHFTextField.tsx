import {
  BaseTextFieldProps,
  FormHelperText,
  InputAdornment,
  InputLabel,
  Stack,
  SvgIcon,
  TextField,
  Tooltip,
} from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { FilledCircleInfoSvg } from '@/assets/icons';

interface IRHFTextFieldProps extends BaseTextFieldProps {
  name: string;
  label?: string;
  tooltipTitle?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  wrapperProps?: React.ComponentProps<typeof Stack>;
}

const RHFTextField: React.FC<IRHFTextFieldProps> = ({
  name,
  label,
  tooltipTitle,
  startAdornment,
  endAdornment,
  wrapperProps,
  ...others
}) => {
  const { control } = useFormContext<Record<string, string>>();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=''
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <Stack gap={1.75} {...wrapperProps}>
          {label && (
            <Stack direction='row' alignItems='center' gap={0.5}>
              <InputLabel htmlFor={name} sx={{ typography: 'base2', color: 'grey.500' }}>
                {label}
              </InputLabel>

              {tooltipTitle && (
                <Tooltip title={tooltipTitle} placement='right'>
                  <SvgIcon sx={{ width: 16, height: 16, color: 'grey.350', cursor: 'pointer' }}>
                    <FilledCircleInfoSvg />
                  </SvgIcon>
                </Tooltip>
              )}
            </Stack>
          )}

          <TextField
            id={name}
            value={value}
            type='text'
            onChange={onChange}
            error={!!error}
            InputProps={{
              startAdornment: startAdornment && (
                <InputAdornment position='start'>{startAdornment}</InputAdornment>
              ),
              endAdornment: endAdornment && (
                <InputAdornment position='end'>{endAdornment}</InputAdornment>
              ),
              autoComplete: 'off',
              autoCapitalize: 'off',
            }}
            {...others}
          />

          {error && (
            <FormHelperText error={!!error} sx={{ typography: 'contentSRegular' }}>
              {error.message}
            </FormHelperText>
          )}
        </Stack>
      )}
    />
  );
};

export default RHFTextField;
