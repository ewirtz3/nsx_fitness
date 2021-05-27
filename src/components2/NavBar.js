import React from "react";
import { Box } from "@material-ui/core";
import NavDots from "./NavDots";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <Box id="navbar">
      <Logo />
      <NavDots />
    </Box>
  );
}
