import './BookDetailsPage.scss'
import axios from 'axios';
import { useState, useEffect} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import RatingStar from '../../components/RatingStar/RatingStar'
import ReviewItem from '../../components/ReviewItem/ReviewItem';

function BookDetailsPage (){

  const bookId= useParams();

 const selectedId = bookId.id;
 

  const [bookSelected, setBookSelected] = useState ({});
  
  const [bookReviews, setBookReviews]= useState([]);
  useEffect(() => {

    const getBook = async () => {

      try {
        const response = await axios.get(`http://localhost:8080/books/${selectedId}`);

        console.log(response)
        setBookSelected(response.data);
      } catch (error) {
        console.log(error)
      }

    }

    const getBookReviews = async () => {

      try {
        const response = await axios.get(`http://localhost:8080/books/${selectedId}/reviews`);

        console.log(response)
        setBookReviews(response.data);
      } catch (error) {
        console.log(error)
      }

    }
    getBook();
    getBookReviews();
  }, [selectedId,selectedId]);

  return(
    <div className="page-container">
      <section className="book">
      <img className="book__image" src={bookSelected.cover} alt='bookcover.svg' />
      <div className="book__info"> 
        <h2 className="book__title">{bookSelected.title}</h2>
        <h3 className="book__title"> {bookSelected.author}</h3>
        <RatingStar rates={bookSelected.average_stars} />
        <p className="book__description"> {bookSelected.summary} </p>
        <button>Add Review</button>      
      </div> 
      </section>
      <section className="reviews-container"> 
       <h2>Reviews</h2> 
       <div className="review-list">
        {bookReviews.map((review) => (
                    <ReviewItem
                        userName={review.user_name}
                        time={review.review_time}
                        key={review.id}
                        rates={review.stars}
                        title={review.title}
                        content={review.content}
                    />
        ))}

        </div> 
    
      </section>

    </div>
  )
}

export default BookDetailsPage;