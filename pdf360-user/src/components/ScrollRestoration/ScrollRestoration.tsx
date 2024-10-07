import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollRestoration = () => {
  const scrollPositions = useRef<{ [key: string]: number }>({});
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;

    if (scrollPositions.current[pathname]) {
      window.scrollTo(0, scrollPositions.current[pathname]);
    } else {
      window.scrollTo(0, 0);
    }

    const handleScroll = () => {
      scrollPositions.current[pathname] = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return null;
};

export default ScrollRestoration;
