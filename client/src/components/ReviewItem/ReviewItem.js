import './ReviewItem.scss';
import RatingStar from '../RatingStar/RatingStar';
import timeFormat from '../../timeUtils';
import Avatar from '../Avatar/Avatar';
function ReviewItem({userName, time, rates,title,content}){
  return(
    <div>
      <div>
        <Avatar name={userName} />
        <span>{userName}</span>
        <span>{timeFormat(time)} </span>
        <RatingStar  rates={rates}/>
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}


export default ReviewItem;