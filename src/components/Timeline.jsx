import * as React from "react";
import Heading3 from "./Typography/Heading3";
import Heading2 from "./Typography/Heading2";

export default () => {
  return (
    <div>
      <Heading2 center className="mt-16">
        TIMELINE
      </Heading2>
      <Heading3 center className="my-10">
        PAST GENERATION
      </Heading3>
      <div className="relative flex justify-center" style={{ height: "50rem" }}>
        <div className="h-full w-2 bg-black"></div>
        {timelines.map((timeline, index) => (
          <div key={index}>
            <div
              className="absolute bg-green-700 w-6 h-6 rounded-full border-4 border-black left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ top: (index + 1) * 9 + "rem" }}
            ></div>
            <div
              className={`absolute ${
                index % 2 === 0 ? "left-2/4 pl-10" : "text-end right-2/4 pr-10"
              } max-w-md xl:max-w-xl`}
              style={{ top: (index + 1) * 9 - 1.5 + "rem" }}
            >
              <Heading3>{timeline.title}</Heading3>
              <p className="text-gray-500 lg:text-xl lg:font-mono">
                {timeline.periode}
              </p>
              <div className="mt-3">
                <p className="lg:text-xl">{timeline.details}</p>
                <p className="font-extrabold text-green-500 lg:text-xl">
                  {`Output : ${timeline.output}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Heading3 center className="my-10">
        NEXT GENERATION
      </Heading3>
    </div>
  );
};

const timelines = [
  {
    title: "  FUNDAMENTALS",
    periode: "Dec 23 - Feb 24",
    details:
      "No Code Web, Googling, HTML, CSS, Javascript, Basic Github, ChatGPT",
    output: "Konversi Mockup Design Menjadi Web",
  },

  {
    title: "FRAMEWORK",
    periode: "Mar 24 - Jun 24",
    details: "Bootstrap, Tailwind CSS, React JS, Express JS, Postgre SQL",
    output: "Mempercepat Proses Development Web",
  },

  {
    title: "PROJECT WITH TEAM",
    periode: "Jul 24 - Sep 24",
    details: "Github, Testing, Basic SDLC, Basic Deploy",
    output: "Membangun Project yang utuh & Komunikasi yang baik dengan Tim",
  },

  {
    title: "PROJECT FROM CLIENT",
    periode: "Oct 24 - Nov 24",
    details: "Find Client Problem ",
    output: "Profesionalitas (Money Opsional)",
  },
];
