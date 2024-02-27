import imports from '../utils/import';
import Frameworks from './(resume)/frameworks';
import Languages from './(resume)/languages';
import Tools from './(resume)/tools';

export default function Skills() {
  const frameworks = imports[0];
  const lang = imports[1];
  const tools = imports[2];
  const skills = imports[3];

  return (
    <div className='px-8 lg:px-24'>
      <div>
        <div className='md:grid md:grid-cols-2 gap-x-12'>
          <Frameworks frameworks={frameworks} />
          <Languages lang={lang} />
        </div>
      </div>
    </div>
  );
}
