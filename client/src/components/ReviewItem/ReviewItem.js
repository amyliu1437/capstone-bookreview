import './ReviewItem.scss';
import RatingStar from '../RatingStar/RatingStar';
import timeFormat from '../../timeUtils';
import Avatar from '../Avatar/Avatar';
function ReviewItem({review}){

  return(
    <div>
      <div>
        <Avatar name={review.user_name} />
        <span>{review.userName}</span>
        <span>{timeFormat(review.review_time)} </span>
        <RatingStar  rating={review.stars}/>
      </div>
      <h3>{review.title}</h3>
      <p>{review.content}</p>
    </div>
  );
}


export default ReviewItem;