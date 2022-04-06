import React from "react";
import ME from "../assets/pictures/me.jpg";

const HomeCard = () => {
  return (
    <div className="home-card-container">
      <div className="card">
        <img src={ME} alt="Yakup KAYA" className="card__image" />
        <p className="card__name">Yakup KAYA</p>
        <div className="grid-container"></div>
        <button className="btn draw-border">Message</button>
      </div>
    </div>
  );
};

export default HomeCard;
