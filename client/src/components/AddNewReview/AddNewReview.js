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
    <div className="upload-page">
      <div className="upload-review">
        <h1 className="upload-review__title">Add New Book Review </h1>
        <div className="upload-review__content" >
          <section className="book-info">
            <img className="book-info__image" src={bookcover} alt='bookcover.svg' />
          </section>
          <section className="upload-review__form">
            <form className="upload-form" onSubmit={handlerReviewSubmit}>

              <h2 className="upload-form__title">Please Input your Review </h2>
              <InputRating name="rating" label="Rating Star" status={starError} />
              <Input type="text" name="title" label="Review Title:" status={titleError} />
              <div className="upload-form__content">
                <label htmlFor="content" className="upload-form__label"> Review Content: </label>
                <textarea type="textarea" name="content" className="upload-form__input" />
                <label className={contentError?"upload-form__error":"upload-form__hidden"}> {contentError} </label>            
                <p className className="upload-form__tip" >You can input up to 2000 characters</p>
              </div>

              <div className="upload-form__controller">
                <button className="upload-form__button" type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  )

}


export default AddNewReview;