/* eslint-disable @next/next/no-page-custom-font */

import NavBar from 'src/app/components/NavBar';
import TopIntro from './components/TopIntro';
import Footer from './components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <TopIntro />

      <Footer />
    </>
  );
}

export default MyApp;
