const knex = require("knex")(require("../knexfile"));

// Get all books with average star values
const index = async (req, res) => {
  try {
    const data = await knex("books")
      .select(
        "books.id",
        "books.title",
        "books.author",
        "books.cover",
        knex.raw("AVG(reviews.stars) AS average_stars")
      )
      .join("reviews", "books.id", "reviews.book_id")
      .groupBy("books.id", "books.title", "books.author", "books.cover");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving books: ${err}`);
  }
};

// Get top 8 books with highest star value
const topBooks = async (req, res) => {
  try {
    const books = await knex("books")
      .select(
        "books.id",
        "books.title",
        "books.cover",
        "books.author",
        knex.raw("AVG(reviews.stars) AS average_stars")
      )
      .join("reviews", "books.id", "reviews.book_id")
      .groupBy("books.id", "books.title", "books.cover","books.author")
      .orderBy("average_stars", "desc")
      .limit(8);
   
    res.status(200).json(books);
  } catch (err) {
    res.status(400).send(`Error retrieving top books: ${err}`);
  }
};


// Get a single book information
const findOneBook = async (req, res) => {
  const bookId = req.params.id;

 

  try {
    // Fetch the book and its average star rating
    const book = await knex("books")
      .select(
        "books.id",
        "books.cover",
        "books.title",
        "books.author",
        "books.summary",
        knex.raw("AVG(reviews.stars) AS average_stars")
      )
      .leftJoin("reviews", "books.id", "reviews.book_id")
      .where("books.id", bookId)
      .groupBy("books.id", "books.cover", "books.title", "books.author", "books.summary")
      .first();

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json(book);
  } catch (err) {
    res.status(400).send(`Error retrieving book with average star rating: ${err}`);
  }
};

// Get all reviews for a single book
const reviewsOfOneBook = async (req, res) => {
  const bookId  = req.params.id;
  console.log(bookId)

  try {
    // Fetch all reviews related to the book
    const reviews = await knex("reviews")
      .select(
        "reviews.id",
        "reviews.review_time",
        "reviews.stars",
        "reviews.title",
        "reviews.content",
        "users.name as user_name" // Include user name from users table
      )
      .join("users", "reviews.user_id", "users.id")
      .where("reviews.book_id", bookId);

    if (!reviews || reviews.length === 0) {
      return res.status(404).json({ error: "No reviews found for this book" });
    }

    res.status(200).json(reviews);
  } catch (err) {
    res.status(400).send(`Error retrieving reviews: ${err}`);
  }
};




module.exports = {
  index,
  topBooks,
  findOneBook,
  reviewsOfOneBook,
};