import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="column">
        <i className="fab fa-instagram fa-lg" aria-labelledby="instagram"></i>
        <span id="instagram">@nsxfitness</span>
      </div>
      <div className="column">
        <i className="fab fa-facebook fa-lg" aria-labelledby="facebook"></i>
        <span id="facebook">NSXfitness</span>
      </div>
      <div className="column">
        <i className="fab fa-tiktok fa-lg" aria-labelledby="tik-tok"></i>
        <span id="tik-tok">@nsxfitness</span>
      </div>
    </footer>
  );
}
