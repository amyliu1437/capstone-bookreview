const router = require("express").Router();
const reviewerController = require('../controllers/reviewer-controller');


router
  .route("/:id")
  .get(reviewerController.getReviewsList)

router
  .route("/register")
  .post(reviewerController.register)


  router
  .route("/login")
  .post(reviewerController.login)







module.exports = router;