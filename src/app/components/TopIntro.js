
import Image from 'next/image';
import styled, { createGlobalStyle, css } from 'styled-components';
import { Autour_One } from 'next/font/google';

// Create a global style that applies Ambit font to all text elements
const GlobalStyle = createGlobalStyle`
  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  .blinking {
    animation: blink 1s infinite;
  }

  .rounded-full {
    border-radius: 50%;
  }
`;

const imageStyle = {
  width: 'auto',
  height: 'auto',
};

const TopIntro = () => {
  return (
    <div style={{ fontFamily: 'Ambit, sans-serif' }}>
      <main>
        <div
          className="bg-cover bg-center py-12 flex flex-col justify-center items-center bg-opacity-90"
          style={{
            backgroundImage: 'url("/images/aurora.jpg")',
            cursor: 'pointer',
          }}
        >
          <div data-aos-duration="500" data-aos="fade-in">
            <GlobalStyle />
            <div className="px-4 flex justify-center items-center">
              <Image
                src="/images/pfp.jpg"
                width={200}
                height={300}
                alt="author image"
                className="w-120 h-140 md:w-[200px] md:h-[260px] rounded-2xl"
                priority // Adding the "priority" property
                style={imageStyle}
              />
            </div>
            <section className="flex flex-col justify-center items-center py-2 md:pt-2 md:pb-4 px-4 lg:px-18">
              <h2 className="md:text-2xl text-4xl font-semibold mt-2 py-2">
                <span className="text-white md:text-2xl text-lg font-normal">
                  Hey,{' '}
                </span>
                <span
                  className="font-semibold md:text-6xl text-3xl 
          text-transparent bg-clip-text 
           bg-gradient-to-t from-gray-300 to-white
            py-2
           "
                >
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  I'm P Sidharth
                </span>
              </h2>
              <div className="text-white py-2 px-4 lg:px-18 md:text-center text-center my-4 md:mb-8">
                <p className="md:text-2xl text-md ">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  I'm a Student, Developer passionate about Web Development
                </p>
                <p className="md:text-2xl text-md text-gray-200">
                  With a background in{' '}
                  <a href="https://github.com/psidh">
                    <span className="underline underline-offset-4">Python</span>
                  </a>{' '}
                  and{' '}
                  <a href="https://github.com/psidh">
                    <span className="underline underline-offset-4">
                      JavaScript
                    </span>
                  </a>
                  , I bring Front-End and Back-End to the table{' '}
                </p>
                <p className="md:text-2xl text-md text-gray-300">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Let's connect and build great things together...
                  <span className="inline-flex opacity-50 text-2xl font-light blinking">
                    |
                  </span>
                </p>
              </div>
              <button
                className="md:mt-6 mb-4 bg-green-200 
          hover:bg-green-600 hover:text-white 
          text-black py-2 px-8 rounded-3xl "
              >
                <span className="text-xl">
                  {' '}
                  <a href="mailto:philkhanasidharth14@gmail.com"> Connect </a>
                </span>
              </button>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TopIntro;
