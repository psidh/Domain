import './globals.css';
import Ambit from 'next/font/local';

const ambit = Ambit({ src: './font/Avenir-Roman-12.ttf' });

export const metadata = {
  title: 'Philkhana Sidharth',
  description: `P Sidharth is a passionate Computer Science undergrad and full-stack developer 
  with expertise in Next.js, Express, MongoDB and PostgreSQL/Prisma. Skilled in frontend and backend development, 
  Sidharth builds scalable web apps and brings a deep understanding of software engineering and UI/UX.`,
  keywords: [
    'Philkhana Sidharth',
    'P Sidharth',
    'Sidharth',
    'Siddharth',
    'Siddharth Philkhana',
    'Pilkhana Siddarth',
    'Pilkhana Siddharth',
    'Pilkhana Sidharth',
    'P Siddharth',
    'Philkhana Siddharth',
    'Philkhana',
    'P Sidharth developer',
    'Front-end developer',
    'Full-Stack developer',
    'Next.js developer',
    'React developer',
    'Full stack developer',
    'Python JavaScript developer',
    'Machine learning enthusiast',
    'Open source contributor',
    'Web development portfolio'
  ],
  authors: [{ name: 'P Sidharth', url: 'https://psidharth.dev' }],
  creator: 'P Sidharth',
  openGraph: {
    title: 'Philkhana Sidharth',
    description: `Explore the portfolio of P Sidharth, a passionate front-end developer with strong backend and ML foundations. Skilled in building web applications using React, Firebase, MongoDB, PostgreSQL.`,
    url: 'https://psidharth.dev',
    siteName: 'Philkhana Sidharth',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="xwyi6x_2h7pOdce90Uty6fIi6zw5KxNO71sJ0-HgWC4" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className={`${ambit.className} bg-black text-white`}>
          {children}
        </div>
      </body>
    </html>
  );
}
