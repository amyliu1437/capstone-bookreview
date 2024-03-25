import './BookDetails.scss'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import RatingStar from '../RatingStar/RatingStar'
import ReviewItem from '../ReviewItem/ReviewItem';

function BookDetails() {
  const bookId = useParams();
  const selectedId = bookId.bookid;
  const [bookSelected, setBookSelected] = useState({});
  const [bookReviews, setBookReviews] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/books/${selectedId}`);
        setBookSelected(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error)
      }
    }

    const getBookReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/books/${selectedId}/reviews`);
        // console.log(response.data);
        setBookReviews(response.data);
      } catch (error) {
        console.log(error)
      }

    }
    getBook();
    getBookReviews();
  }, [selectedId, selectedId]);

  return (
    <div className="page-container">
      <section className="book">
        <img className="book__image" src={bookSelected.cover} alt='bookcover.svg' />
        <div className="book__info">
          <h2 className="book__title">{bookSelected.title}</h2>
          <h3 className="book__detail"> {bookSelected.author}</h3>
          <h3 className="book__detail"> {bookSelected.publisher}</h3>
          <RatingStar rating={bookSelected.average_stars} />
          <p className="book__description"> {bookSelected.summary} </p>
          <button>Add Review</button>
        </div>
      </section>

      <section className="reviews-container">
        <h2>Reviews</h2>
        <div className="review-list">
          {bookReviews.map((review) => (
            <ReviewItem review={review}
            />
          ))}

        </div>

      </section>

    </div>
  )
}

export default BookDetails;