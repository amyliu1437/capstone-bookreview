import React, { useState } from "react";
import "./InputRating.scss";

function InputRating({ label, name, preloadValue }) {
  const [rating, setRating] = useState(preloadValue);
  const [hover, setHover] = useState(null);

  const handleRatingChange = (event) => {
    const ratingValue = parseInt(event.target.value);
    setRating(ratingValue);
    console.log("Rating changed:", ratingValue);
  };

  const handleHoverChange = (ratingValue) => {
    setHover(ratingValue);
  };

  return (
    <div className="field_rating">
      <label className="field__label">
        {label}
      </label>
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <div key={ratingValue}>
            <input
              type="radio"
              id={`${name}_${ratingValue}`}
              name={name}
              value={ratingValue}
              checked={rating === ratingValue}
              onChange={handleRatingChange}
            />
            <span
              onMouseEnter={() => handleHoverChange(ratingValue)}
              onMouseLeave={() => setHover(null)}
              className={ratingValue <= (hover || rating) ? "activeStar" : "star"}
            >
              &#9733;
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default InputRating;
