import express from "express";
import { createAuthor, getBooksByAuthor } from "../controller/author.controller.js";

const router = express.Router();
router.post("/create",createAuthor);
router.get("/",getBooksByAuthor);

export default router;
