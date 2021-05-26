// Components
import Layout from '@/components/0-layout/Layout';
// Styles
import '@/styles/globals.scss';

//Third Party Styles
import '@/styles/tailwind.css';

// Component Level Types
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
