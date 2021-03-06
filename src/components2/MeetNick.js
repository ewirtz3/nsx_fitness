import React from "react";
import { Box } from "@material-ui/core";
import nick from "../assets/nick_nsxfitness.jpg";

export default function MeetNick() {
  return (
    <Box id="meet-nick">
      <img src={nick} alt="Nick Signorino" id="nick-pic" />
      <section id="nick-text">
        <p>
          Hey, I'm Nick! I live in San Diego and personal fitness training is
          both what I live for and what I do for a living. I'm here to assist
          you in assessing your fitness goals, creating a plan to achieve them,
          and working with you to make your goals a reality.
        </p>
        <br />
        <p>
          As an athlete, I have personal experience with strengthening and
          conditioning the human body. I have also received a Bachelor's degree
          in Kinesiology with an emphasis in exercise physiology and health
          science. Additionally, I am a certified Corrective Exercise
          Specialist.
        </p>
        <br />
        <p>
          The human body is a phenomenal machine, and should be properly taken
          care of in order to ensure maximum functionality. I have acquired the
          knowledge necessary to achieve this through the corrective exercise
          continuum: inhibiting, lengthening, activating, and integrating the
          tissues within the body to create maximum synergistic function.
        </p>
        <br />
        <p>
          I offer personalized fitness plans, one-on-one workouts where you are,
          and an ability to work within your schedule while on your fitness
          journey. Check out my full service list below and let's turn one day
          into day one.
        </p>
      </section>
    </Box>
  );
}
