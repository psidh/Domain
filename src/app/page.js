/* eslint-disable @next/next/no-page-custom-font */
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import NavBar from 'src/app/components/NavBar';
import TopIntro from './components/TopIntro';
import Footer from './components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Ambit:wght@300;400;500;700&display=swap"
        />
      </Head>
      <NavBar />
      <TopIntro />

      <Footer />
    </>
  );
}

export default MyApp;
