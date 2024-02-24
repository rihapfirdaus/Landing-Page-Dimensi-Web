import React from "react";
import Heading3 from "./Typography/Heading3";
import { Divider } from "@mui/material";
import {
  alamat,
  buttonJoin,
  copyright,
  footer,
  navFooter,
  title,
} from "../assets/strings";

export default function FooterComp() {
  return (
    <footer
      style={{ background: "#50D890" }}
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="200"
    >
      <div
        className="text-center py-12"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-delay="400"
      >
        <Heading3 center className="mb-12">
          {footer}
        </Heading3>
        <a
          href="https://register-dw.vercel.app/"
          target="_blank"
          className="bg-white px-12 py-4 text-lg rounded-full"
        >
          JOIN US
        </a>
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
          <div className="justify-between mt-12 md:mt-0 hidden lg:flex">
            <div className="md:mr-4">
              <h3 className="font-bold text-lg">MENU</h3>
              <ul className="leading-10">
                {navFooter.map((nav, index) => (
                  <li>
                    <a
                      key={index}
                      href={nav.to || "#"}
                      className="hover:underline"
                    >
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
                  <a
                    href="https://www.instagram.com/dimensi.web/"
                    target="_blank"
                    className="hover:underline"
                  >
                    INSTAGRAM
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@dimensiwebuinbandung9623"
                    target="_blank"
                    className="hover:underline"
                  >
                    YOUTUBE
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/dimensi-web/"
                    target="_blank"
                    className="hover:underline"
                  >
                    LINKEDIN
                  </a>
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
