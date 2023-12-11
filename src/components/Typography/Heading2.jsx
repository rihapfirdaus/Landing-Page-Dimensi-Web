import React from "react";

export default ({ children, center, className }) => {
  return (
    <h2
      className={`font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl ${
        center ? "text-center" : ""
      } ${className || ""}`}
    >
      {children}
    </h2>
  );
};
