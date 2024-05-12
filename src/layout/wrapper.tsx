import React, { FC, PropsWithChildren } from "react";

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="md:w-10/12 mx-auto">{children}</div>;
};

export default Wrapper;
