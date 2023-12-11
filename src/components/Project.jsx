import React, { useRef, useState } from "react";
import Heading2 from "./Typography/Heading2";
import Carousel from "react-elastic-carousel";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const items = [
  { id: 1, content: "Item 1" },
  { id: 2, content: "Item 2" },
  { id: 3, content: "Item 3" },
  { id: 4, content: "Item 4" },
  { id: 5, content: "Item 5" },
];

export default function Project({ isEdge }) {
  return (
    <div className="relative isolate my-12">
      <div className="my-12 flex justify-between items-center">
        <div style={{ position: "relative" }}>
          <Heading2>PROJECTS</Heading2>
          <p className="">Project-project kami</p>
        </div>
      </div>
      <Carousel
        renderArrow={customArrow}
        pagination={false}
        breakPoints={[
          { width: 1, itemsToShow: 1 },
          { width: 550, itemsToShow: 2 },
          { width: 850, itemsToShow: 3 },
          { width: 1150, itemsToShow: 4 },
        ]}
      >
        {items.map((item) => (
          <div key={item.id} className="mx-2">
            <img src="project.svg" alt="project" />
            <div className="">
              <h3 className="font-bold text-xl my-2">ini h3</h3>
              <p className="my-2">ini p</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

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
