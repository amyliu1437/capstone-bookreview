import './EditReviewItem.scss';

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Input from '../Input/Input';
import InputRating from '../InputRating/InputRating';


function EditReviewItem() {

  const { reviewid } = useParams();

  //　Get book cover related to this review
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bookcover = queryParams.get('bookcover');
  const navigate = useNavigate();

  //Get previous review info 
  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/reviews/${reviewid}`);
        setReviewData(response.data);
      } catch (error) {
        console.log("Failed to fetch review data:", error);
      }
    };

    fetchReviewData();

  }, [reviewid]);

  const [starError, setStarError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");


  const handlerReviewUpdate = async (event) => {
    event.preventDefault();

    const reviewRating = event.target.rating.value;
    const reviewTitle = event.target.title.value;
    const reviewContent = event.target.content.value;

    //validation for form the review input
    if (!reviewRating) {
      setStarError("Please rating the book!");
      return false;
    }

    if (!reviewTitle) {

      setTitleError("Please input the review title")
      return false;
    }

    if (!reviewContent) {
      setContentError("Please input the review content")
      return false;
    }


    const updatedReview = {
      stars: Number(reviewRating),
      title: reviewTitle,
      content: reviewContent
    }

    try {

      const response = await axios.put(`http://localhost:8080/reviews/${reviewid}`, updatedReview);

    } catch (error) {
      console.log("failed to update review: " + error)
    }

    navigate(`/users/${reviewData.user_id}/reviews`)
  };



  return (
    <div className="edit-page">
      <div className="edit-review">
        <h1 className="edit-review__title">Edit Book Review </h1>
        <div className="edit-review__content" >
          <div className="edit-book-info">
            <img className="edit-book__image" src={bookcover} alt='bookcover.svg' />
          </div>
          {reviewData && (
            <section className="edit-review__form">

              <form className="edit-form" onSubmit={handlerReviewUpdate}>
                <h2 className="edit-form__title">Please Edit Your Review </h2>
                <InputRating
                  name="rating"
                  label="Rating This Book with Stars"
                  preloadValue={reviewData.stars}
                  status={starError}
                />

                <Input
                  type="text"
                  name="title"
                  label="Review Title:"
                  preloadValue={reviewData.title}
                  status={titleError}
                />

                <div className="edit-form__content">
                  <h3 htmlFor="content"> Review Content: </h3>
                  <textarea
                    type="textarea"
                    name="content"
                    className="edit-form__input"
                    defaultValue={reviewData.content}
                  />
                  <label className={contentError ? "edit-form__error" : "edit-form__hidden"}>{contentError} </label>
                  <p className className="edit-form__tip" >You can input up to 2000 characters</p>
                </div>
                <div className="edit-form__controller">
                  <button className="edit-form__button" type="submit">Submit</button>
                </div>
              </form>
            </section>
          )}
        </div>
      </div>

    </div>
  )
}


export default EditReviewItem;