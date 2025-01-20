import express from "express";
import { createBorrowHistory, getOverDueBooks } from "../controller/borrow_book.controller.js";


const router = express.Router();
router.post("/createHistory",createBorrowHistory);
router.get("/getOverDueBooks/:member_id",getOverDueBooks);


export default router;
