import React from "react";
import { Box } from "@material-ui/core";
import NavDots from "./NavDots";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <Logo />
      <NavDots />
    </Box>
  );
}
