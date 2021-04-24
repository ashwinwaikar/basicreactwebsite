import React from "react";
import web from "../src/images/2.svg";
import "./App.css";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow Your business with"
        imgsrc={web}
        visit="/services"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
