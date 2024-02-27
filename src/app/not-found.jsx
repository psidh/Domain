export default function error() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <p className='text-3xl md:text-6xl mb-6'>Page not Found | 404</p>
      <a
        href='/'
        className='text-xl md:text-3xl mt-6 py-3 px-9 bg-fuchsia-500 rounded-full 
      hover:border hover:border-white hover:-translate-x-3 transform duration-300'
      >
        Home
      </a>
    </div>
  );
}
