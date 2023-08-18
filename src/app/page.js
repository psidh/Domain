/* eslint-disable @next/next/no-page-custom-font */

import NavBar from 'src/app/components/NavBar';
import TopIntro from 'src/app/components/TopIntro';
import Footer from 'src/app/components/Footer';
import Resume from 'src/app/components/Resume';
function MyApp(){
  return (
    <>
      <NavBar />
      <TopIntro />
      <Resume />
      <Footer />
    </>
  );
}

export default MyApp;
