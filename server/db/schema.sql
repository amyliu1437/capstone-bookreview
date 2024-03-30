/* To create database and tables, the proper permission must be granted in advance */
CREATE DATABASE IF NOT EXISTS bookreview CHARACTER SET utf8 COLLATE utf8_general_ci;

use bookreview;

CREATE TABLE IF NOT EXISTS books  (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(128),
  author VARCHAR(128),
  cover VARCHAR(512),
  publisher VARCHAR(128),
  publish_year VARCHAR(16),
  summary TEXT
);

CREATE TABLE IF NOT EXISTS users (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(64), /* display name, can be any characters */
  email VARCHAR(64), /* email address */
  password VARCHAR(64), /* encrypted content */
  avaitar VARCHAR(128),
  regist_time DATETIME,
  token VARCHAR(128)
);

CREATE TABLE IF NOT EXISTS reviews (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  book_id int NOT NULL,
  review_time DATETIME,
  stars int DEFAULT 0,
  title VARCHAR(128),
  content TEXT
);

