import './ReviewItem.scss';
import RatingStar from '../RatingStar/RatingStar';
import timeFormat from '../../timeUtils';
import Avatar from '../Avatar/Avatar';
function ReviewItem({ review }) {

  return (
    <div className="review-item">
      <div className="review-item__userinfo">
        <Avatar name={review.user_name} />
        <span className="review-item__userinfo--name">{review.user_name}</span>
      </div>
      <div className="review-item__info">
        <RatingStar rating={review.stars} />
        <h3 className="review-item__title">{review.title}</h3>
      </div>
      <p className="review-item__time">
        Reviewed on
        <span className="review-item__time--bold">
          {timeFormat(review.review_time)}
        </span>
      </p>
      <p className="review-item__text">{review.content}</p>
    </div>
  );
}


export default ReviewItem;