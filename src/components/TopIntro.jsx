import React from 'react';
import { SparklesCore } from './ui/sparkles';

export default function TopIntro() {
  return (
    <div>
      <main>
        <div className='py-12 flex flex-col text-center justify-center items-center'>
          <div>
            <section className='flex flex-col justify-center items-center py-2 md:pt-2 md:pb-4 px-4 lg:px-18 overflow-clip'>
              <h2 className='md:text-2xl text-4xl font-semibold mt-2 py-2'>
                <span className='md:text-3xl text-xl font-normal'>Hey, </span>
                <span
                  className='font-semibold lg:text-5xl md:text-3xl text-2xl
          text-transparent bg-clip-text 
           bg-gradient-to-t from-gray-500/40 to-white
            py-2
           '
                >
                  I&apos;m Philkhana Sidharth
                </span>
                <div className='w-full h-2 relative'>
                  <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[3px] w-3/4 blur-sm' />
                  <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-300 to-transparent h-[1px] w-3/4' />
                  <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-lime-500 to-transparent h-[5px] w-1/4 blur-sm' />
                  <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-300 to-transparent h-px w-1/4' />
                </div>
              </h2>

              <div className='py-2 px-4 flex flex-col items-center justify-center overflow-clip mb-4'>
                <p className='md:text-3xl text-lg text-transparent bg-clip-text 
           bg-gradient-to-t from-gray-300/40 to-white'>
                  Student | Developer
                </p>
                <p className='md:text-2xl text-lg text-center'>
                  I bring Front-End and
                  Back-End to the table
                </p>
              </div>
              <a
                href='mailto:philkhanasidharth14@gmail.com'
                className='border hover:bg-green-950/50
          border-green-600  px-10 rounded-full text-xl font-semibold pt-2 pb-[5px]'
              >
                Connect
              </a>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
