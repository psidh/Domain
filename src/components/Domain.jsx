import React from 'react';

export default function Domain() {
  return (
    <>
      <div className='dark:bg-[#212121] dark:text-white px-6 dm-mono-regular'>
        <div className='py-12 flex flex-col items-center justify-between space-y-6'>
          <h1 className='text-xl md:text-5xl font-semibold dm-mono-light'>
            Hi! I'm Sidharth | Developer
          </h1>
          <p className='text-sm md:text-2xl font-semibold pt-12 pb-6'>
            Tools | Frameworks | Languages I know
          </p>
          <p className='dark:text-[#d1d1d1] text-justify pb-6'>
            TypeScript, JS, Python, Java, C, C++, Next.js, MongoDB, EC2,
            PostreSQL, S3, GitHub, git
          </p>
          <div className='flex space-x-4'>
            <p>I blog here</p>
            <a
              href='https://blog-psidh.vercel.app'
              className='underline underline-offset-2'
            >
              @blog-psidh
            </a>
          </div>
        </div>
        <div className='flex md:flex-row flex-col justify-between items-center px-6 py-10 space-y-8 md:space-y-0'>
          <div className='flex justify-between items-center md:space-x-4 space-x-16'>
            <a
              href='https://www.linkedin.com/in/p-sidharth/'
              target='_blank'
              className='py-1 px-1 bg-neutral-400 text-black rounded-xl'
            >
              LinkedIn
            </a>
            <a
              href='https://github.com/psidh/'
              target='_blank'
              className='py-1 px-1 bg-neutral-400 rounded-xl'
            >
              GitHub
            </a>
            <a
              href='https://twitter.com/p_s1dharth'
              target='_blank'
              className='py-1 px-1 bg-neutral-400 rounded-xl'
            >
              X
            </a>
            <a
              href='https://www.youtube.com/channel/UCfSfhRF4KDANl1WqwVm9pIw'
              className='py-1 px-1 bg-neutral-400 rounded-xl'
              target='_blank'
            >
              YouTube
            </a>
          </div>
          <div>
            <a
              href='mailto:philkhanasidharth14@gmail.com'
              className='py-1 px-1 bg-neutral-400 rounded-xl'
            >
              philkhanasidharth14@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
