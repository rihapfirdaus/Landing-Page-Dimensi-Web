import React from "react";
import { title } from "../assets/strings";

export default function Nav() {
  return (
    <header className="fixed z-10 right-0 left-0 top-0 bg-white">
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-16 xl:px-24"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 flex flex-row items-center">
            <img
              className="h-10 w-auto mr-2"
              src="logo.png"
              alt="Logo Dimensi Web"
            />
            <h1 className="text-xl font-bold">{title}</h1>
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="#about"
            className="text-lg font-semibold leading-6 py-2 px-4 text-gray-900 hover:font-extrabold hover:underline"
          >
            About
          </a>

          <a
            href="#vision"
            className="text-lg font-semibold leading-6 py-2 px-4 text-gray-900 hover:font-extrabold hover:underline"
          >
            Vision
          </a>

          <a
            href="#timeline"
            className="text-lg font-semibold leading-6 py-2 px-4 text-gray-900 hover:font-extrabold hover:underline"
          >
            Timeline
          </a>

          <a
            href="#organizers"
            className="text-lg font-semibold leading-6 py-2 px-4 text-gray-900 hover:font-extrabold hover:underline"
          >
            Organizers
          </a>
          <a
            href="#project"
            className="text-lg font-semibold leading-6 py-2 px-4 text-gray-900 hover:font-extrabold hover:underline"
          >
            Project
          </a>
        </div>

        <div className=" lg:flex lg:flex-1 lg:justify-end">
          <a
            target="_blank"
            href="https://register-dw.vercel.app/"
            className="text-lg font-extrabold leading-6 tracking-wider py-2 px-4 text-white  bg-gray-800 rounded-lg hover:translate-y-0.5"
          >
            Join Us
          </a>
        </div>
      </nav>
    </header>
  );
}
