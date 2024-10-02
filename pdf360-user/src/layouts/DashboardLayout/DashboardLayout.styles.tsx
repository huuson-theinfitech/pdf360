import { Stack, styled } from '@mui/material';

export const APP_BAR_MOBILE_LARGE = 96;
export const APP_BAR_MOBILE = 80;

export const StyledMainWrapper = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  minHeight: '100%',
  minWidth: 0,
  flexDirection: 'column',
  marginTop: APP_BAR_MOBILE,
  padding: theme.spacing(2),
  overflow: 'hidden',
})) as typeof Stack;
