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
        <h1 className="hero-banner__title">Latest Review</h1>
        <div className="hero-banner__content">

          <img className="review__image" src={latestReview.book_cover} alt='bookcover.svg' />

          <div className="review">
            <p className="review__title">{latestReview.review_title} </p>
            <div className="review__content"> {latestReview.review_content} </div>
          </div>


        </div>



      </section>
    </div>
  )
}

export default LatestComment;