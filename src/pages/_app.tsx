import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Matheus | Dev</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
