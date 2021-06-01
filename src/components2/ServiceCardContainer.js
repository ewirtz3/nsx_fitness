import React from "react";
import img3 from "../assets/svcCard1-kellysikkema.jpg";
import img2 from "../assets/svcCard2-ivantorres.jpg";
import img1 from "../assets/svcCard3-karstenwinegeart.jpg";
import { Box, Grid } from "@material-ui/core";
import ServiceCard from "./ServiceCard";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";

export default function ServiceCardContainer() {
  const serviceCardArr = [
    {
      cardImgUrl: img1,
      cardImgAlt:
        "Offering personalized workouts in 30 and 60-minute time blocks",
      cardTitle: "Personalized Fitness Plans",
      cardText: [
        "Initial assessment, plus a concrete 6-, 12-, or 20-week plan based on your goals and physical needs",
        "30- or 60-minute sessions",
        "Recommended homeworks for in between sessions, including cardio, stretching, and foam rolling",
      ],
    },
    {
      cardImgUrl: img2,
      cardImgAlt: "Offering one-on-one workouts where you are",
      cardTitle: "One-on-One, Where You Are",
      cardText: [
        "Your personalized plan paves the road for your workouts; I'll be there to guide you towards your goals",
        "I come to you to work out, so you don't have to worry about COVID-19 in a gym space",
        "I also incorporate beach and park workouts, to keep things spicy and sandy",
      ],
    },
    {
      cardImgUrl: img3,
      cardImgAlt: "Working within your schedule while on your fitness journey",
      cardTitle: "Working Within Your Schedule",
      cardText: [
        "Choose a dedicated time slot for consistency or set a time that works for you week to week",
        "Traveling and don't want to miss a session? We can do a Zoom session or I can send you a routine that can be done anywhere",
        "Your determination and effort should determine your success, not your calendar",
      ],
    },
  ];
  const colWidth = { xs: 4 };
  const borderColor = "grey.500";
  const borderStyles = useGutterBorderedGridStyles({
    borderColor,
    height: "80%",
  });

  return (
    <Box id="service-cards" width={{ xs: "100%", md: "80%" }}>
      <Grid container justify={"center"}>
        {serviceCardArr.map((card, i) => {
          return (
            <Grid key={i} item {...colWidth} classes={borderStyles}>
              <ServiceCard
                cardImgUrl={card.cardImgUrl}
                cardTitle={card.cardTitle}
                cardText={card.cardText}
                cardImgAlt={card.cardImgAlt}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
