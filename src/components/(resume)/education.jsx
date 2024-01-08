const Education = () => {
  return (
    <>
    <section>
        <h3 className="text-4xl font-bold mb-4 text-green-500">
          Education
        </h3>
        <div className='flex justify-between items-center'>
          <div className="text-white">
            <a href="https://kvsangathan.nic.in/" target="_blank" className="text-2xl mt-8 font-semibold">
              Kendriya Vidyalaya Sangathan
            </a>
            <p className='text-lg mt-2'>Class 10th and 12th</p>
            
            <p className="text-2xl mt-8 font-semibold">BTech in Computer Science</p>
            <a href="https://www.gitam.edu" target="_blank" className="flex items-center text-lg mt-2">
              GITAM University, Graduated in 2026
            </a>          
          </div>
        </div>
    </section>
    </>
  );
};

export default Education;
