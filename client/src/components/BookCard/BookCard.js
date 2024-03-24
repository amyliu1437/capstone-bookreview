import './BookCard.scss';
import RatingStar from '../RatingStar/RatingStar';
import { useNavigate } from "react-router-dom";

function BookCard ({book}){
  const ratesToDisplay = parseFloat(book.average_stars).toFixed(1)
  const navigate = useNavigate();

  const getBook = (msg) => {
    const newurl = "/books/"+book.id;
    navigate(newurl);
  };
  return(
    <div className="bookcard">
            <img className="bookcard__image" src={book.cover} alt='bookcover.svg' onClick={getBook} />
            <div className="bookcard__info">
              <p className="bookcard__title">{book.title} </p>
              <div className="bookcard__author"> {book.author} </div>
              <div className="bookcard__rating">
              <RatingStar  rating={book.average_stars}/>
              <span> {ratesToDisplay} </span>
              </div>
            </div>
            
    </div>
  )
}

export default BookCard;