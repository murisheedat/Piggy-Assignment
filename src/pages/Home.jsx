import React from "react";
import Hero from "../components/block/Hero";
import Security from "../components/block/security";
import Diverse from "../components/block/Diverse";
import Invest from "../components/block/Invest";
import Saver from "../components/block/Saver";

const Home = () => {
  return (
    <div>
      <Hero />
      <Security />
      <Diverse />
      <Invest />
      <Saver />
    </div>
  );
};

export default Home;
