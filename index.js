import express from "express";
import dotenv from "dotenv";
import bookRouter from "./Route/book.route.js";
import authorRoute from "./route/author.route.js"
import cors from "cors";
import DBConnect from "./utils/db.js";
import setupAssociations from "./model/association.js"
import Author from "./model/author.model.js";
import Book from "./model/book.model.js";
import BorrowHistory from "./model/borrow_history.js";
import Member from "./model/member.model.js";
import memberRoute from "./route/member.route.js";
import BorrowHistoryRouter from "./route/borrow_history.route.js";


const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const models = { Author,Book ,BorrowHistory ,Member };
setupAssociations(models);


app.use("/api/v1/book",bookRouter);
app.use("/api/v1/author",authorRoute);
app.use("/api/v1/member",memberRoute);
app.use("/api/v1/borrowHistory",BorrowHistoryRouter);

// Middleware
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use("/book", bookRoute);
// app.use("/user", userRoute);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`app listening on port ${PORT}`);
  DBConnect();
});
