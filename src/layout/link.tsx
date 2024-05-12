import React, { FC, useMemo } from "react";

interface LinkProps {
  name: string;
  url: string;
  selected?: boolean;
}

const Link: FC<LinkProps> = (props) => {
  const style = useMemo(
    () =>
      props?.selected
        ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
        : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
    [props?.selected]
  );
  return (
    <a href={props.url} className={style} aria-current="page">
      {props.name}
    </a>
  );
};

export default Link;
