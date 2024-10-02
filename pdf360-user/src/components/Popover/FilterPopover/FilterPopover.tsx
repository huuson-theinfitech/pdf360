import { Button, Stack } from '@mui/material';
import * as React from 'react';

import { FilterSvg } from '@/assets/icons';
import { Card, CloseButton } from '@/components';
import { StyledPopover } from './FilterPopover.styles';

interface IFilterPopoverProps {
  title?: string;
  titleColor?: string;
  children?: React.ReactNode;
}

const FilterPopover: React.FC<IFilterPopoverProps> = ({
  title = 'Filter',
  titleColor = 'info.light',
  children,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Button
        aria-describedby={id}
        variant='iconOutlined'
        startIcon={<FilterSvg />}
        onClick={handleOpen}
      />

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

          <Stack>{children}</Stack>

          <Stack direction='row' justifyContent='flex-end' gap={1.5}>
            <Button variant='outlined' size='large' onClick={handleClose}>
              Reset
            </Button>
            <Button variant='contained' size='large' onClick={handleClose}>
              Apply
            </Button>
          </Stack>
        </Stack>
      </StyledPopover>
    </>
  );
};

export default FilterPopover;
