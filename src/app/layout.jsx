import './globals.css';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Ambit from 'next/font/local';

const ambit = Ambit({ src: './Ambit-Regular.woff2' });

export const metadata = {
  title: 'Philkhana Sidharth',
  description: `
  Hey, I'm P Sidharth, a sophomore front-end developer passionate about web development with a background in Python and JavaScript. I bring Front-End and Back-End to the table and have experience with React, Next.js, and machine learning.
  I am currently looking for opportunities to learn and grow as a developer. I am also eager to contribute to open source projects and to collaborate with other developers on interesting and challenging projects.
  I am a quick learner and I am always eager to learn new things. I am also a team player and I am always willing to help others.
  `,
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className={`${ambit.className} bg-black text-[#d5d5d5]`}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
