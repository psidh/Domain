import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'P Sidharth',
  description: "Hey, I'm P Sidharth, I'm a Student, Developer passionate about Web Development, with a background in Python and JavaScript, I bring Front-End and Back-End to the table. Let's connect and build great things together",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
