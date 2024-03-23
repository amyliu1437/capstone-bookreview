import './BookCard.scss';
import RatingStar from '../RatingStar/RatingStar';

function BookCard ({title,cover,author,rates}){


  const ratesToDisplay = parseFloat(rates).toFixed(1)

  
  return(
    <div className="bookcard">

            <img className="bookcard__image" src={cover} alt='bookcover.svg' />

            <div className="bookcard__info">
              <p className="bookcard__title">{title} </p>
              <div className="bookcard__author"> {author} </div>
              <div className="bookcard__rating">
              <RatingStar  rating={rates}/>
              <span> {ratesToDisplay} </span>
              </div>
            </div>
            
    </div>
  )
}

export default BookCard;