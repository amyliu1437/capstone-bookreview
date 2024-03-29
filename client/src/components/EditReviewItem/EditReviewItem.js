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
    <div className="upload-page">
      <div className="upload-review">
        <h1 className="upload-review__title">Edit Book Review </h1>
        <div className="upload-review__content" >
          <section className="book-info">
            <h2 className="book-info__label">Taget Book</h2>
            <img className="book__image" src={bookcover} alt='bookcover.svg' />
          </section>
          {reviewData && (
            <section className="upload-review__form">

              <form className="upload-form" onSubmit={handlerReviewUpdate}>

                <InputRating
                  name="rating"
                  label="Please GIve your Star"
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

                <div className="upload-form__content">
                  <label htmlFor="content" className="upload-form__label"> Review Content: </label>
                  <textarea
                    type="textarea"
                    name="content"
                    className="upload-form__input"
                    defaultValue={reviewData.content}
                  />
                  <label className={contentError ? "upload-form__error" : "upload-form__hidden"}>{contentError} </label>
                  <p className className="upload-form__tip" >You can input up to 2000 characters</p>
                </div>
                <div className="upload-form__controller">
                  <button className="upload-form__button" type="submit">Submit</button>
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