import React from "react";
import Title from "./Typography/Title";
import Subtitle from "./Typography/Subtitle";
import { subtitle, title } from "../assets/strings";

export default function Header() {
  return (
    <div
      className="relative isolate px-8 mt-24 mx-4 lg:mx-8"
      style={{
        backgroundImage: 'url("background.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "24px",
      }}
    >
      <div className="mx-auto py-24 sm:py-48 lg:py-80 px-8">
        <div className="text-center">
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </div>
      </div>
    </div>
  );
}
