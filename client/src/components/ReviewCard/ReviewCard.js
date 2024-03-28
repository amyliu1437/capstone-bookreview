import RatingStar from '../RatingStar/RatingStar';
import timeFormat from '../../timeUtils';
import './ReviewCard.scss';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

function ReviewCard({ ReviewCardItem, userId }) {

  const navigate = useNavigate();

  //Get all the reviews by the user
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


      <section className="review-card__right">

        <div className="review-card__content">
          <div className="review-book">
            <span className="review-book__title">{ReviewCardItem.title} </span>
            <div className="review-book__info">
              <p className="review-book__detail">By <span className="review-book__detail--black">{ReviewCardItem.author}</span> </p>
              <p className="review-book__detail">Publisher: <span className="review-book__detail--black">{ReviewCardItem.publisher}</span> </p>
            </div>
          </div>
          <div className="review-body">
            <div className="review-body__info" >
              <RatingStar rating={ReviewCardItem.stars} />
              <span className="review-body__title">{ReviewCardItem.rtitle}</span>
            </div>
            <div className="review-body__middle">
              <p className="review-body__time">Reviewed on <span>{timeFormat(ReviewCardItem.review_time)}</span></p>

            </div>
            <p className="review-body__text">{ReviewCardItem.content}</p>
          </div>
        </div>

        <div className="review-card__control">
          <div className="control-items" > 
          <Link className="control-items__link"
            to={`/reviews/${ReviewCardItem.id}/edit?bookcover=${ReviewCardItem.cover}`}
          >
            Edit
          </Link>
          <button className="control-items__button" onClick={handleReviewDelete}>Delete</button>
        </div>
        </div>
      </section>
    </div>
  );
}


export default ReviewCard;