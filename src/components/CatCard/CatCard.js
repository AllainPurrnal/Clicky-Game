//sets up the reusable CatCard component
import React from "react";
import "./CatCard.css";

//pass the image into each card so all 12 are rendered
const CatCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../../public/images/" + props.image)} />
    </div>
  </div>
);

export default CatCard;