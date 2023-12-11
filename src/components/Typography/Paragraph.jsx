import React from "react";

export default ({ children, style }) => {
  return (
    <p
      className={`text-justify text-md sm:text-lg md:text-xl lg:text-2xl ${
        style ? style : ""
      }`}
    >
      {children}
    </p>
  );
};
