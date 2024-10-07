import { Button, Stack, Typography } from '@mui/material';
import * as React from 'react';

import { CloseButton } from '@/components';
import { StyledPopover } from './ArchivePopover.styles';

interface IArchivePopoverProps {
  title?: string;
  children?: React.ReactNode;
  icon: React.ReactNode;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onClose: () => void;
  onOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ArchivePopover: React.FC<IArchivePopoverProps> = ({
  children,
  title,
  icon,
  open,
  anchorEl,
  onClose,
  onOpen,
}) => {
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Button
        sx={{
          backgroundColor: 'transparent',
          padding: '0',
          minWidth: 'auto',
          color: 'inherit',
        }}
        onClick={onOpen}
      >
        {icon}
      </Button>
      <StyledPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={onClose}
      >
        <Stack direction='column' gap={1}>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography variant='title1Medium'>{title}</Typography>
            <CloseButton onClick={onClose} />
          </Stack>

          {children}
        </Stack>
      </StyledPopover>
    </>
  );
};

export default ArchivePopover;
