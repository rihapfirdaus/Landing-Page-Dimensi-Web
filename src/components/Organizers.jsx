import React from "react";
import Heading2 from "./Typography/Heading2";
import Slider from "react-slick";
import { organizers } from "../assets/strings";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div id="organizers" className="relative isolate my-12">
      <Heading2 center className="mt-16 mb-8">
        ORGANIZERS
      </Heading2>
      <Slider {...settings}>
        {organizers.map((organizer, index) => (
          <div className="relative px-4" key={index}>
            <img
              src={organizer.photoProfile ? organizer.photoProfile : "user.svg"}
              alt="photo profile"
              className="w-96 rounded-3xl"
            />
            <div className="absolute text-white bottom-5 left-0 bg-slate-800/50 px-8">
              <h3 className="font-bold text-md  xl:text-xl">
                {organizer.name}
              </h3>
              <p>{organizer.position}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
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
