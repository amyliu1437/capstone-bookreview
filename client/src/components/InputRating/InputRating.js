import React, { useState } from "react";
import "./InputRating.scss";

function InputRating({ label, name, preloadValue,status }) {
  const [rating, setRating] = useState(preloadValue);
  const [hover, setHover] = useState(0);

  const handleRatingChange = (event) => {
    const ratingValue = parseInt(event.target.value);
    setRating(ratingValue);
    console.log("Rating changed:", ratingValue);
  };

  const handleHoverChange = (ratingValue) => {
    setRating(ratingValue);
  };

  return (
    <div className="rating-input">
      <h3 className="rating-input__label">
        {label}
      </h3>
      <div className="rating-input__value" >
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
                  className="rating-input__input"
                />
                <span
                  onClick={() => handleHoverChange(ratingValue)}
                  className={ratingValue <= (hover || rating) ? "rating-input__activeStar" : "rating-input__star"}
                >
                  &#9733;
                </span>
              </label>
            </div>
          );
        })}
      </div>
      <label className={status&&status.length>0?"rating-input__error":"rating-input__hidden"}>
                {status}
            </label>
    </div>
  );
}

export default InputRating;
