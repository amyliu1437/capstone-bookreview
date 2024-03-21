CREATE DATABASE IF NOT EXISTS bookreview CHARACTER SET utf8 COLLATE utf8_general_ci;

use bookreview;

CREATE TABLE IF NOT EXISTS books  (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(128),
  author VARCHAR(128),
  author_website VARCHAR(256),
  genre VARCHAR(128),
  theme VARCHAR(512),
  educator_guide VARCHAR(512),
  purchase_link VARCHAR(512),
  cover VARCHAR(512),
  imprint VARCHAR(128),
  isbn VARCHAR(128),
  publisher VARCHAR(128),
  publish_year VARCHAR(16),
  summary TEXT,
  available int DEFAULT 1
);

CREATE TABLE IF NOT EXISTS reviewer (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(64), /* display name, can be any characters */
  email VARCHAR(64), /* email address */
  password VARCHAR(64), /* encrypted content */
  avaitar VARCHAR(128),
  regist_time DATE,
  token VARCHAR(128)
);

CREATE TABLE IF NOT EXISTS reviews (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  reviewer_id int NOT NULL,
  book_id int NOT NULL,
  review_time DATE,
  stars int DEFAULT 0,
  title VARCHAR(128),
  content TEXT
);

