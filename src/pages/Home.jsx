import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Dummy from "../components/Dummy";
import TopSlider from "../components/TopSlider";
import HomeSlider from "../components/HomeSlider";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HomeSlider />
      <Dummy />
      <Dummy />
    </div>
  );
};

export default Home;
