import React, { useState } from 'react';

const RatingStar  = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? "star active" : "star"}
          onClick={() => handleStarClick(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <div className="star-container">
        {renderStars()}
      </div>
    </div>
  );
};

export default RatingStar;
