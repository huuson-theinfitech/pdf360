import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React, { Suspense } from 'react';

interface ILazyLoadingProps {
  children?: React.ReactNode;
}

export const LazyLoading: React.FC<ILazyLoadingProps> = ({ children }) => {
  React.useEffect(() => {
    nProgress.start();

    return () => {
      nProgress.done();
    };
  });

  return children;
};

const SuspenseContainer: React.FC<ILazyLoadingProps> = ({ children }) => (
  <Suspense fallback={<LazyLoading />}>{children}</Suspense>
);

export default SuspenseContainer;
