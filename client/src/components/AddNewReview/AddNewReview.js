import './AddNewReview.scss';
import axios from 'axios';
import { useContext } from 'react';
import { useParams, useNavigate, useLocation} from 'react-router-dom';
import Input from '../Input/Input';
import InputRating from '../InputRating/InputRating';
import { UserContext } from '../../App';

function AddNewReview() {
  const bookId = useParams();
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const selectedId = bookId.bookid;


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bookcover = queryParams.get('bookcover');

  
  const handlerReviewSubmit = async (event) => {
    event.preventDefault();
    
      const newReview={
        bookId: Number(selectedId),
        user_id: user.id,
        stars: Number(event.target.rating.value),
        title: event.target.title.value,
        content: event.target.content.value
      }

    try {
      
      const response = await axios.post(`http://localhost:8080/reviews`,newReview);
      console.log(response)
  
    } catch (error) {
      console.log("failed to add review: "+error)
    }

    navigate(`/books/${selectedId}`)
  };

  return (
    <div className="page-container">
      <section className="book">
        <img className="book__image" src={bookcover} alt='bookcover.svg' />
  
      </section>
      <section className="addon-section">
        <form className="review-input" onSubmit={handlerReviewSubmit}>
       
          <InputRating name="rating" label="Please GIve your Star"/>

          <Input type="text" name="title" label="Review Title: " />
          <Input type="textarea" name="content" label="Review Content: " />

          <p>You can input up to 2000 characters</p>
          <button type="submit">Submit</button>

        </form>

      </section>

    </div>
  )

}


export default AddNewReview;