import { MdOutlineMail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';

export default function  NavBar(){
  return (
    <main id='footer invisible sm:visible'>
      <div className=''>
        <div className='py-8 md:py-16 px-8 lg:px-36 flex lg:flex-row flex-col gap-6 lg:gap-0 justify-between items-center'>
          <div className='flex gap-8 '>
            <a
              className='hover:scale-125 transition duration-150 text-sm sm:text-xl'
              href='https://instagram.com/p_s1dharth'
            >
              <FaInstagram/>
            </a>
            <a
              className='hover:scale-125 transition duration-150 text-sm sm:text-xl'
              href='https://twitter.com/p_s1dharth'
            >
              <FiTwitter/>
            </a>
            <a
              className='hover:scale-125 transition duration-150 text-sm sm:text-xl'
              href='https://www.linkedin.com/in/p-sidharth'
            >
              <FiLinkedin/>
            </a>
            <a
              className='hover:scale-125 transition duration-150 text-sm sm:text-xl'
              href='https://github.com/psidh'
            >
              <FiGithub/>
            </a>
          </div>
          <div className='flex gap-4 hover:scale-105 transition duration-300 text-sm sm:text-xl'>
            <a href='mailto:philkhanasidharth14@gmail.com'>
              <div className='flex gap-4 items-center'>
                <MdOutlineMail />
                <span>philkhanasidharth14@gmail.com</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};


