"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, memo, useCallback, useMemo } from "react";
interface MenuProps {
  name: string;
  url: string;
}
const Menu: FC<MenuProps> = (props) => {
  const pathName = usePathname();
  console.log("Path", pathName);
  console.log("URL", props.url);
  const style = useMemo<string>(
    () =>
      props.url == pathName
        ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
        : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
    [pathName]
  );
  return (
    <Link className={style} href={props.url}>
      {props.name}
    </Link>
  );
};

export default memo(Menu);
