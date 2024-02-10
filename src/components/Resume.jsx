import Education from './(resume)/education';
import Skills from './(resume)/skills';
import Tools from './(resume)/tools';
import Languages from './(resume)/languages';
import Frameworks from './(resume)/frameworks';
import Experience from './(resume)/experience';
import imports from '../utils/import';

const Resume = () => {
  const frameworks = imports[0];
  const lang = imports[1];
  const tools = imports[2];
  const skills = imports[3];

  return (
    <main id='resume'>
      <div>
        <div className='py-4 md:py-10 px-8 lg:px-36'>
          <h2 className='md:text-4xl text-white text-4xl font-semibold my-24 md:mt-16 text-center md:text-left'>
            Resume
          </h2>
          <div className='md:grid md:grid-cols-2 gap-8 mt-12 mb-8'>
            <Education />
            <Experience />
          </div>
          <div>
            <div className='md:grid grid-cols-2 gap-8'>
              <Frameworks frameworks={frameworks} />
              <Languages lang={lang} />
              <Tools tools={tools} />
              <Skills skills={skills} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
