import {
  contentMisi,
  contentVisi,
  headingVisiMisi,
  titleMisi,
  titleVisi,
} from "../assets/strings";
import Heading2 from "./Typography/Heading2";
import Heading3 from "./Typography/Heading3";
import Paragraph from "./Typography/Paragraph";

export default () => {
  return (
    <div className="relative scroll-mt-28 isolate my-12" id="vision">
      <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
        <Heading2 center className="mb-8">
          {headingVisiMisi}
        </Heading2>
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
    </div>
  );
};
