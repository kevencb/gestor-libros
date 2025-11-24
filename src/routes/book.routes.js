import express from "express";
import { getBooks, getRecommendedBooks, getBookById, createBook } from "../controllers/book.controller.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/recommended", getRecommendedBooks);
router.get("/:id", getBookById);
router.post("/", createBook);  // Solo para pruebas, luego lo protegemos

export default router;