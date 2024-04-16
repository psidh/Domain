export default function Frameworks({ frameworks }) {
  return (
    <section className='py-8'>
      <h1 className='text-green-500 md:text-4xl text-3xl font-semibold mt-4 mb-8 text-center md:text-left md:ml-6'>
        Frameworks
      </h1>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-5'>
        {frameworks.map((Frameworks, index) => (
          <div
            key={index}
            className='md:text-xl my-4
        flex justify-center items-center border-0 rounded-lg'
          >
            <div className='flex flex-col items-center justify-center'>
              <span className='text-3xl'>
                {Frameworks.icon} {/* Display the icon */}
              </span>
              <span className='m-2'>{Frameworks.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
