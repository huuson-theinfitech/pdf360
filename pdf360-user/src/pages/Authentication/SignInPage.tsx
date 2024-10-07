import { EnvelopeSvg, EyeSlashSvg, EyeSvg, LockSvg } from '@/assets/icons';
import { Logo, RHFTextField } from '@/components';
import { LoadingButton } from '@mui/lab';
import {
  Divider,
  IconButton,
  Link,
  Stack,
  SvgIcon,
  Typography,
  alpha,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import LoginPlatform from './LoginPlatform';

interface IFormValues {
  email: string;
  password: string;
}

const SignInPage: React.FC = () => {
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);

  const method = useForm<IFormValues>({ defaultValues: { email: '', password: '' } });

  const toggleShowPassword = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowPassword((currState) => !currState);
  };

  const handleSubmit: SubmitHandler<IFormValues> = async () => {
    // setLoading(true);
    // await loginWithEmail(
    //   data,
    //   () => toast.success('Sign in successfully'),
    //   (err) => {
    //     if (err.response?.status === 404 || err.response?.data.message === 'Password is incorrect!')
    //       method.setError('password', { type: 'custom', message: 'Password is incorrect' });
    //     if (err.response?.data?.message === 'Email address not found!')
    //       method.setError('email', { type: 'custom', message: 'Email address not found' });
    //     toast.error(err.response?.data.message);
    //   },
    // );
    // setLoading(false);
    console.log('1');
  };

  return (
    <>
      <Helmet>
        <title>Sign In | Core - Dashboard Builder</title>
      </Helmet>
      <Logo />
      <Typography variant='h2'>Sign in</Typography>

      <Stack direction='column' gap={2.5}>
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
                  startAdornment={
                    <SvgIcon sx={{ color: 'grey.400' }}>
                      <EnvelopeSvg />
                    </SvgIcon>
                  }
                />
                <RHFTextField
                  name='password'
                  placeholder='Password'
                  type={showPassword ? 'text' : 'password'}
                  startAdornment={
                    <SvgIcon sx={{ color: 'grey.400' }}>
                      <LockSvg />
                    </SvgIcon>
                  }
                  endAdornment={
                    <IconButton onClick={toggleShowPassword}>
                      <SvgIcon sx={{ color: 'grey.400' }}>
                        {showPassword ? <EyeSlashSvg /> : <EyeSvg />}
                      </SvgIcon>
                    </IconButton>
                  }
                />

                <LoadingButton
                  variant='contained'
                  size='large'
                  type='submit'
                  sx={{ flexGrow: 1 }}
                  onClick={method.handleSubmit(handleSubmit)}
                >
                  Sign in
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
        Don’t have an account?{' '}
        <Link component={RouterLink} to='/auth/sign-up'>
          Sign up
        </Link>
      </Typography>
    </>
  );
};

export default SignInPage;
