import React, { useState } from "react";

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div className="card-container flex justify-center items-center flex-wrap m-60 ">
      <div
        className={`card ${isFlipped ? "is-flipped" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="front">{frontContent}</div>
        <div className="back">{backContent}</div>
      </div>
    </div>
  );
};

export default FlipCard;
