import React from "react";

export default ({ children, center, className }) => {
  return (
    <h2
      className={`font-bold text-xl sm:text-2xl md:text-3xl xl:text-4xl ${
        center ? "text-center" : ""
      } ${className || ""}`}
    >
      {children}
    </h2>
  );
};
