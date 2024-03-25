import './MyReviewsPage.scss';
import axios from 'axios';
import { useState, useEffect} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

function MyReviewsPage(){
   const userId= useParams();   
   const selectedUserId = userId.userid;   
  
  const [bookReviews, setBookReviews]= useState([]);
     useEffect(() => {

    const getBookReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/${selectedUserId}/reviews`);
        setBookReviews(response.data);
        // console.log(response.data)
      } catch (error) {
        console.log(error)
      }

    }
    getBookReviews();
  }, [userId]);


  return(
    <section className="reviews-container"> 
       <h1>All My Reviews</h1> 
       <div className="review-list">
        {bookReviews.map((review) => (
                    <ReviewCard ReviewCardItem={review} />
        ))}

        </div> 
    
      </section>
  )
}

export default MyReviewsPage;