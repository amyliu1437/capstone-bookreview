import './RatingStar.scss';
const RatingStar = ({ rating }) => {
  if (!rating) {
    return (<div className="rating"></div>);
  }
  const fixedRating = parseFloat(rating).toFixed(2);
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star">&#9733;</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">&#9733;</span>);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">&#9733;</span>);
    }

    return stars;
  };

  return (
    <div className="rating" title={fixedRating}>
      {renderStars()}
    </div>
  );
};

export default RatingStar;