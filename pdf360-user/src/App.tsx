import { ScrollRestoration } from '@/components';
import Router from '@/routes';
import ThemeProvider from '@/themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

dayjs.extend(relativeTime);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
    },
  },
});

const App: React.FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <BrowserRouter>
            <HelmetProvider>
              <ScrollRestoration />
              <Router />
            </HelmetProvider>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>

      <ToastContainer
        theme='light'
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        pauseOnHover
        closeOnClick
      />
    </>
  );
};

export default App;
