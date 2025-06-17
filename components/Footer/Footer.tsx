import { HeartIcon } from "lucide-react";
import SecretMessage from "../SecretMessage/SecretMessage";

const Footer = () => {
  return (
    <footer className="bg-pink-400 border-t mt-10">
      <div className="container text-black/80 mx-auto px-4 py-6 flex flex-col items-center text-center  space-y-2">
        <p className="text-sm font-light">
          Made with <HeartIcon className="inline w-4 h-4 text-red-200 mb-0.5" />{" "}
          by{" "}
          <a
            href="https://github.com/FredH2O"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Fred
          </a>
        </p>
        <p className="text-xs font-extralight italic">
          In celebration of a magical milestone — my daughter’s 6th birthday 🎂
        </p>
        <SecretMessage />
        <p className="text-xs font-light">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
