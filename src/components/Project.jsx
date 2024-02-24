import React from "react";
import Heading2 from "./Typography/Heading2";
import Slider from "react-slick";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  { id: 1, content: "Item 1" },
  { id: 2, content: "Item 2" },
  { id: 3, content: "Item 3" },
  { id: 4, content: "Item 4" },
  { id: 5, content: "Item 5" },
];

export default () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplaySpeed: 2000,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: false,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div id="project" className="scroll-mt-28 relative isolate my-12">
      <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
        <div className="mt-12 mb-4 flex justify-between items-center">
          <div className="ml-8">
            <Heading2>PROJECTS</Heading2>
            <p>Project-project kami</p>
          </div>
        </div>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={item.id} className="mx-2 px-4">
              <img
                src="https://github.com/rihapfirdaus/Landing-Page-Dimensi-Web/blob/main/public/img-not-found.png?raw=true"
                alt="project"
                className="rounded-lg"
              />
              <div className="">
                <h3 className="font-bold text-xl my-2">Coming soon...</h3>
                <p className="my-2">Stay tuned for our cool projects!!</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const customArrow = ({ type, onClick, isEdge }) => {
  return (
    <>
      {type === "PREV" ? (
        <button
          onClick={onClick}
          disabled={isEdge}
          style={{
            width: "32px",
            height: "32px",
            color: "white",
            borderRadius: "100%",
            background: isEdge ? "gray" : "black",
            position: "absolute",
            right: "2.5rem",
            top: "1rem",
          }}
        >
          <KeyboardArrowLeft />
        </button>
      ) : (
        <button
          onClick={onClick}
          disabled={isEdge}
          style={{
            width: "32px",
            height: "32px",
            color: "white",
            borderRadius: "100%",
            background: isEdge ? "gray" : "black",
            position: "absolute",
            right: "0rem",
            top: "1rem",
          }}
        >
          <KeyboardArrowRight />
        </button>
      )}
    </>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button
      style={{
        width: "24px",
        height: "24px",
        color: "white",
        borderRadius: "100%",
        background: "black",
        display: "block",
        position: "absolute",
        right: "2.5rem",
        top: "-3.70rem",
        zIndex: 11,
      }}
      onClick={onClick}
    >
      <KeyboardArrowRight />
    </button>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <button
      style={{
        width: "24px",
        height: "24px",
        color: "white",
        borderRadius: "100%",
        background: "black",
        display: "block",
        position: "absolute",
        right: "5rem",
        top: "-3.70rem",
        zIndex: 11,
      }}
      onClick={onClick}
    >
      <KeyboardArrowLeft />
    </button>
  );
};
