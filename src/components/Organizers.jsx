import React from "react";
import Heading2 from "./Typography/Heading2";
import Carousel from "react-elastic-carousel";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { organizers } from "../assets/strings";

export default () => {
  return (
    <div className="relative isolate my-12">
      <Heading2 center>ORGANIZERS</Heading2>
      <Carousel
        renderArrow={customArrow}
        pagination={false}
        breakPoints={[
          { width: 1, itemsToShow: 1 },
          { width: 550, itemsToShow: 2 },
          { width: 850, itemsToShow: 3 },
          { width: 1150, itemsToShow: 3 },
        ]}
      >
        {organizers.map((organizer, index) => (
          <div className="m-4 relative" key={index}>
            <img
              src={organizer.photoProfile ? organizer.photoProfile : "user.svg"}
              alt="photo profile"
              className="w-96 rounded-3xl"
            />
            <div className="absolute text-white bottom-5 left-0 bg-slate-800/50 px-8">
              <h3 className="font-bold text-xl">{organizer.name}</h3>
              <p>{organizer.position}</p>
            </div>
          </div>
        ))}
      </Carousel>
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
            top: "0.15rem",
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
            top: "0.15rem",
          }}
        >
          <KeyboardArrowRight />
        </button>
      )}
    </>
  );
};
