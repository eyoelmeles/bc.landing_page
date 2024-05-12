import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import Menu from "./menu";

const Menus = () => {
  return (
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Menu name="Home" url="/" />
      </li>
      <li>
        <Menu name="Call Us" url="/contact_us" />
      </li>
    </ul>
  );
};

export default Menus;
