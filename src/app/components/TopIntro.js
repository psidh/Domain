import Image from 'next/image';
export default function TopIntro() {
  return (
    <div>
      <main>
        <div className="py-12 flex flex-col justify-center items-center">
          <div>
            <div className="px-4 flex justify-center items-center">
              <Image
                src="/me.png"
                alt="author image"
                width={220}
                height={220}
                className="w-40 h-4ff0 md:w-[220px] md:h-[220px] rounded-full"
              />
            </div>
            <section className="flex flex-col justify-center items-center py-2 md:pt-2 md:pb-4 px-4 lg:px-18">
              <h2 className="md:text-2xl text-4xl font-semibold mt-2 py-2">
                <span className="text-gray-200 md:text-3xl text-xl font-normal">
                  Hey,{' '}
                </span>
                <span
                  className="font-semibold md:text-6xl text-3xl 
          text-transparent bg-clip-text 
           bg-gradient-to-t from-gray-400/30 to-white
            py-2
           "
                >
                  I&apos;m P Sidharth
                </span>
              </h2>
              <div className="text-gray-200 py-2 px-4 lg:px-18 md:text-center text-center my-4">
                <p className="md:text-2xl text-md ">
                  I&apos;m a Student, Front-End Developer
                </p>
                <p className="md:text-2xl text-md text-gray-200">
                  With a background in{' '}
                  <a href="https://github.com/psidh">
                    <span className="underline underline-offset-4">
                      JavaScript
                    </span>
                  </a>{' '}
                  , I bring Front-End and Back-End to the table{' '}
                </p>
                <p className="md:text-2xl text-md text-gray-300">
                  Let&apos;s connect and build great things together...
                </p>
              </div>
              <button
                className="md:mt-6  hover:bg-green-200 
          bg-green-600 text-gray-200 transition duration-300
          hover:text-black py-2 px-8 rounded-3xl "
              >
                <span className="text-xl">
                  <a href="mailto:philkhanasidharth14@gmail.com"> Connect </a>
                </span>
              </button>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
