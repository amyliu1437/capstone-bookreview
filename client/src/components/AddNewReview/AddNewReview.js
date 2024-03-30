import './AddNewReview.scss';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Input from '../Input/Input';
import InputRating from '../InputRating/InputRating';
import { UserContext } from '../../App';

function AddNewReview() {

  const navigate = useNavigate();

  //Get User identification
  const { user, setUser } = useContext(UserContext);

  //Get book to be reviewed
  const bookId = useParams();
  const selectedId = bookId.bookid;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bookcover = queryParams.get('bookcover');

  const [starError, setStarError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError]=useState("");

  const handlerReviewSubmit = async (event) => {
    event.preventDefault();

    const reviewRating = event.target.rating.value;
    const reviewTitle = event.target.title.value;
    const reviewContent = event.target.content.value;
    
     //validation for form the review input
    if (!reviewRating) {
      setStarError("Please rating the book!"); 
      return false;
    }
    
    if(!reviewTitle){
      
      setTitleError("Please input the review title")
      return false;
    }

    if(!reviewContent){
      setContentError("Please input the review title")
      return false;
    }

    const newReview = {
      bookId: Number(selectedId),
      user_id: user.id,
      stars: Number(reviewRating),
      title: reviewTitle,
      content: reviewContent
    }

    try {
      const response = await axios.post(`http://localhost:8080/reviews`, newReview);
      console.log(response)

    } catch (error) {
      console.log("failed to add review: " + error)
    }
    navigate(`/books/${selectedId}`)
  };

  return (
    <div className="add-page">
      <div className="add-review">
        <h1 className="add-review__title">Add New Book Review </h1>
        <div className="add-review__content" >
          <section className="book-info">
            <img className="book-info__image" src={bookcover} alt='bookcover.svg' />
          </section>
          <section className="add-review__form">
            <form className="add-form" onSubmit={handlerReviewSubmit}>

              <h2 className="add-form__title">Please Input Your Review </h2>
              <InputRating name="rating" label="Rating This Book with Stars" status={starError} />
              <Input type="text" name="title" label="Review Title:" status={titleError} />
              <div className="add-form__content">
                <h3 htmlFor="content">Review Content: </h3>
                <textarea type="textarea" name="content" className="add-form__input" />
                <label className={contentError?"add-form__error":"add-form__hidden"}> {contentError} </label>            
                <p className className="add-form__tip" >You can input up to 2000 characters</p>
              </div>

              <div className="add-form__controller">
                <button className="add-form__button" type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  )

}


export default AddNewReview;