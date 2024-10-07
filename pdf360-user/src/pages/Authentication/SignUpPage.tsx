import { LoadingButton } from '@mui/lab';
import { Divider, Link, Stack, SvgIcon, Typography, alpha, useTheme } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

import { EnvelopeSvg } from '@/assets/icons';
import { Logo, RHFTextField } from '@/components';
import LoginPlatform from './LoginPlatform';

interface IFormValues {
  email: string;
}

const SignUpPage: React.FC = () => {
  const theme = useTheme();

  const method = useForm<IFormValues>();

  const handleSubmit: SubmitHandler<IFormValues> = (data) => {
    return data;
  };

  return (
    <>
      <Helmet>
        <title>Sign Up | Core - Dashboard Builder</title>
      </Helmet>

      <Logo />
      <Typography variant='h2'>Sign up</Typography>

      <Stack direction='column' gap={4}>
        <LoginPlatform />

        <Divider orientation='horizontal' flexItem />

        <Stack gap={2.5}>
          <Typography variant='body2Semibold'>Or continue with email address</Typography>

          <FormProvider {...method}>
            <form onSubmit={method.handleSubmit(handleSubmit)}>
              <Stack gap={1.5}>
                <RHFTextField
                  name='email'
                  placeholder='Your Email'
                  size='medium'
                  startAdornment={
                    <SvgIcon sx={{ color: 'grey.400' }}>
                      <EnvelopeSvg />
                    </SvgIcon>
                  }
                />

                <LoadingButton variant='contained' size='large' sx={{ flexGrow: 1 }}>
                  Continue
                </LoadingButton>
              </Stack>
            </form>
          </FormProvider>
        </Stack>
      </Stack>

      <Typography variant='body2Semibold' color={alpha(theme.palette.grey[400], 0.75)}>
        This site is protected by reCAPTCHA and the Google Privacy Policy.
      </Typography>

      <Typography variant='body2Semibold' color='grey.400'>
        Already a member?{' '}
        <Link component={RouterLink} to='/auth/sign-in'>
          Sign in
        </Link>
      </Typography>
    </>
  );
};

export default SignUpPage;
