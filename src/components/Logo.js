import React from "react";
import { animateScroll as scroll } from "react-scroll";

export default function Logo() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div id="header-logo" className="text-danger">
      <div id="header-name">
        <h1 onClick={scrollToTop}>NSXfitness</h1>
        <p>PERSONAL TRAINING</p>
      </div>
      <i id="header-icon" className="fas fa-dumbbell fa-md text-danger"></i>
    </div>
  );
}
