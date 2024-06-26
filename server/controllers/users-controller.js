const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ## POST /auth/register
// - Creates a new user.
const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("Please enter the required fields");
  }

  const hashedPassword = bcrypt.hashSync(password);

  // Create the new user
  const newUser = {
    name,
    email,
    password: hashedPassword,
    regist_time: new Date().toISOString().slice(0, 19).replace('T', ' ')
  };

  // Insert it into our database
  try {
    await knex("users").insert(newUser);
    res.status(201).send("Registered successfully");
  } catch (error) {
    console.error(error);
    res.status(400).send("Failed registration");
  }
};

// ## POST /auth/login

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).send("Please enter the required fields");
  }

  // Find the user
  const user = await knex("users").where({ email: email }).first();
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

  res.send({ 'token': token, 'name': user.name, 'id': user.id });
};

const getSingleUser = async (req, res) => {

  const userId = req.params.id

  try {
    const user = await knex('users')
      .select(
        "users.id",
        "users.name"
      )
      .where("users.id", userId)
      .first();

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};




const getReviewsList = async (req, res) => {
  const userId = req.params.id

  try {
    // Fetch all reviews related to the user
    const reviews = await knex("reviews")
      .select(
        "reviews.id",
        "reviews.book_id",
        "reviews.review_time",
        "reviews.stars",
        "reviews.title as rtitle",
        "reviews.content",
        "books.title",
        "books.cover",
        "books.author",
        "books.publisher"
      )
      .join("books", "reviews.book_id", "books.id")
      .orderBy("reviews.review_time", "desc")
      .where("reviews.user_id", userId);

    if (!reviews || reviews.length === 0) {
      return res.status(404).json({ error: "No reviews found for this user" });
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
  getSingleUser,
};











