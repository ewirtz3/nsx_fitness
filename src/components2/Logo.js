import React from "react";
import { Box } from "@material-ui/core";
import { animateScroll as scroll } from "react-scroll";

export default function Logo() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Box id="header-logo" className="red-color">
      <Box id="header-name">
        <h1 onClick={scrollToTop}>NSXfitness</h1>
        <h5>PERSONAL TRAINING</h5>
      </Box>
      <i id="header-icon" className="fas fa-dumbbell fa-md text-danger"></i>
    </Box>
  );
}
