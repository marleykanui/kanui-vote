// Store
import { wrapper } from '@/redux/store';

// Components
import Layout from '@/components/0-layout/Layout';
// Styles
import '@/styles/globals.scss';

//Third Party Styles
import '@/styles/tailwind.css';
import 'bootstrap/dist/css/bootstrap.css';

// Component Level Types
import type { AppProps } from 'next/app';

const KanuiVote = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(KanuiVote);
