import imports from '../utils/import';
import Frameworks from './(resume)/frameworks';
import Languages from './(resume)/languages';

export default function Skills() {
  const frameworks = imports[0];
  const lang = imports[1];

  return (
    <div className='px-8 lg:px-24 pb-12'>
      <div>
        <div className='md:grid md:grid-cols-2 gap-x-12'>
          <Frameworks frameworks={frameworks} />
          <Languages lang={lang} />
        </div>
      </div>
    </div>
  );
}
