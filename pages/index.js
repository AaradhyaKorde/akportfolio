import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Text1 from "./components/Text1";
import WorkExperience from "./components/WorkExperience";
import Banner from "./components/Banner";
import LocomotiveScroll from "locomotive-scroll";
import Banner2 from "./components/Banner2";
import Othersec from "./components/Othersec";
import Footer from "./components/Footer";
import Why from "./components/Why";
import SkillsTech from "./components/SkillsTech";
import Mobiletest from "./components/Mobiletest";
import Loader from "./components/Loader";
const Index = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <>
      <Loader />
      <Navbar />
      <Home />
      <Banner />
      <div id="AboutMe"> <Why /></div>
      {/* <Banner2 /> */}
      <div id="SkillsTech"> <SkillsTech /></div>
      <div id="WorkExperience"> <WorkExperience /></div>
      {/* <Othersec /> */}
      <div id="Text1"> <Text1 /></div>
      <Mobiletest />
      <Footer />
    </>
  );
};

export default Index;
