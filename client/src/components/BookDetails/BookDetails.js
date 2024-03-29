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
        console.log(response.data);
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
      <div className="detail-page">
        {/* <h2 className="detail-page__title" >Book Detail</h2> */}
        <section className="single-book">
          <div className="single-book__left" >
            <img className="book__image" src={bookSelected.cover} alt='bookcover.svg' />
          </div>
          <div className="single-book__right">
            <div className="single-book__middle">
              <h2 className="book__title">{bookSelected.title}</h2>
              <div className="book__detail">
                <h3 className="detail__item">
                  By
                  <span className="detail__item detail__item--black" > {bookSelected.author}</span>
                </h3>
                <h3 className="detail__item">
                  Publisher
                  <span className="detail__item detail__item--black" >{bookSelected.publisher}</span>
                </h3>
              </div>
            </div>

            <div className="single-book__buttom">
              <div className="rating">
                <RatingStar rating={bookSelected.average_stars} />
                <p className="rating__info">
                  <span className="rating__number" > {bookReviews.length} </span>
                  ratings
                </p>
              </div>
              <p className="book__text"> {bookSelected.summary} </p>

              <Link className="single-book__button"
                to={`/books/${selectedId}/addnew?bookcover=${bookSelected.cover}`}>
                Add Review
              </Link>
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <h2 className="reviews-section__title">Reviews to This Book</h2>
          <div className="reviews-section__list">
            {bookReviews.map((review) => (
              <ReviewItem key={review.id} review={review}
              />
            ))}

          </div>

        </section>

      </div>

    </div>
  )
}

export default BookDetails;