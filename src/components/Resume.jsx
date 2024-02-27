import Education from './(resume)/education';

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
        <div className='py-4  px-8 lg:px-24'>
          <h2 className='md:text-4xl text-white text-4xl font-semibold my-12 md:mt-16 text-center md:text-left'>
            Resume
          </h2>
          <div className='md:grid md:grid-cols-2 gap-8 mt-12 mb-8'>
            <Education />
            <Experience />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
