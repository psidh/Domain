const Services = () => {
  return (
    <div class="mx-8 lg:mx-28">
      <div class="relative items-center flex flex-col">
        <div class="h-full w-full lg:w-3/4 bg-black absolute left-[calc(50% - 37.5%)] -z-10 dark:bg-white dark:bg-opacity-2"></div>
        <h2 class="text-3xl py-8 lg:py-16 text-blue-500 dark:text-blue-400">
          Services
        </h2>
        <div class="flex flex-col gap-8 lg:flex-row lg:gap-24 mx-4 lg:mx-16 mb-12">
          <div class="bg-black dark:bg-slate-950 p-8 shadow-md">
            <div class="h-20 w-20 bg-gray-200"></div>
            <h3 class="text-2xl font-semibold mt-6 text-white dark:text-gray-200">
              App Development
            </h3>
            <p class="w-3/4 text-white dark:text-gray-200">
              Why just stop at one platform when you can build for many?
            </p>
          </div>
          <div class="bg-white dark:bg-slate-950 p-8 shadow-md">
            <div class="h-20 w-20 bg-gray-200"></div>
            <h3 class="text-2xl font-semibold mt-6 text-black dark:text-gray-200">
              Design UI/UX
            </h3>
            <p class="w-3/4 text-black dark:text-gray-200">
              Creativity has always been my passion, why stop now?
            </p>
          </div>
          <div class="bg-white dark:bg-slate-950 p-8 shadow-md">
            <div class="h-20 w-20 bg-gray-200"></div>
            <h3 class="text-2xl font-semibold mt-6 text-black dark:text-gray-200">
              Social &amp; Media
            </h3>
            <p class="w-3/4 text-black dark:text-gray-200">
              Sharing is caring, creating is my calling, why not do them
              together?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
