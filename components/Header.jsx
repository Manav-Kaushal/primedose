import Link from "next/Link";
import React from "react";
import { VscLinkExternal } from "react-icons/vsc";

const Header = () => {
  return (
    <header class="text-white body-font bg-green-400">
      <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span class="ml-3 text-xl text-white">PRIMEDOSE</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href={{ pathname: "/" }}>
            <a class="mr-5 hover:text-gray-900 transition duration-300 ease-out">
              Home
            </a>
          </Link>
          <Link href={{ pathname: "/about" }}>
            <a class="mr-5 hover:text-gray-900 transition duration-300 ease-out">
              About
            </a>
          </Link>
          <Link href={{ pathname: "/blog" }}>
            <a class="mr-5 hover:text-gray-900 transition duration-300 ease-out">
              Blog
            </a>
          </Link>
          <Link href={{ pathname: "/contact" }}>
            <a class="mr-5 hover:text-gray-900 transition duration-300 ease-out">
              Contact
            </a>
          </Link>
        </nav>
        <button class="text-white inline-flex items-center transition duration-300 ease-out bg-green-500 border-0 py-2 px-3 focus:outline-none hover:bg-green-700 rounded text-base mt-4 md:mt-0">
          SkinOriginals
          <span className="ml-2">
            <VscLinkExternal />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
