import Image from 'next/image';
import NavBar from '../components/NavBar';
import TopIntro from '../components/TopIntro';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
function MyApp() {
  return (
    <div>
      <div className='sm:hidden'>
        <TopIntro />
      </div>
      <div className='hidden sm:flex sm:flex-col sm:items-center sm:justify-center'>
        <div className=''>
          <img
            src='/Group.svg'
            alt=''
            className='h-full w-full md:w-[90%] md:h-[65%] object-cover'
          />
        </div>
      </div>
      <Projects />
      <Skills />
      <NavBar />
    </div>
  );
}

export default MyApp;
