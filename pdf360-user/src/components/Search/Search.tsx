import { Box, InputAdornment, OutlinedTextFieldProps, Stack, SvgIcon } from '@mui/material';
import * as React from 'react';

import { FilledCircleXMarkSvg, SearchSvg } from '@/assets/icons';
import { StyledClearButton, StyledTextField } from './Search.styles';

interface ISearchProps extends Partial<OutlinedTextFieldProps> {
  shortcutKey?: string;
  onClear?: () => void;
}

interface IShortcutKeyProps {
  shortcut: string;
}

const ShortcutKey: React.FC<IShortcutKeyProps> = ({ shortcut }) => (
  <Stack
    px={1.5}
    py={0.5}
    bgcolor='grey.100'
    boxShadow='boxInset'
    borderRadius={0.75}
    display={{ xs: 'none', lg: 'flex' }}
    sx={{ typography: 'base1Semibold' }}
  >
    {shortcut}
  </Stack>
);

const Search: React.FC<ISearchProps> = ({
  placeholder = 'Search',
  size = 'small',
  shortcutKey,
  onSubmit,
  onChange,
  onClear,
  ...others
}) => {
  const [value, setValue] = React.useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange?.(event);
  };

  const handleClearInput = () => {
    setValue('');
    onClear?.();
  };

  const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    onSubmit?.(event);
  };

  return (
    <Box component='form' minWidth={320} onSubmit={handleSubmit}>
      <StyledTextField
        name='search'
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        size={size}
        InputProps={{
          'aria-label': 'search',
          autoComplete: 'off',
          startAdornment: (
            <InputAdornment position='start'>
              <SvgIcon sx={{ color: 'grey.400' }}>
                <SearchSvg />
              </SvgIcon>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='end'>
              {value ? (
                <StyledClearButton disableRipple onClick={handleClearInput}>
                  <FilledCircleXMarkSvg />
                </StyledClearButton>
              ) : (
                shortcutKey && <ShortcutKey shortcut={shortcutKey} />
              )}
            </InputAdornment>
          ),
          sx: { maxWidth: '100%', ...others.sx },
        }}
        {...others}
      />
    </Box>
  );
};

export default Search;
