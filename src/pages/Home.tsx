import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";
import Featured from "../components/Featured/Featured";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <Featured />
    </>
  );
}
