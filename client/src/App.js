
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from './components/Header/Header';
import Homepage from './Pages/HomePage/HomePage';
import BookListPage from './Pages/BookListPage/BookListPage';
import BookDetailsPage from './Pages/BookDetailsPage/BookDetailsPage';


function App() {
  return (
    
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/' element={ <Homepage />} />
        <Route path='/books' element={ <BookListPage />} />
        <Route path='/books/:id' element={ <BookDetailsPage />} />

        </Routes>
      

      </BrowserRouter>
  );
}

export default App;
