import React from "react";
import { Box } from "@material-ui/core";
import { animateScroll as scroll } from "react-scroll";
import logo from "../assets/barbell_logo3.jpg";

export default function Logo() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Box id="header-logo">
      <img src={logo} onClick={scrollToTop} alt="NSX Fitness Logo" id="logo" />
      <h1>PERSONAL TRAINING</h1>
    </Box>
  );
}
