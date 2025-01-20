import express from "express";
import { countBooksByGenre, createBook, findBookByAuthId, findBookByAuthName, getAllBooks, search } from "../Controller/book.controler.js";

const router = express.Router();
router.post("/create",createBook);
router.get("/getbooks",getAllBooks);
router.get("/findBookByAuthId/:author_id",findBookByAuthId);
router.get("/findBookByAuthName/:author_name",findBookByAuthName);
router.get("/totalBookByGenre/:genre_type",countBooksByGenre);
router.get("/search",search);


export default router;
