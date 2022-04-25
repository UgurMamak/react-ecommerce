import React, { useState } from "react";

function BeerCard({ beer, handleOpen }) {
  console.log("beer=", beer);
  return (
    <div className="card">
      <div className="image-container">
        <img src={beer.image_url} alt={beer.name} />
      </div>

      <div className="info-container">
        <section className="name-tagline">
          <p className="beer-name">{beer.name}</p>
          <p className="beer-tagline">
            <i>{beer.tagline}</i>
          </p>
        </section>
        <p className="beer-description">{beer.description}</p>
      </div>
    </div>
  );
}
export default BeerCard;
