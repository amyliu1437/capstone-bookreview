import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './LatestComment.scss';

function LatestComment() {
  const [latestReview, setLatestReview] = useState(false);

  useEffect(() => {
    const getLatestReview = async () => {
      try {
        const response = await axios.get("http://localhost:8080/reviews/latestreview")
        setLatestReview(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    getLatestReview()
  }, []);


  return (
    <div className="section-container">
      <section className="latest-review">

        <div className="latest-review__left">
          <h3 className="latest-review__title">Latest Review</h3>
          <div className="review-items">
            <p className="review-items__title">{latestReview.review_title} </p>
            <div className="review-items__content"> {latestReview.review_content} </div>
          </div>
          <div className="latest-review__link">
            <Link className="latest-review__button" to={`/books/${latestReview.book_id}`}> Read More</Link>
          </div>
        </div>

        <div className="latest-review__right">
          <img className="latest-review__image" src={latestReview.book_cover} alt='bookcover.svg' />
        </div>

      </section>
    </div>
  )
}

export default LatestComment;