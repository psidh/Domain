import TopIntro from 'src/app/components/TopIntro';
import Resume from 'src/app/components/Resume';
import Projects from 'src/app/components/Projects';

function MyApp() {
  return (
    <div>
      <TopIntro />
      {/* <Achievements /> */}
      <Resume />
      <Projects />     
    </div>
  );
}

export default MyApp;
