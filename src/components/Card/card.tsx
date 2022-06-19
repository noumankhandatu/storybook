import React from "react";
import "./card.css";
type CardProps = {
  variant?: boolean | string;
};
const Card = ({ variant }: CardProps) => {
  return (
    <div>
      <div className={`card ${variant} `}>
        <img
          width="100%"
          src="https://www.w3schools.com/w3css/img_lights.jpg"
        />
        <p>Hello its my new card</p>
      </div>
    </div>
  );
};

export default Card;
