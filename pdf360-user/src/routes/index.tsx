import { SuspenseContainer } from '@/components';
import { AuthenticationLayout, DashboardLayout } from '@/layouts';
import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

const PDFTranslationPage = React.lazy(() => import('../pages/PDFTranslation/PDFTranslationPage'));
const SignInPage = React.lazy(() => import('../pages/Authentication/SignInPage'));
const SignUpPage = React.lazy(() => import('../pages/Authentication/SignUpPage'));

const Router = () => {
  const routes = useRoutes([
    {
      children: [
        {
          element: <DashboardLayout />,
          children: [
            { path: 'pdf/:pdfId?language', element: <PDFTranslationPage /> },
            { path: 'pdf/:pdfId', element: <PDFTranslationPage /> },
            { path: '*', element: <Navigate to='/' /> },
          ],
        },
      ],
    },
    {
      // element: <ProtectedRoute redirectPath='/' />,
      children: [
        {
          path: 'auth',
          element: <AuthenticationLayout />,
          children: [
            { path: 'sign-in', element: <SignInPage /> },
            { path: 'sign-up', element: <SignUpPage /> },
          ],
        },
      ],
    },
  ]);

  return <SuspenseContainer>{routes}</SuspenseContainer>;
};

export default Router;
