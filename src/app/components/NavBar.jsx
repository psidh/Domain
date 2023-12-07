import { RiMenuLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
const NavBar = () => {
  return (
    <div>
      <div className="mx-8 lg:mx-20 flex justify-between  py-8 md:py-10">
        <a
          className="hover:scale-105 transition duration-300"
          href="mailto:philkhanasidharth14@gmail.com"
        >
          <div className="flex gap-4 items-center ">
          <MdOutlineMail />
            <span>philkhanasidharth14@gmail.com</span>
          </div>
        </a>
        <div className="gap-14 hidden lg:flex text-white">
          <a className="text-[#005AC1]  hover:text-gray-300" href="/">
            Home
          </a>
          <a className="  hover:text-blue-600" href="https://blog-psidh.vercel.app">
            Blogs
          </a>
          <a className="  hover:text-blue-600" href="/#footer">
            Contact
          </a>
        </div>
        <RiMenuLine
          className="flex lg:hidden w-5 h-5 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default NavBar;
