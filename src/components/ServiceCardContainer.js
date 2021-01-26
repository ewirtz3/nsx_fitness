import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServiceCardContainer() {
  const serviceCardArr = [
    {
      cardImgUrl:
        "https://recreation.uic.edu/wp-content/uploads/sites/377/2019/01/REC_FTile_PersonalTrainType.jpg",
      cardImgAlt:
        "Offering personalized workouts in 300 and 60-minute time blocks",
      cardTitle: "Personalized Fitness Plans",
      cardText: [
        "Initial assessment, plus a concrete 6-, 12-, or 20-week plan based on your goals and physical needs",
        "30-or 60-minute sessions",
      ],
    },
    {
      cardImgUrl:
        "https://www.nasm.org/images/2019/pages/how-to-become-a-cpt/desktop-how-to-become-a-personal-trainer-2.jpg",
      cardImgAlt: "Offering one-on-one workouts where you are",
      cardTitle: "One-on-One, Where You Are",
      cardText: [
        "Your personalized plan paves the road for your workouts; I'll be there to guide you towards your goals",
        "I come to you to work out, so you don't have to worry about COVID-19 in a gym space",
        "I also incorporate beach and park workouts, to keep things spicy and sandy",
      ],
    },
    {
      cardImgUrl:
        "https://centraljersey.com/wp-content/uploads/sites/26/2016/02/calendar.jpg",
      cardImgAlt: "Working within your schedule while on your fitness journey",
      cardTitle: "Working Within Your Schedule",
      cardText: [
        "Choose a dedicated time slot for consistency or set a time that works for you week to week",
        "Traveling and don't want to miss a session? We can do a Zoom session or I can send you a routine that can be done anywhere",
        "Your determination and effort should determine your success, not your calendar",
      ],
    },
  ];
  return (
    <div className="container">
      <div id="services" className="card-group">
        {serviceCardArr.map((serviceCard, i) => {
          return (
            <ServiceCard
              key={i}
              cardImgUrl={serviceCard.cardImgUrl}
              cardImgAlt={serviceCard.cardImgAlt}
              cardTitle={serviceCard.cardTitle}
              cardText={serviceCard.cardText}
            />
          );
        })}
      </div>
    </div>
  );
}
