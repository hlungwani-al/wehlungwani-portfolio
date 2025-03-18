import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-[#1e295e] p-4 text-center text-white">
      <p>&copy; 2025 We Hlungwani. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://github.com/hlungwani-al"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size="2rem" />
        </a>
        <a
          href="https://www.linkedin.com/in/amukelani-hlungwani-aba489195/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size="2rem" />
        </a>
      </div>
    </footer>
  );
}
