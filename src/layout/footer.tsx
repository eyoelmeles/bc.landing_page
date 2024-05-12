import Link from "next/link";
import React from "react";
import Menus from "./menus";

const Footer = () => {
  // return (
  // <div className="flex items-start flex-col justify-between md:justify-between md:flex-row">
  //   <div className="flex flex-col gap-4">
  //     <a
  //       href="https://flowbite.com/"
  //       className="flex items-center space-x-3 rtl:space-x-reverse"
  //     >
  //       <img
  //         src="https://flowbite.com/docs/images/logo.svg"
  //         className="h-8"
  //         alt="Flowbite Logo"
  //       />
  //       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
  //         Build Connect
  //       </span>
  //     </a>
  //     <p className="text-sm">Build efficiently with Data</p>
  //   </div>
  //   <div className="flex flex-col gap-4">
  //     <Menus />
  //   </div>
  // </div>
  // );

  return (
    <footer className="">
      <div className="max-w-screen-xl p-4 py-6 lg:py-16 md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase">
              Build Connect
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <Link href="/about_us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/contact_us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Help center
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
