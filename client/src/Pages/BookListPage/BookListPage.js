import "./BookListPage.scss";
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import searchIcon from '../../assets/icons/search.svg';

function BookListPage(){

  const [query, setQuery] = useState(null);
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    const getBookList = async () => {
      try {
        const response = await axios.get("http://localhost:8080/books")
        setBookList(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    getBookList();
  }, []);

  return(
    <div className="booklist-container">
      <section className="booklist">
        <h1>BookList</h1>
        <div>
        <input         
        type="text" 
        placeholder="Enter author or title" 
        value={query}
        onChange={(e) => setQuery(e.target.value)} />

        <Link to='/books/${query}'>
        <img src={searchIcon} alt={searchIcon.svg} />
        </Link> 
        
        </div>
        <div className="bookist-list">
        {bookList.map((book) => (
                    <BookCard book={book}
                    />
        ))}
        </div>
      </section>
    </div>
  )
}

export default BookListPage;