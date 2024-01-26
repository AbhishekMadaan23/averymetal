import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import HomeSlider from "../components/HomeSlider";
import Description from "../components/Description";
import Carasouel from "../components/Carasouel";
import Testimonials from "../components/Testimonials";
import ClientCarasouel from "../components/ClientCarasouel";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HomeSlider />
      <Description />
      <Carasouel />
      <Testimonials />
      <ClientCarasouel />
      <Newsletter />
    </div>
  );
};

export default Home;
