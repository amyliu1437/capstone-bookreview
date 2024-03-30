const router = require("express").Router();
const usersController = require('../controllers/users-controller');


router
  .route("/:id")
  .get(usersController.getSingleUser)

router
  .route("/:id/reviews")
  .get(usersController.getReviewsList)  

router
  .route("/register")
  .post(usersController.register)


  router
  .route("/login")
  .post(usersController.login)







module.exports = router;