// Next
import Head from 'next';

// Redux
import { wrapper } from '@/redux/store';

// Components
import Layout from '@/components/0-layout/Layout';

// Styles
import '@/styles/globals.scss';

//Third Party Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/tailwind.css';

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
