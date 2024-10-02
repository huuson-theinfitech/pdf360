import { Button, List, Stack, Typography } from '@mui/material';
import * as React from 'react';

import { ArchiveSvg } from '@/assets/icons';
import { Card, CloseButton, Search } from '@/components';
import { StyledPopover } from './ArchivePopover.styles';
import ArchivedItem from './ArchivedItem';

interface IArchivePopoverProps {
  title?: string;
  titleColor?: string;
  children?: React.ReactNode;
}

const ArchivePopover: React.FC<IArchivePopoverProps> = ({
  title = 'Archived',
  titleColor = 'error.light',
  children,
}) => {
  const [value, setValue] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleInputClear = () => {
    setValue('');
  };

  return (
    <>
      <Button
        aria-describedby={id}
        variant='outlined'
        endIcon={<ArchiveSvg />}
        onClick={handleOpen}
      >
        Archive
      </Button>

      <StyledPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleClose}
      >
        <Stack direction='column' gap={3}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' gap={2}>
            <Card.Title color={titleColor}>{title}</Card.Title>

            <CloseButton onClick={handleClose} />
          </Stack>

          <Stack direction='column' gap={1.5}>
            <Search
              placeholder='Search active products'
              size='medium'
              onChange={handleInputChange}
              onClear={handleInputClear}
            />
            {value && (
              <Typography variant='caption1' color='grey.400'>
                Result for &quot;{value}&quot;
              </Typography>
            )}

            <List
              component={Stack}
              gap={2}
              sx={{ bgcolor: 'grey.200', p: 1.5, gap: 1.5, borderRadius: 2 }}
            >
              {Array.from(Array(5).keys()).map((index) => (
                <ArchivedItem
                  key={index}
                  title='Product Name'
                  archivedBy='John Doe'
                  archivedAt='2021-10-01T14:48:00.000Z'
                />
              ))}
            </List>

            {children}
          </Stack>
        </Stack>
      </StyledPopover>
    </>
  );
};

export default ArchivePopover;
