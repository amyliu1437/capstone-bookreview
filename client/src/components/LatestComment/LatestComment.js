import { useState, useEffect } from 'react';
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
    <div className="banner-containner">
      <section className="hero-banner">

        <div className="hero-banner__left">
          <h3 className="hero-banner__title">Latest Review</h3>
          <div className="review-items">
            <p className="review-items__title">{latestReview.review_title} </p>
            <div className="review-items__content"> {latestReview.review_content} </div>
          </div>
          <div className="hero-banner__link">
            <button className="hero-banner__button"> Read More</button>
          </div>
        </div>

        <div className="hero-banner__right">
          <img className="hero-banner__image" src={latestReview.book_cover} alt='bookcover.svg' />
        </div>

      </section>
    </div>
  )
}

export default LatestComment;