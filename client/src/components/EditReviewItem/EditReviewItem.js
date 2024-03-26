import './EditReviewItem.scss';

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate,useLocation } from 'react-router-dom';
import Input from '../Input/Input';
import InputRating from '../InputRating/InputRating';


function EditReviewItem() {

  const {reviewid} = useParams();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bookcover = queryParams.get('bookcover');
  const navigate=useNavigate();


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

  console.log("Review data:", reviewData);

 
 

  const handlerReviewUpdate = async (event) => {
    event.preventDefault();
    
      const updatedReview={
        stars: Number(event.target.rating.value),
        title: event.target.title.value,
        content: event.target.content.value
      }

    try {
      
      const response = await axios.put(`http://localhost:8080/reviews/${reviewid}`,updatedReview);
  
    } catch (error) {
      console.log("failed to update review: "+error)
    }

    navigate(`/users/${reviewData.user_id}/reviews`)
  };

  

  return(
     <div className="page-container">
      <section className="book">
        <img className="book__image" src={bookcover} alt='bookcover.svg' />
      </section>
       {reviewData && (
      <section className="addon-section">

        <form className="review-input" onSubmit={handlerReviewUpdate}>
       
          <InputRating name="rating" label="Please GIve your Star" preloadValue={reviewData.stars}/>

          <Input type="text" name="title" label="Review Title:" preloadValue={reviewData.title} />
          <Input type="textarea" name="content" label="Review Content:"  preloadValue={reviewData.content}/>

          <p>You can input up to 2000 characters</p>
          <button type="submit">Edit</button>

        </form>
      <h1>test</h1>
      </section>
       )}

    </div>
  )
}
 

export default EditReviewItem;