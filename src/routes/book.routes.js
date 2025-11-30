import express from "express";
import { getBooks, getRecommendedBooks, getBookById, createBook, updateBook, deleteBook } from "../controllers/book.controller.js";
import { authRequired } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/recommended", getRecommendedBooks);
router.get("/:id", getBookById);

router.post("/", authRequired, createBook);
router.put("/:id", authRequired, updateBook);
router.delete("/:id", authRequired, deleteBook);

router.post("/", authRequired, createBook);

export default router;