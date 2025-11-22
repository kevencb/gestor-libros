import { Router } from "express";
import { authRequired } from "../middlewares/auth.js";
import { addFavorite, getFavorites, removeFavorite } from "../controllers/favorites.controller.js";

const router = Router();

// Todas requieren login
router.post("/:bookId", authRequired, addFavorite);
router.get("/", authRequired, getFavorites);
router.delete("/:bookId", authRequired, removeFavorite);

export default router;