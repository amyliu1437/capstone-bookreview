import './AddNewReview.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import RatingStar from '../RatingStar/RatingStar';

function AddNewReview() {
  const bookId = useParams();
  console.log(bookId)
  const selectedId = bookId.bookid;
  console.log(selectedId)

  const [bookSelected, setBookSelected] = useState({});

  useEffect(() => {
    const getBook = async () => {

      try {
        const response = await axios.get(`http://localhost:8080/books/${selectedId}`);

        setBookSelected(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    getBook();

  }, [selectedId]);

  return (
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
      <section className="addon-section">
        <form>
          <label>Review Score: </label>

          <label>Review Title:  </label>
          <input></input>

          <label>Review Content:  </label>
          <div> 
          <textarea></textarea>
          <p>You can input up to 2000 characters</p>
          </div>
          <button>Submit</button>

        </form>


      </section>

    </div>
  )

}

export default AddNewReview;