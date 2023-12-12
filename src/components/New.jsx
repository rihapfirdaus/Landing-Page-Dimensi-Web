import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { organizers } from "../assets/strings";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
const NextArrow = ({ onClick }) => {
  return (
    <button
      style={{
        width: "32px",
        height: "32px",
        color: "white",
        borderRadius: "100%",
        background: "black",
        display: "block",
        position: "absolute",
        right: "2.5rem",
        top: "0.15rem",
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
        width: "32px",
        height: "32px",
        color: "white",
        borderRadius: "100%",
        background: "black",
        display: "block",
        position: "absolute",
        right: "5rem",
        top: "0.15rem",
        zIndex: 11,
      }}
      onClick={onClick}
    >
      <KeyboardArrowLeft />
    </button>
  );
};
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
  };

  return (
    <div className="relative">
      <h2>Carousel Component</h2>
      <Slider {...settings}>
        {organizers.map((organizer, index) => (
          <div className="relative" key={index}>
            <img
              src={organizer.photoProfile ? organizer.photoProfile : "user.svg"}
              alt="photo profile"
              className="w-96 rounded-3xl"
            />
            <div className="absolute text-white bottom-5 left-0 bg-slate-800/50 px-8">
              <h3 className="font-bold text-md  lg:text-xl">
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
