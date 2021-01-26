import React from "react";

export default function ServiceCard({
  cardImgUrl,
  cardImgAlt,
  cardTitle,
  cardText,
}) {
  return (
    <div className="card mx-4 text-center">
      <img
        src={cardImgUrl}
        height="200"
        width="200"
        alt={cardImgAlt}
        className="card-img-top"
      />
      <div className="card-body">
        <h1 className="card-title">{cardTitle}</h1>
        {cardText.map((text) => {
          return (
            <>
              <p className="card-text">{text}</p>
              <hr className="horizontal-rule" />
            </>
          );
        })}
      </div>
    </div>
  );
}
