import React, { useState } from "react";
import  "./InputRating.scss";

function InputRating({label, name}) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="field_rating">
    <label htmlFor={name} className="field__label">
        {label}
    </label>
      {[...Array(5)].map((Star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              id={name}
              name={name}
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <span
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              className={
                ratingValue <= (hover || rating) ? "activeStar" : "star"
              }
            >★</span>
          </label>
        );
      })}
    </div>
  );
}

export default InputRating;