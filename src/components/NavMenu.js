import React from "react";
import { Link } from "react-scroll";

export default function NavMenu() {
  return (
    <ul className="nav-items">
      <li className="nav-item">
        <Link
          activeClass="active"
          to="meet-nick"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Meet Nick
        </Link>
      </li>
      <li className="nav-item">
        <Link
          activeClass="active"
          to="fit-tip"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Daily Fit Tip
        </Link>
      </li>
      <li className="nav-item">
        <Link
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Services & Pricing
        </Link>
      </li>
      <li className="nav-item">
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
