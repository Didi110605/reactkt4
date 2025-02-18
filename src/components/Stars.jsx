import React from "react";

function Stars({ rating }) {
  const filledStars = Math.round(rating);
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={`fa fa-star ${i < filledStars ? "active" : ""}`}></span>
  ));
  return <div className="stars">{stars}</div>;
}

export default Stars;