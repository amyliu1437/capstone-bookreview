import './MyReviewsPage.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

function MyReviewsPage() {
  const userId = useParams();
  const selectedUserId = userId.userid;

  const [bookReviews, setBookReviews] = useState([]);
  useEffect(() => {

    const getBookReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/${selectedUserId}/reviews`);
        setBookReviews(response.data);
      } catch (error) {
        console.log(error)
      }

    }
    getBookReviews();
  }, [userId]);


  return (
    <div className="reviews-container">
      <section className="my-reviews">
        <h1 className="my-reviews__title">All My Reviews</h1>
        <div className="my-reviews__list">
          {bookReviews.map((review) => (
            <ReviewCard key={review.id} userId={selectedUserId} ReviewCardItem={review} />
          ))}

        </div>
      </section>
    </div>
  )
}

export default MyReviewsPage;