import { Avatar, IconButton, ListItemIcon, Menu, Stack, SvgIcon, Typography } from '@mui/material';
import dayjs from 'dayjs';
import * as React from 'react';

import { ArrowRotateRightSvg, FilledEllipsisSvg } from '@/assets/icons';
import { StyledMenuItem } from './ArchivePopover.styles';

interface IArchivedItemProps {
  imageUrl?: string;
  title: string;
  archivedBy?: string;
  archivedAt?: string | Date;
}

const ArchivedItem: React.FC<IArchivedItemProps> = ({
  imageUrl,
  title,
  archivedBy,
  archivedAt,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleUnarchive = () => {
    return 'Unarchive';
  };

  return (
    <Stack
      width='100%'
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      gap={1.5}
      p={1.5}
      borderRadius={1}
      bgcolor='grey.100'
    >
      <Stack direction='row' alignItems='center' gap={1.5}>
        {imageUrl && <Avatar variant='circular' sx={{ width: 48, height: 48 }} src={imageUrl} />}

        <Stack>
          <Typography variant='base1Semibold'>{title}</Typography>
          <Typography variant='caption2Medium' color='grey.400'>
            By
            <Typography variant='caption2Bold' component='span'>
              {' '}
              {archivedBy}{' '}
            </Typography>
            {dayjs(archivedAt).fromNow()}
          </Typography>
        </Stack>
      </Stack>

      <IconButton onClick={handleOpenMenu}>
        <SvgIcon sx={{ width: 20, height: 20 }}>
          <FilledEllipsisSvg />
        </SvgIcon>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        slotProps={{ paper: { sx: { width: 180 } } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {[{ label: 'Unarchive', icon: <ArrowRotateRightSvg />, onClick: handleUnarchive }].map(
          ({ label, icon, onClick }) => (
            <StyledMenuItem
              key={label}
              sx={{ color: 'grey.400' }}
              onClick={() => {
                onClick?.();
                handleCloseMenu();
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <Typography variant='inherit'>{label}</Typography>
            </StyledMenuItem>
          ),
        )}
      </Menu>
    </Stack>
  );
};

export default ArchivedItem;
