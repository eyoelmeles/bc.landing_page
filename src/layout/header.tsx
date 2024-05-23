"use client";
import Link from "next/link";
import { useState } from "react";
import Wrapper from "./wrapper";

const Appbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <Wrapper>
      <nav className="flex items-center justify-between flex-wrap p-6 gap-8">
        <div className="flex items-center flex-shrink-0 mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Build Connect
          </span>
        </div>
        <div className="block md:hidden">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 hover:underline hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? `block` : `hidden`
          } w-full block md:flex md:items-center md:w-auto`}
        >
          <div className="md:flex-grow">
            <Link
              href="/"
              className="block mt-4 md:inline-block md:mt-0  mr-4 hover:text-gray-600"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="block mt-4 md:inline-block md:mt-0  mr-4 hover:text-gray-600"
            >
              Features
            </Link>
            <Link
              href="/contact"
              className="block mt-4 md:inline-block md:mt-0  hover:text-gray-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Appbar;
