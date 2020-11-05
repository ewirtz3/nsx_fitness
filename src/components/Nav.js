import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

export default function Nav() {
  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <Logo />
        <NavMenu />
      </div>
    </nav>
  );
}
