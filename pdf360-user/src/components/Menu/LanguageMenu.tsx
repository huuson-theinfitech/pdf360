import { ChevronDownSvg, JPFlagSvg, USFlagSvg, VNFlagSvg } from '@/assets/icons';
import { Button, Menu, MenuItem, Stack, useTheme } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const LANGUAGES = [
  {
    value: 'en',
    label: 'English (US)',
    icon: <USFlagSvg />,
  },
  {
    value: 'vn',
    label: 'Vietnamese (VN)',
    icon: <VNFlagSvg />,
  },
  {
    value: 'jp',
    label: 'Japanese (JP)',
    icon: <JPFlagSvg />,
  },
];

const LanguageMenu = ({ ...other }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState<{
    value: string;
    label: string;
    icon: React.ReactNode;
  }>(LANGUAGES[1]);
  const anchorRef = React.useRef(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(!!event.currentTarget);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    if (value) {
      navigate(`?language=${value}`, { state: { language: value } });
    }
  };

  return (
    <>
      <Button
        ref={anchorRef}
        id='language-button'
        aria-controls={open ? 'language-menu' : undefined}
        onClick={handleOpen}
        size='large'
        variant='text'
        sx={{
          color: 'grey.500',
          p: theme.spacing(1, 2.2),
          typography: 'contentMBold',
        }}
        startIcon={selectedLanguage?.icon}
        endIcon={<ChevronDownSvg />}
        {...other}
      >
        {selectedLanguage?.label}
      </Button>

      <Menu
        id='language-menu'
        open={open}
        anchorEl={anchorRef.current}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        MenuListProps={{ 'aria-labelledby': 'language-button' }}
        slotProps={{ paper: { sx: { p: 2 } } }}
        {...other?.popoverProps}
      >
        <Stack spacing={0.75}>
          {LANGUAGES.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === selectedLanguage?.value}
              onClick={() => {
                setSelectedLanguage(option);
                handleClose(option.value);
              }}
              component={Button}
              startIcon={option.icon}
              sx={{ typography: 'contentMRegular' }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  );
};

export default LanguageMenu;
