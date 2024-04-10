import React, { useState } from "react";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div className="card-container">
      <div
        className={`card ${isFlipped ? "is-flipped" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="front">
          <h2>Ön Yüz</h2>
          <p>Ön yüz içeriği burada</p>
        </div>
        <div className="back">
          <h2>Arka Yüz</h2>
          <p>Arka yüz içeriği burada</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
