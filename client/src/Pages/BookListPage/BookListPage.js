import "./BookListPage.scss";
import axios from 'axios';
import { useState, useEffect } from 'react';
import BookCard from '../../components/BookCard/BookCard';

function BookListPage(){

  const [bookList, setBookList] = useState([]);


  useEffect(() => {

    const getBookList = async () => {

      try {
        const response = await axios.get("http://localhost:8080/books")

        console.log(response)
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
        <div className="bookist-list">
        {bookList.map((book) => (
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

export default BookListPage;