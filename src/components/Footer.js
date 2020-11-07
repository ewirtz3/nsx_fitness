import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="column">
        <i className="fab fa-instagram fa-lg" aria-labelledby="instagram">
          <a href="#" alt="link to NSXfitness Instagram"></a>
        </i>
        <span id="instagram">@nsxfitness</span>
      </div>
      <div className="column">
        <i className="fab fa-facebook fa-lg" aria-labelledby="facebook">
          <a href="#" alt="link to NSXfitness Facebook"></a>
        </i>
        <span id="facebook">NSXfitness</span>
      </div>
      <div className="column">
        <i className="fab fa-tiktok fa-lg" aria-labelledby="tik-tok">
          <a href="#" alt="link to NSXfitness TikTok"></a>
        </i>
        <span id="tik-tok">@nsxfitness</span>
      </div>
    </footer>
  );
}
