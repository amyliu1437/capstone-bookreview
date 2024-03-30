import './MyReviewsPage.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import Avatar from '../../components/Avatar/Avatar';

function MyReviewsPage() {
  const userId = useParams();
  const selectedUserId = userId.userid;

  const [bookReviews, setBookReviews] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {

    const getBookReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/${selectedUserId}/reviews`);
        setBookReviews(response.data);
      } catch (error) {
        console.log(error)
      }

    }

    const getUserInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/${selectedUserId}`);
        setUserInfo(response.data);
        console.log()
      } catch (error) {
        console.log(error)
      }

    }
    getUserInfo();
    getBookReviews();
  }, [userId, userId]);


  return (
    <div className="reviews-container">
      <section className="my-reviews">
        <h2 className="my-reviews__title">All My Reviews
          <span className="my-reviews__title__msg"> / {bookReviews.length} reviews in total</span>
        </h2>
        <section className="my-reviews__list">
          {bookReviews.map((review) => (
            <ReviewCard key={review.id} userId={selectedUserId} ReviewCardItem={review} />
          ))}

        </section>
      </section>
    </div>
  )
}

export default MyReviewsPage;