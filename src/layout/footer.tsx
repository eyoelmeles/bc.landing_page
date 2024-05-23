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
    <footer className="bg-gray-200">
      <div className="max-w-screen-xl p-4 py-6 lg:py-16 md:p-8 lg:p-10">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase">
              Build Connect
            </h3>
            <ul className="text-gray-500 dark:text-gray-400  pl-4">
              <li className="mb-4">
                <Link href="/about_us" className="hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/contact_us" className="hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase">Features</h3>
            <ul className="text-gray-500 dark:text-gray-400 pl-4">
              <li className="mb-4">
                <Link href="/contact_us" className="hover:text-gray-900">
                  Work Order
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/contact_us" className="hover:text-gray-900">
                  Create and Manage Reports
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/contact_us" className="hover:text-gray-900">
                  Material and Equipment
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/about_us" className="hover:text-gray-900">
                  File and Attachments
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/contact_us" className="hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase">Company</h3>
            <ul className="text-gray-500 dark:text-gray-400 pl-4">
              <li className="mb-4">
                <Link href="/about_us" className="hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/contact_us" className="hover:text-gray-900">
                  Terms and Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
