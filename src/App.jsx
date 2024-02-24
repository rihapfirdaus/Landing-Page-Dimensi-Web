import Nav from "./components/Nav";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Nav />
      <Header />
      <Body />
      <Footer />
    </>
  );
};
