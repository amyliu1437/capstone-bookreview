const router = require("express").Router();
const booksController = require('../controllers/books-controller');


router
  .route('/')
  .get(booksController.index);


router
  .route('/topbooks')
  .get(booksController.topBooks);

router
  .route("/:id")
  .get(booksController.findOneBook);


  router
  .route("/:id/reviews")
  .get(booksController.reviewsOfOneBook);

  router
  .route('/search')
  .get(booksController.searchBooks);

  
module.exports = router;