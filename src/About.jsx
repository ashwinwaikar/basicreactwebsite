import React from "react";
import web from "../src/images/1.svg";
import "./App.css";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
