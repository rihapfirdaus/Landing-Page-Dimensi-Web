import React from "react";
import About from "./About";
import Timeline from "./Timeline";
import Organizers from "./Organizers";
import Project from "./Project";

export default function Body() {
  return (
    <div className="mx-4 max-w-screen-2xl xl:mx-12 2xl:mx-auto">
      <About />
      <Timeline />
      <Organizers />
      <Project />
    </div>
  );
}
