const router = require("express").Router();
const reviewsController = require('../controllers/reviews-controller');


router
    .route('/')
    .post(reviewsController.post);

router
    .route("/:id")
    .get(reviewsController.getReviewById)
    .put(reviewsController.update)
    .delete(reviewsController.remove);

module.exports = router;