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

4. **User Profiles**:
   - Create a personalized user profile to track reading history and favorite books.
   - Connect with other users, follow their reviews, and engage in discussions.

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

### Sitemap

- Home page
- Books listing page
- Book details page
- Register page
- Login page
- Book review submission page
- My Reviews

### Mockups

[Home page]

![image](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/b33c67a8-786a-4095-ba71-04b93bf03bab) 


[Books listing page]

![image](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/95ec9f0b-160a-4d9a-ad3d-f2a2ef74eb35)

[Book details page]

![image](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/e02e43b4-d46c-4b72-a1bc-7952c11311e0)


[Register page]

![image](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/9f62a63d-e4d5-4535-afb5-88337e29f7ae)



[Login page]


![image](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/abb88aa8-c46b-4f5d-8671-040bf0615f61)



[Book review submission page]

![image](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/671a6ec2-59e7-4c42-b0df-21cd83e718e6)


[My reviews ]


![image](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/03025c63-3766-4bb0-807a-13bd3de9869c)



[Search result page]


![image](https://github.com/amyliu1437/capstone-bookreview/assets/45413051/2f9c7884-376c-4939-8d9b-74c8d2d52e96)





### Data

- Users: user_id, username, email, password
- Books: book_id, title, author, genre, synopsis
- Reviews: review_id, user_id, book_id, rating, review_text

### Endpoints

- GET /books: Retrieve a list of books with optional filters.
- GET /books/:id: Retrieve detailed information about a specific book.
- POST /reviews: Submit a review for a book.
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
9. Explore additional features such as pagin and search options.

## Nice-to-haves

- Integration with external book APIs for expanded book listings.
- Allow user to search and upload books they want to review.
- Add the function that user can edit his profile item.
- Advanced recommendation algorithms based on user behavior and preferences.
- Integration with e-book platforms for seamless access to digital reading materials.
