import './globals.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import localFont from 'next/font/local';
const Ambit = localFont({
  src: 'Ambit-Regular.ttf',
});

export const metadata = {
  title: 'PHILKHANA SIDHARTH',
  description: `
  Hey, I'm P Sidharth, a sophomore front-end developer passionate about web development with a background in Python and JavaScript. I bring Front-End and Back-End to the table and have experience with React, Next.js, and machine learning.
  
  I am currently looking for opportunities to learn and grow as a developer. I am also eager to contribute to open source projects and to collaborate with other developers on interesting and challenging projects.
  
  If you are looking for a motivated and talented developer to join your team, please feel free to contact me. I would love to learn more about your company and your open positions.
  
  Here are some more details about my skills and experience:
  
  Programming languages: Python, JavaScript, HTML, CSS
  Web development frameworks: React, Next.js
  
  I am also proficient in using various tools and technologies, including:
  
  IDEs: Visual Studio Code, IntelliJ and Pycharm
  Code linters and formatters: ESLint, Prettier
  I am a quick learner and I am always eager to learn new things. I am also a team player and I am always willing to help others.
  
  I hope to hear from you soon.
  
  `,
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={`${Ambit.className} bg-black text-white`}>
          <Navbar />
          {children}
          <Footer />
        </body>
    </html>
  );
}
