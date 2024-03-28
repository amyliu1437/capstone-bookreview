import './RatingStar.scss';
import starFull from '../../assets/Image/starFilled.png';
import starEmpty from '../../assets/Image/starEmpty.png';
import starHalf from '../../assets/Image/starHalf.png';

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
      stars.push(<span key={i}><img src={starFull} className="star"/></span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half"><img src={starHalf} className="star"/></span>);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      // stars.push(<span key={`empty-${i}`} className="star star--empty">&#9733;</span>);
      stars.push(<span key={`empty-${i}`}><img src={starEmpty} className="star"/></span>);
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