import React from "react";
import Heading2 from "./Typography/Heading2.jsx";
import Paragraph from "./Typography/Paragraph.jsx";
import { contentAbout, headingAbout } from "../assets/strings.js";

export default () => {
  return (
    <>
      <div id="about" className="scroll-mt-28">
        <div
          className="relative isolate flex flex-col my-12 lg:flex-row justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <div className="flex justify-center lg:w-1/3">
            <img
              src="logo.png"
              alt="logo dimensi web"
              style={{
                filter: "drop-shadow(0 0 2em #61dafbaa)",
              }}
            />
          </div>
          <div className=" text-center p-4 lg:w-2/3 lg:text-start">
            <Heading2>{headingAbout}</Heading2>
            <Paragraph style={"my-6"}>{contentAbout}</Paragraph>
          </div>
        </div>
      </div>
    </>
  );
};
