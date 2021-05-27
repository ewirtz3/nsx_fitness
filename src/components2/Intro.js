import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import introPic from "../assets/introPic-edgarchaparro.jpg";

const useStyles = makeStyles(() => ({
  photo: {
    backgroundImage: introPic,
    backgroundRepeat: "no-repeat",
  },
}));

export default function Intro() {
  return (
    <Box id="intro-div">
      <img id="intro-pic" src={introPic}></img>
      <i class="fas fa-angle-right fa-9x enter" id="enter-icon"></i>
    </Box>
  );
}
