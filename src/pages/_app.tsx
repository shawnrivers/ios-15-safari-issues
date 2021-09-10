import 'app/styles/globals.css';
import 'app/styles/home.css';
import 'app/styles/navigation-bar.css';
import 'app/styles/page-1.css';
import 'app/styles/page-2.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { NavigationBar } from 'app/components/NavigationBar';

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>iOS 15 Safari Issues</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <NavigationBar />
    </>
  );
};

export default MyApp;
