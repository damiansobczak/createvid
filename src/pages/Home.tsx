import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";
import Featured from "../components/Featured/Featured";
import Copyright from "../components/Copyright/Copyright";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <Featured />
      <Footer />
      <Copyright />
    </>
  );
}
