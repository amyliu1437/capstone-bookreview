import React, { useState } from "react";
import "./InputRating.scss";

function InputRating({ label, name, preloadValue }) {
  const [rating, setRating] = useState(preloadValue);
  const [hover, setHover] = useState(0);

  const handleRatingChange = (event) => {
    const ratingValue = parseInt(event.target.value);
    setRating(ratingValue);
    console.log("Rating changed:", ratingValue);
  };

  const handleHoverChange = (ratingValue) => {
    console.log("handleHoverChange: "+ratingValue);
    setRating(ratingValue);
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
            <label>
            <input
              type="radio"
              id={`${name}_${ratingValue}`}
              name={name}
              value={rating}
              checked={rating === ratingValue}
              onChange={handleRatingChange}
              className="field_rating__input"
            />
            <span
              onClick={() => handleHoverChange(ratingValue)}
              className={ratingValue <= (hover || rating) ? "field_rating__activeStar" : "field_rating__star"}
            >
              &#9733;
            </span>
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default InputRating;
