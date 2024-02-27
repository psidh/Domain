export default function Tool({ tools }) {
  return (
    <section className='my-8 '>
      <h1 className='md:text-4xl text-2xl flex items-center font-semibold mt-4 mb-4 md:text-left lg:ml-3 text-fuchsia-500 '>
        Tools
      </h1>
      <div className='grid grid-cols-3 md:grid-cols-4 gap-6'>
        {tools.map((tool, index) => (
          <div
            key={index}
            className='md:text-xl text-white md:p-4 p-2
            flex justify-center items-center border-0 rounded-lg'
          >
            <div className='flex flex-col items-center justify-center'>
              <span style={{ fontSize: '36px' }} className={tool.color}>
                {tool.icon} {/* Display the icon */}
              </span>
              <span className='m-2'>{tool.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
