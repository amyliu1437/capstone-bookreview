
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import Header from './components/Header/Header';
import Homepage from './Pages/HomePage/HomePage';
import BookListPage from './Pages/BookListPage/BookListPage';
import BookDetailsPage from './components/BookDetails/BookDetails';
import MyReviewsPage from './Pages/MyReviewsPage/MyReviewsPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import LogoutPage from './Pages/LoginPage/LogoutPage';
import SignupPage from './Pages/SignupPage/SignupPage';
import AddNewReview from './components/AddNewReview/AddNewReview';
import EditReviewItem from './components/EditReviewItem/EditReviewItem';

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);

  return (

    <BrowserRouter>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/logout' element={<LogoutPage />} />
          <Route path='/register' element={<SignupPage />} />
          <Route path='/books' element={<BookListPage />} />
          <Route path='/books/:bookid' element={<BookDetailsPage />} />
          <Route path='/users/:userid/reviews' element={<MyReviewsPage />} />
          <Route path='/books/:bookid/addnew' element={<AddNewReview />} />
          <Route path='/reviews/:reviewid/edit' element={<EditReviewItem />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
