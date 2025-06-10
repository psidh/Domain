import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaMedium } from "react-icons/fa";

export default function Links() {
  return (
    <div className="dynamic-glow-yellow p-5 flex flex-col items-center justify-between w-full lg:w-1/2 shadow-lg shadow-yellow-400 border border-yellow-700 bg-gradient-to-tl from-yellow-700 to-black rounded-xl min-h-full">
      <h3 className="text-yellow-500 text-3xl lg:mt-0 mb-4 lg:text-2xl lg:text-left font-semibold w-full text-center">
        Social Links
      </h3>
      <div className="w-full border border-yellow-800 h-[1px] mb-4"></div>
      <div className="grid grid-cols-3 gap-12 text-4xl mt-2">
        <a
          href="https://github.com/psidh"
          target="_blank"
          title="GitHub"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-all duration-200"
        >
          <FiGithub />
        </a>
        <a
          href="https://leetcode.com/u/psidh"
          target="_blank"
          title="LeetCode"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-all duration-200"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://medium.com/@philkhanasidharth14"
          target="_blank"
          title="Medium"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-all duration-200"
        >
          <FaMedium />
        </a>
        <a
          href="https://linkedin.com/in/p-sidharth/"
          target="_blank"
          title="LinkedIn"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-all duration-200"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://x.com/p_s1dharth/"
          target="_blank"
          title="Twitter/X"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-all duration-200"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=philkhanasidharth14@gmail.com"
          target="_blank"
          title="Gmail"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-all duration-200"
        >
          <FiMail />
        </a>
      </div>
    </div>
  );
}
