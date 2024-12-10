import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Content from "./component/Content";


const home = () => {
  return (
    <>
      <div>
        <Navbar /> <br /><br />
        <Content/> <br /><br /> 
        <Footer />
      </div>
    </>
  );
};

export default home;
