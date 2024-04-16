export default function Languages({ lang }) {
  return (
    <section className='py-8'>
      <h1 className='text-green-500 md:text-4xl text-3xl font-semibold mt-4 mb-8 text-center md:text-left md:ml-12'>
        Languages
      </h1>
      <div className='grid grid-cols-3 sm:grid-cols-4 '>
        {lang.map((lang, index) => (
          <div
            key={index}
            className='md:text-xl  my-4
        flex justify-center items-center rounded-lg'
          >
            <div className='flex flex-col items-center justify-center'>
              <span className='text-3xl'>
                {lang.icon} {/* Display the icon */}
              </span>
              <span className='m-2'>{lang.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
