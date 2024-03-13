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
                  className='font-semibold md:text-5xl text-2xl
          text-transparent bg-clip-text 
           bg-gradient-to-t from-gray-500/40 to-white
            py-2
           '
                >
                  I&apos;m Philkhana Sidharth
                </span>
                <div className='w-full h-20 relative'>
                  {/* Gradients */}
                  <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[3px] w-3/4 blur-sm' />
                  <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-300 to-transparent h-px w-3/4' />
                  <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-lime-500 to-transparent h-[5px] w-1/4 blur-sm' />
                  <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-100 to-transparent h-px w-1/4' />

                  {/* Core component */}
                  <SparklesCore
                    background='transparent'
                    minSize={0.8}
                    maxSize={1.1}
                    particleDensity={1000}
                    className='w-full h-full'
                    particleColor='#ffffff'
                  />

                  {/* Radial Gradient to prevent sharp edges */}
                  <div className='absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]'></div>
                </div>
              </h2>

              <div className='py-2 px-4 flex flex-col items-center justify-center overflow-clip my-4'>
                <p className='md:text-2xl text-lg mt-4 mb-4'>
                  I&apos;m a Student, Developer
                </p>
                <p className='md:text-2xl text-lg text-center'>
                  With a background in JavaScript, I bring Front-End and
                  Back-End to the table
                </p>
                <p className='md:text-3xl text-md mt-4 text-center'>
                  Let&apos;s connect and build great things together...
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
