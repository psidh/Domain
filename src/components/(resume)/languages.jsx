export default function Languages({ lang }) {
  return (
    <section className="my-8 ">
      <a
        href="https:www.github.com/psidh/"
        target="_blank"
        className="md:text-4xl text-2xl flex items-center font-semibold mt-4 mb-4 "
      >
        <span className="md:text-left lg:ml-3 text-green-500 hover:text-green-200">
          Languages
        </span>{' '}
      </a>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
        {lang.map((lang, index) => (
          <div
            key={index}
            className="md:text-xl text-white my-4
        flex justify-center items-center border-0 rounded-lg"
          >
            <div className="flex flex-col items-center justify-center">
              <span style={{ fontSize: '36px' }} className={`${lang.color}`}>
                {lang.icon} {/* Display the icon */}
              </span>
              <span className="m-2">{lang.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
