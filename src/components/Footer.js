import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="social-links">
        <ul>
          <li>
            <i
              className="fab fa-instagram fa-lg glow"
              aria-labelledby="instagram"
            >
              {/* <a href="#" alt="link to NSXfitness Instagram"></a> */}
            </i>
          </li>
          <li>
            <i
              className="fab fa-facebook fa-lg glow"
              aria-labelledby="facebook"
            >
              {/* <a href="#" alt="link to NSXfitness Facebook"></a> */}
            </i>
          </li>
          <li>
            <i className="fab fa-tiktok fa-lg glow" aria-labelledby="tik-tok">
              {/* <a href="#" alt="link to NSXfitness TikTok"></a> */}
            </i>
          </li>
        </ul>
      </div>
    </footer>
  );
}
