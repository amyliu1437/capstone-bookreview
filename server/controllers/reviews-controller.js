const knex = require("knex")(require("../knexfile"));

//Get a single review for test
const getReviewById = async (req, res) => {
  const reviewId  = req.params.id

  try {
    // Fetch the review by its ID
    const review = await knex("reviews")
      .select(
        "id",
        "book_id",
        "user_id",
        "review_time",
        "stars",
        "title",
        "content"
      )
      .where("id", reviewId)
      .first();

    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }

    res.status(200).json(review);
  } catch (err) {
    res.status(400).send(`Error retrieving review: ${err}`);
  }
};



// Post a review to the review list
const post = async (req, res) => {
  const { bookId, user_id, stars, title, content } = req.body; // Extract review data including bookId from request body

  try {
    // Insert the review into the database
    const newReview = await knex("reviews").insert({
      book_id: bookId,
      user_id: user_id,
      stars: stars,
      title: title,
      content: content
    });

    res.status(201).json({ message: "Review added successfully", newReview });
  } catch (err) {
    res.status(400).send(`Error posting review: ${err}`);
  }
};


const update = async (req, res) => {
  const reviewId = req.params.id; // Assuming reviewId is passed as a route parameter
  const { stars, title, content } = req.body; // Assuming these fields are sent in the request body

  try {
    // Check if the review exists
    const existingReview = await knex("reviews")
      .select()
      .where("id", reviewId)
      .first();

    if (!existingReview) {
      return res.status(404).json({ error: "Review not found" });
    }

    // Update the review in the database
    await knex("reviews")
      .where("id", reviewId)
      .update({
        // reviewer_id: reviewer_id,
        stars: stars,
        title: title,
        content: content
      });

    res.status(200).json({ message: "Review updated successfully" });
  } catch (err) {
    res.status(400).send(`Error editing review: ${err}`);
  }
};


// Remove a review from the list
const remove = async (req, res) => {
  const reviewId = req.params.id; 
  try {
    // Check if the review exists
    const existingReview = await knex("reviews")
      .select()
      .where("id", reviewId)
      .first();

    if (!existingReview) {
      return res.status(404).json({ error: "Review not found" });
    }

    // Delete the review from the database
    await knex("reviews")
      .where("id", reviewId)
      .del();

    res.status(200).json({ message: "Review removed successfully" });
  } catch (err) {
    res.status(400).send(`Error removing review: ${err}`);
  }
};

// Get the latest review and related book info
const latestReview = async (req, res) => {
  try {
    
    const latestReviewBookInfo = await knex("reviews")
      .select(
        "reviews.id as review_id",
        "reviews.stars",
        "reviews.title as review_title",
        "reviews.content as review_content",
        "books.cover as book_cover"
      )
      .join("books", "reviews.book_id", "books.id")
      .orderBy("reviews.review_time", "desc")
      .first(); // Fetch only the latest review

      console.log(latestReviewBookInfo);
    if (!latestReviewBookInfo) {
      return res.status(404).json({ error: "No reviews found" });
    }

    res.status(200).json(latestReviewBookInfo);
  } catch (err) {
    res.status(400).send(`Error retrieving latest review with book info: ${err}`);
  }
};

module.exports = {
  getReviewById,
  post,
  update,
  remove,
  latestReview,
};