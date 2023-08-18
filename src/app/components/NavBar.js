import React from 'react';

const NavBar = () => {
  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-8 lg:mx-20 flex justify-between py-10">
        <a href="mailto:philkhanasidharth14@gmail.com">
          <div className="flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>philkhanasidharth14@gmail.com</span>
          </div>
        </a>
        <div className="gap-14 hidden lg:flex">
          <a className="text-[#005AC1]" href="/">Home</a>
          <a className="" href="/#resume">Resume</a>
          <a className="" href="/#achievements">Projects</a>
          <a className="" href="src/app/pages/contact.js">Contact</a>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex lg:hidden w-5 h-5"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </div>
      <div className="border-gray-300 border-b-[0.05em]"></div> 
    </div>
  );
};

export default NavBar;
