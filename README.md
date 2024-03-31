# Project Title

BookReview Hub


## Overview

BookReview Hub is a platform designed to address the challenges faced by book lovers in finding reliable sources for book recommendations and reviews. The platform provides users with a centralized space to share their thoughts and opinions on books they've read, connect with like-minded individuals, and discover new books tailored to their interests.

## Problem

In today's digital age, book lovers often struggle to find reliable sources for book recommendations and reviews. Existing platforms lack a focus on detailed user reviews and fail to provide personalized recommendations based on individual tastes and preferences. As a result, readers are left to navigate through an overwhelming sea of options, making it challenging to discover new books that resonate with their interests.

## User Profile

Readers:
- Seeking a platform to share their thoughts and opinions on books they've read.
- Interested in connecting with like-minded individuals who share their passion for literature.
- Looking for a centralized platform to keep track of their reviews and reading history.

## Features

1. **Find Books**:
   - View detailed information about each book, including synopsis, author details, and reader ratings.

2. **Rate and Review**:
   - Rate books on a scale of 1 to 5 stars.
   - Write and publish detailed reviews sharing thoughts, insights, and recommendations.

3. **User Reviews**:
   - View a personalized list of reviews submitted by the user.
   - Easily access and revisit reviews for reference and sharing.
   - Have chance to update or delete reviews anytime.

## How to Install
###  Step1 : Create a project folder on your local computer.  
###  Step2 : Initial  github and clone the repo to local.

  ` git init`
     
   `git clone  git@github.com:amyliu1437/capstone-bookreview.git`
   
###  Step3 :  Setup the database.
   Run  **schema.sql** first and then **data.sql** in mySQL to setup database.

### Step 4 : Setup .env file like this:  

`JWT_KEY= 126b1e0971de57e4c6cd9dc64fcf54906c721679aa5f0274819b490c1cf383f2`  
`PORT=8080`  
`DB_HOST=127.0.0.1 `  
`DB_NAME=bookreview  `  
`DB_USER=yourusername`  
`DB_PASSWORD= yourpassword  `  
`DB_CHARSET=utf8mb4`  

### Step 5 : On seversite, run the command::
  `npm i`  
  `node index.js`  

### Step 6 : On Client, run the command:
  `npm i`  
  `npm start`  

### You can use test account to login if you do not want to register an account.
  **Username**: testuser@bookreview.com  
 **password** : 123456

## Implementation

### Tech Stack

- React
- TypeScript
- MySQL
- Express
- Client libraries: react, react-router, axios
- Server libraries: knex, express

### APIs

No external APIs will be used for the first sprint.
Basic book information comes from NewYork Times book API--Top popular book list in March.

### Sitemap

- Home page
- Books listing page
- Book details page
- Register page
- Login page
- Book review submission page
- Book review edit page
- My Reviews

### Mockups

[Home page]

![Home_page](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/a8d832be-0d0e-4893-80d9-c3145d171a18)


[Books listing page]

![Book_List_page](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/d6134a94-85fa-4e9b-af43-471258c01ed8)



[Book details page]

![Book_Details](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/12ef7e4b-8ee0-41bc-8627-9285a647f43c)


[Register page]

![SignUP_page](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/8c5c57bb-a6dc-4c2f-aa44-8ec7e8b60990)



[Login page]


![Login_page](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/828cb48a-2e4d-4da2-8927-8c80a69976ca)




[Book review submission page]

![Add_Review](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/7d34f844-d920-401e-95cb-b6c15a674b96)




[My reviews ]


![My_Review](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/01d5967f-85a8-42d4-93f3-2dc8118bbe39)




[Edit review page]


![Edit_review](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/ab8f1192-0b80-48d1-ae5e-60eeee8fa7cf)



### Data

- Users: user_id, username, email, password,token
- Books: book_id, title, author, cover, publisher, summary
- Reviews: review_id, user_id, book_id, stars, review_time, title, content

### Endpoints

- GET /books: Retrieve a list of books with optional filters.
- GET /books/:bookid: Retrieve detailed information about a specific book.
- GET /books/topbooks: Retrieve top 8 books with highest rating stars.
- GET /books/:bookid/reviews: Retrieve all the reviews to a singal book.
- POST /reviews: Submit a review for a book.
- GET /reviews/latestreview: Retrieve the latest review together with book information on the website.
- GET /reviews/:reviewid: Retrieve a single review item for editing input.
- PUT /reviews/:reviewid: Edit one exist review.
- DELETE /reviews/:reviewid: Delete one review item by id.
- GET /users/:id: Retrieve a single user information.
- GET /users/:id/reviews: Retrieve a list of reviews submitted by the user.
- POST /users/register`: Register a new user.
- POST /users/login`: Log in an existing user

### Auth

JWT authentication will be implemented.
JWT tokens will be stored in localStorage.

## Roadmap

1. Create client and server projects with basic routing and structure.
2. Implement book listing and details pages.
3. Integrate JWT authentication for secure user sessions.
4. Add the ability for users to rate and review books.
5. Develop a user profile page to display the user's submitted reviews.
6. Deploy client and server projects for production use.
7. Conduct testing and bug fixes to ensure a seamless user experience.
8. Develop user registration and login functionality.
9. Explore additional features such as pagination options.

## Nice-to-haves

- Introduce the search function for user to search books in the list.
- Integration with external book APIs for expanded book listings.
- Allow user to search and upload books they want to review.
- Add the function that user can edit his profile item.
- Advanced recommendation algorithms based on user behavior and preferences.
- Integration with e-book platforms for seamless access to digital reading materials.
