import React from "react";
import { animateScroll as scroll } from "react-scroll";

export default function Logo() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="header-logo">
      <h1 onClick={scrollToTop}>NSXfitness</h1>
      <i className="fas fa-dumbbell fa-md"></i>
    </div>
  );
}
