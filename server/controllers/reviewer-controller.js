const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ## POST /auth/register
// - Creates a new user.
// - Expected body: { first_name, last_name,email, password }
const register= async (req, res) => {
  const {name, email,  password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("Please enter the required fields");
  }

  const hashedPassword = bcrypt.hashSync(password);

  // Create the new user
  const newUser = {
    name,
    email,
    password:hashedPassword
  };

  // Insert it into our database
  try {
    await knex("reviewer").insert(newUser);
    res.status(201).send("Registered successfully" );
  } catch (error) {
    console.error(error);
    res.status(400).send("Failed registration");
  }
};

// ## POST /auth/login
// -   Generates and responds a JWT for the user to use for future authorization.
// -   Expected body: { email, password }
// -   Response format: { token: "JWT_TOKEN_HERE" }
const login= async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).send("Please enter the required fields");
  }

  // Find the user
  const user = await knex("reviewer").where({ email: email }).first();
  if (!user) {
    return res.status(400).send("Invalid email");
  }

  // Validate the password
  const isPasswordCorrect = bcrypt.compareSync(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(400).send("Invalid password");
  }

  // Generate a token
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_KEY,
    { expiresIn: "24h" }
  );

  res.send({ token });
};




const getReviewsList = async (req, res) => {
  const reviewerId = req.params.id // Assuming reviewerId is passed as a route parameter

  try {
    // Fetch all reviews related to the reviewer
    const reviews = await knex("reviews")
      .select(
        "id",
        "book_id",
        "review_time",
        "stars",
        "title",
        "content"
      )
      .where("reviewer_id", reviewerId);

    if (!reviews || reviews.length === 0) {
      return res.status(404).json({ error: "No reviews found for this reviewer" });
    }

    res.status(200).json(reviews);
  } catch (err) {
    res.status(400).send(`Error retrieving reviews: ${err}`);
  }
};

module.exports = {
  register,
  login,
  getReviewsList,
  
};











