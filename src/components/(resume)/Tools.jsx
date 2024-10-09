export default function Tools({ tools }) {
  return (
    <section className="py-2 sm:py-0">
      <h1 className="text-green-500 md:text-4xl text-3xl font-semibold mt-4 mb-8 text-center md:text-left md:ml-6">
        Tools
      </h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-5">
        {tools.map((Tools, index) => (
          <div
            key={index}
            className="md:text-xl my-4
          flex justify-center items-center border-0 rounded-lg"
          >
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl">
                {Tools.icon} {/* Display the icon */}
              </span>
              <span className="m-2">{Tools.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
