import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";

import authRoutes from "./src/routes/auth.routes.js";
import bookRoutes from "./src/routes/book.routes.js";
import favoritesRoutes from "./src/routes/favorites.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB()

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/favorites", favoritesRoutes);

app.get("/", (req, res) => { 
    res.send("API funcionando")
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => { 
    console.log(`Servidor funcionando con éxito en el puerto http://localhost:${PORT}`)
})