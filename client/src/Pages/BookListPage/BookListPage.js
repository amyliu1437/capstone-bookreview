import "./BookListPage.scss";
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import searchIcon from '../../assets/Icons/search.svg';

function BookListPage(){

  const [page, setPage] = useState(1);
  
  const [bookList, setBookList] = useState([]);
  const pageSize = 20;

  useEffect(() => {
    const getBookList = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/books?page=${page}&pageSize=${pageSize}`);
        // The paginated data is returned in a 'data' property
        setBookList(response.data.data); 
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    
    getBookList();
  }, [page, pageSize]);

  // Function to handle pagination navigation
  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1)); // Ensure page doesn't go below 1
  };

  return (
    <div className="booklist-container">
      <section className="booklist">
        <h1 className="booklist__title">BookList</h1>
        
        <div className="booklist__list">
          {bookList.map((book) => (
            <BookCard book={book} key={book.id}/>
          ))}
        </div>

         {/* Pagination controls */}
          <div className="pagination">
          <button className="pagination__button" onClick={handlePrevPage}>Previous</button>
          <span className="pagination__page">Page {page}</span>
          <button className="pagination__button" onClick={handleNextPage}>Next Page</button>
        </div>

      </section>
    </div>
  );
}

export default BookListPage;