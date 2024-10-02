import { Box, CircularProgress, Stack, Typography, styled } from '@mui/material';

const DisabledBackground = styled(Box)({
  width: '100%',
  height: '100%',
  position: 'fixed',
  background: 'grey.400',
  opacity: 0.5,
  zIndex: 1,
});

const CircularLoading = () => (
  <Stack sx={{ color: 'grey.500' }}>
    <CircularProgress
      size={70}
      sx={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'primary',
        opacity: 0.8,
        zIndex: 2,
      }}
    />
    <Typography
      variant='title1Semibold'
      color='grey.400'
      sx={{
        position: 'fixed',
        left: '52%',
        top: '62%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
      }}
    >
      Preparing...
    </Typography>
    <DisabledBackground />
  </Stack>
);

export default CircularLoading;
