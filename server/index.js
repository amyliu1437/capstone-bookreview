const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5050;
const cors = require('cors');
const booksRoutes = require('./routes/books');
const reviewsRoutes = require('./routes/reviews');
const usersRoutes = require('./routes/users');

app.use(express.json());

app.use(cors());


// all inventories routes
app.use('/books', booksRoutes);
app.use('/reviews', reviewsRoutes);
app.use('/users', usersRoutes);


app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});