import './BookCard.scss';
import RatingStar from '../RatingStar/RatingStar';
import { useNavigate } from "react-router-dom";

function BookCard({ book }) {
  const ratesToDisplay = parseFloat(book.average_stars).toFixed(1)
  const navigate = useNavigate();

  const getBook = (msg) => {
    const newurl = "/books/" + book.id;
    navigate(newurl);
  };
  return (
    <div className="bookcard">
      <div className="bookcard__image">
        <img className="bookcard__cover" src={book.cover} alt='bookcover.svg' onClick={getBook} />
      </div>
      <div className="bookcard__info">
        <p className="bookcard__title">{book.title} </p>
        <div className="bookcard__author">
          By
          <span className="bookcard__author--gray"> {book.author} </span>
        </div>
        <div className="bookcard__rating">
          <RatingStar rating={book.average_stars} />
          <span className="bookcard__rating--bold"> {ratesToDisplay} </span>
        </div>
      </div>

    </div>
  )
}

export default BookCard;