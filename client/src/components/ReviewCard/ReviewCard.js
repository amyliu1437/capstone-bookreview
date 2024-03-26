import RatingStar from '../RatingStar/RatingStar';
import timeFormat from '../../timeUtils';
import './ReviewCard.scss';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

function ReviewCard({ ReviewCardItem, userId }) {

  const navigate = useNavigate();

  console.log(ReviewCardItem.id)



  const handleReviewDelete = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:8080/reviews/${ReviewCardItem.id}`);
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    navigate(`/users/${userId}/reviews`);
  }



  return (
    <div className="review-card">
      <img className="review-card__image" src={ReviewCardItem.cover} />
      <div className="review-card__content">
        <div className="book">
          <span className="book__title">{ReviewCardItem.title} </span>
          <div className="book__info">
            <p className="book__detail">By <span className="book__detail--bold">{ReviewCardItem.author}</span> </p>
            <p className="book__detail">Publisher: <span className="book__detail--bold">{ReviewCardItem.publisher}</span> </p>
          </div>
        </div>
        <div className="review">
          <div className="review__info" >
            <RatingStar rating={ReviewCardItem.stars} />
            <span className="review__title">{ReviewCardItem.rtitle}</span>
          </div>
          <div className="review__middle">
            <p className="review__time">Reviewed on <span>{timeFormat(ReviewCardItem.review_time)}</span></p>
            <div className="review__control">
              <Link
                to={`/reviews/${ReviewCardItem.id}/edit?bookcover=${ReviewCardItem.cover}`}
              >
                <button className="review__button">Edit</button>
              </Link>
              <button className="review__button" onClick={handleReviewDelete}>Delete</button>
            </div>
          </div>
          <p className="review__text">{ReviewCardItem.content}</p>
        </div>
      </div>
    </div>
  );
}


export default ReviewCard;