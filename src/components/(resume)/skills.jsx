const Skills = ({ skills }) => {
  return (
    <section className='my-8'>
      <h3 className='md:text-4xl text-2xl font-semibold mt-4 mb-4 md:text-left'>
        <span className='md:text-left lg:ml-3 text-green-500'>Skills ⚒️</span>
      </h3>
      <div className='grid grid-cols-3 gap-4'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='md:text-xl md:p-4 p-2  
          flex justify-start items-center border-0  rounded-lg'
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
