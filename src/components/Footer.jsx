import React from "react";
import Heading3 from "./Typography/Heading3";
import { Divider } from "@mui/material";
import {
  alamat,
  buttonJoin,
  copyright,
  email,
  footer,
  navFooter,
  sosmed,
  title,
} from "../assets/strings";

export default function FooterComp() {
  return (
    <footer style={{ background: "#50D890" }}>
      <div className="text-center py-12">
        <Heading3 center>{footer}</Heading3>
        <button className="bg-white px-12 py-2 m-6 text-lg rounded-full">
          {buttonJoin}
        </button>
      </div>
      <div
        className="bg-white px-6 pt-6 pb-4 lg:px-16 lg:pt-16 lg:pb-12 xl:px-24 xl:pt-24"
        style={{ borderRadius: "48px 48px 0 0" }}
      >
        <div className="flex flex-col justify-between md:flex-row">
          <div>
            <a href="#" className="-m-1.5 p-1.5 flex flex-row items-center">
              <img className="h-10 w-auto mr-2" src="logo.svg" alt="" />
              <p className="text-xl font-bold">{title}</p>
            </a>
            <ul className="mt-4 leading-10">
              <li>{alamat}</li>
              <li>dimensiweb@uinsgd.ac.id</li>
              <li>dimensiwebhimatif@gmail.com</li>
            </ul>
          </div>
          <div className="flex justify-between mt-12 md:mt-0">
            <div className="md:mr-4">
              <h3 className="font-bold text-lg">MENU</h3>
              <ul className="leading-10">
                {navFooter.map((nav, index) => (
                  <li>
                    <a key={index} href={nav.to || "#"}>
                      {nav.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:mx-4">
              <h3 className="font-bold text-lg">EXTRA</h3>
            </div>
            <div className="md:ml-4">
              <h3 className="font-bold text-lg">SOCIAL</h3>
              <ul className="leading-10">
                <li>
                  <a href="">INSTAGRAM</a>
                </li>
                <li>
                  <a href="">TWITTER</a>
                </li>
                <li>
                  <a href="">YOUTUBE</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Divider variant="middle" className="py-4" />
        <div className="flex flex-col justify-between text-sm">
          <p>&copy;{copyright}</p>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
