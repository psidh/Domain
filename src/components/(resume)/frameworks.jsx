export default function Frameworks({frameworks}) {
  return (
    <section className="my-8 ">
        <h1 className="md:text-4xl text-2xl flex items-center font-semibold mt-4 mb-4 md:text-left lg:ml-3 text-green-500">
          Frameworks
        </h1>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
        {frameworks.map((Frameworks, index) => (
          <div
            key={index}
            className="md:text-xl text-white my-4
        flex justify-center items-center border-0 rounded-lg"
          >
            <div className="flex flex-col items-center justify-center">
              <span style={{ fontSize: '36px' }} className={Frameworks.color}>
                {Frameworks.icon} {/* Display the icon */}
              </span>
              <span className="m-2">{Frameworks.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
