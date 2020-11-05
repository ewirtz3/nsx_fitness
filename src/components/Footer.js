import React from "react";
import { GlobalStyles } from "../global";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="column">
        <i className="fab fa-instagram" aria-labelledby="instagram"></i>
        <span id="instagram">@nsxfitness</span>
      </div>
      <div className="column">
        <i className="fab fa-facebook" aria-labelledby="facebook"></i>
        <span id="facebook">NSXFitness</span>
      </div>
      <div className="column">
        <i className="fab fa-tiktok" aria-labelledby="tik-tok"></i>
        <span id="tik-tok">@nsxfitness</span>
      </div>
    </footer>
  );
}
