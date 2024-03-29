import './HeroBanner.scss';

function HeroBanner() {
  return (
    <div className="banner-container">
      <div className="hero-banner">
        <h1 className="hero-banner__title">Book Review</h1>
        <div className="hero-banner__content">
          <p className="hero-banner__text"> At BookReview, we believe in the transformative power of books and the importance of community-driven recommendations. </p>
          <p className="hero-banner__text">Join us in exploring the world of literature, connecting with fellow book lovers, and uncovering your next favorite read.</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;