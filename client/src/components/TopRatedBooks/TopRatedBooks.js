import './TopRatedBooks.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import BookCard from '../BookCard/BookCard';


function TopRatedBooks() {

  const [topRatedBooks, setTopRatedBooks] = useState([]);


  useEffect(() => {

    const getTopRatedBooks = async () => {

      try {
        const response = await axios.get("http://localhost:8080/books/topbooks")

        console.log(response)
        setTopRatedBooks(response.data);
      } catch (error) {
        console.log(error)
      }

    }
    getTopRatedBooks();
  }, []);


  return (
    <div className="top-containner">
      <section className="top-booklist">
        <h1 className="top-booklist__title">Top Rated books</h1>
        <div className="top-booklist__list">
        {topRatedBooks.map((book) => (
                    <BookCard
                        title={book.title}
                        key={book.id}
                        cover={book.cover}
                        author={book.author}
                        rates={book.average_stars}
                    />
        ))}

        </div>

      </section>
    </div>
  )
}

export default TopRatedBooks;