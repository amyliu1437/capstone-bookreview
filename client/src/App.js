
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from './components/Header/Header';
import Homepage from './Pages/HomePage/HomePage';
import BookListPage from './Pages/BookListPage/BookListPage';
import BookDetailsPage from './components/BookDetails/BookDetails';
import MyReviewsPage from './Pages/MyReviewsPage/MyReviewsPage';
import AddNewReview from './components/AddNewReview/AddNewReview';


function App() {
  return (
    
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/' element={ <Homepage />} />
        <Route path='/books' element={ <BookListPage />} />
        <Route path='/books/:bookid' element={ <BookDetailsPage />} />
        <Route path='/users/:userid/reviews' element={ <MyReviewsPage />} />
        <Route path='/books/:bookid/addnew' element={ <AddNewReview />} />
        </Routes>
      

      </BrowserRouter>
  );
}

export default App;
