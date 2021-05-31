import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Fab, Icon } from "@material-ui/core";
import introPic from "../assets/introPic-edgarchaparro.jpg";

const scrollTo = require("scroll-to");

const useStyles = makeStyles(() => ({
  photo: {
    backgroundImage: introPic,
    backgroundRepeat: "no-repeat",
  },
}));

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      scrollTo: props.height,
    };
  }

  updateDimensions() {
    this.setState({
      height: window.innerHeight + "px",
      scrollTo: window.innerHeight,
    });
  }

  async componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  onScrollToIntro() {
    scrollTo(0, this.state.scrollTo, {
      ease: "out-bounce",
      duration: 2000,
    });
  }

  render() {
    return (
      <Box id="intro-div">
        <img id="intro-pic" src={introPic}></img>
        <Fab
          className="enter"
          id="enter-icon"
          onClick={this.onScrollToIntro.bind(this)}
        >
          <Icon className="fas fa-angle-right" />
        </Fab>
      </Box>
    );
  }
}
