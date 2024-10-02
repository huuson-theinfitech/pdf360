import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { SuspenseContainer } from '@/components';
import { DashboardLayout } from '@/layouts';

const PDFTranslationPage = React.lazy(() => import('../pages/PDFTranslation/PDFTranslationPage'));

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
  ]);

  return <SuspenseContainer>{routes}</SuspenseContainer>;
};

export default Router;
