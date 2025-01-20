# Project Description

Build a system to manage books, authors, and member borrowing.

## Features:
- Add, update, and delete books and authors.
- Register members and allow them to borrow books.
- Track borrowed books and return deadlines.
- View overdue books for a specific member.

## Database Requirements:
### Tables:
1. `books`: Store book details (e.g., title, author_id, genre, availability).
2. `authors`: Store author details (e.g., name, bio).
3. `members`: Store member details (e.g., name, contact info).
4. `borrow_history`: Record borrowed books, return deadlines, and return statuses.

### Sample Queries:
1. Fetch all books by a specific author.
2. Get overdue books for a specific member.
3. Calculate the total number of books borrowed by genre.

## Tech Stack:
- Backend: Node.js (Express), Flask, or Django.

## Bonus Points:
- Add a search feature to find books by title, author, or genre.

# SETUP INSTRUCTIONS:
1. Create Database in MySQL named: `"trueigtech"`.

2. Create and configure `.env` file as per your requirements.

3. Go to the associated folder structure of the project and type in the command line: `nodemon start`  
   This will create the required tables in the MySQL database.

4. Use the SQL file named `"ARVIND TRUEIGTECH SQL SCRIPT"` for inserting dummy data into MySQL.

5. DB and application are good to go!

6. Refer to Postman for testing APIs. Use the collection named `"Trueigtech.postman_collection"` and import it into Postman.

---

Now the application is good to go... Use Postman for testing!
PDF LINK : https://docs.google.com/document/d/16kCqOK2jih3bvRN9hOfNoAJ011t6CsSOUymXX7zIn9M/edit?usp=sharing
