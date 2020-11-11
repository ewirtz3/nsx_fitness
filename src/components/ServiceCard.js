import React from "react";

export default function ServiceCard({
  cardImgUrl,
  cardImgAlt,
  cardTitle,
  cardText,
}) {
  return (
    <div className="service-card">
      <div className="service-card-header">
        <img
          src={cardImgUrl}
          height="200"
          width="200"
          alt={cardImgAlt}
          className="service-card-img"
        />
        <h1 className="service-card-title">{cardTitle}</h1>
        {cardText.map((text) => {
          return (
            <>
              <p className="service-card-text">{text}</p>
              <hr className="horizontal-rule" />
            </>
          );
        })}
      </div>
    </div>
  );
}
