
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

export default function Links() {
  return (
    <div className="flex gap-x-12 text-3xl">
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
        <FiTwitter />
      </a>
      <a
        href="https://instagram.com/p_s1dharth/"
        target="_blank"
        title="Instagram"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-all duration-200"
      >
        <FiInstagram />
      </a>
    </div>
  );
}
