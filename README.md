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

![Home_Page](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/a6fdcb39-5e2b-49fe-b5af-5bebfedcb741)

[Books listing page]

![Book_List_Page](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/7737af57-6bda-46b6-8afc-3be71f848458)


[Book details page]

![Book_Detail_Page](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/2b6e5898-59dc-4208-944c-aad19363faa5)


[Register page]

![SIgnup_page](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/373e04c8-9e69-4906-9c05-798dfc432924)


[Login page]


![SignIn_page](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/e77cb223-8f83-4a6f-8fdb-bf3265b3de66)



[Book review submission page]

![Add_New_Review_Page](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/a711bd2b-1272-4116-bd44-09ef902fb607)



[My reviews ]


![My_Reviews_Page](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/76ba2730-7bec-40b1-b80d-3139f7f51b69)



[Edit review page]

![Edit_Review_page](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/a8be9261-6135-43ce-ab39-e4bf2db1c659)







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
