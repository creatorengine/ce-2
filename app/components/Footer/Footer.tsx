import Link from "next/link";
import { Linkedin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 lg:py-2  lg:h-[35vh] w-full h-full  ">
      <div className=" mx-auto px-8 sm:px-6 lg:px-8  flex flex-col justify-between h-full">
        <div className="flex flex-col mt-4 px-8 lg:flex-row md:flex-row justify-between items-center ">
          <ul className="flex flex-col lg:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center lg:text-xl">
            <li>
              <Link
                href="/"
                className="hover:text-transparent transition duration-500 hover:bg-clip-text hover:bg-gradient-to-r from-green-400 to-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="hover:text-transparent transition duration-500 hover:bg-clip-text hover:bg-gradient-to-r from-green-400 to-blue-500"
              >
                Careers
              </Link>
            </li>

            <li>
              <Link
                href="/contact-us"
                className="hover:text-transparent transition duration-500 hover:bg-clip-text hover:bg-gradient-to-r from-green-400 to-blue-500"
              >
                Contact us
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4  lg:mt-6 mt-6 mb-2">
            <Link
              href="https://www.linkedin.com/company/creatorengine/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Linkedin />
            </Link>
          </div>
        </div>

        <div className="text-center text-sm py-4 flex flex-col justify-center items-center gap-1">
          <Link href="/">
            <img className="cursor-pointer w-20" src="./logo.svg" alt="logo" />
          </Link>
          &copy; CREATOR ENGINE 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
