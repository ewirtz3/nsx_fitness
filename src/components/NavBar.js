import React, { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-scroll";
import NavMenu from "./NavMenu";

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  const hrefs = [
    {
      text: "Meet Nick",
      linkTo: "meet-nick",
    },
    {
      text: "Daily Fit Tip",
      linkTo: "fit-tip",
    },
    {
      text: "Services & Pricing",
      linkTo: "services",
    },
    {
      text: "Contact",
      linkTo: "contact",
    },
  ];

  return (
    <nav className="navBar">
      <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
      <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
        {hrefs.map((linkTo, i) => {
          return (
            <li>
              <Link
                key={i}
                activeClassName="active-link"
                to={linkTo.linkTo}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => closeMenu()}
              >
                {linkTo.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// <div className="nav-content">
// <Logo />
// <NavMenu />
// </div>
