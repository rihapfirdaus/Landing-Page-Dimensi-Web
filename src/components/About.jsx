import React from "react";
import Heading2 from "./Typography/Heading2.jsx";
import Heading3 from "./Typography/Heading3.jsx";
import Paragraph from "./Typography/Paragraph.jsx";
import {
  contentAbout,
  contentMisi,
  contentVisi,
  headingAbout,
  headingVisiMisi,
  titleMisi,
  titleVisi,
} from "../assets/strings.js";

export default () => {
  return (
    <>
      <div className="">
        <div className="relative isolate flex flex-col my-12 lg:flex-row justify-center items-center">
          <div className="flex justify-center lg:w-1/3">
            <img src="logo.svg" alt="logo dimensi web" />
          </div>
          <div className=" text-center p-4 lg:w-2/3 lg:text-start">
            <Heading2>{headingAbout}</Heading2>
            <Paragraph style={"my-6"}>{contentAbout}</Paragraph>
          </div>
        </div>
      </div>
      <div className="relative isolate my-12">
        <Heading2 center>{headingVisiMisi}</Heading2>
        <div className=" flex flex-col justify-center lg:justify-normal lg:flex-row">
          <div
            className="p-6 m-4 lg:w-1/2"
            style={{
              border: "4px solid #50D890",
              borderRadius: "24px",
            }}
          >
            <Heading3 center>{titleVisi}</Heading3>
            <Paragraph style={"m-6"}>{contentVisi}</Paragraph>
          </div>
          <div
            className="p-6 m-4 lg:w-1/2"
            style={{
              background: "#50D890",
              borderRadius: "24px",
            }}
          >
            <Heading3 center>{titleMisi}</Heading3>
            <ul className="m-6 list-disc list-outside">
              {contentMisi.map((misi, index) => (
                <li
                  key={index}
                  className="text-justify text-md sm:text-lg md:text-xl lg:text-2xl"
                >
                  {misi}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
