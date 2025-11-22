import { Book } from "../models/Book.js";

// Obtener todos los libros
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ msg: "Error obteniendo libros" });
  }
};

// Obtener libros recomendados
export const getRecommendedBooks = async (req, res) => {
  try {
    const books = await Book.find({ recommended: true });
    res.json(books);
  } catch (error) {
    res.status(500).json({ msg: "Error obteniendo recomendados" });
  }
};

// Obtener libro por ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ msg: "Libro no encontrado" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ msg: "Error obteniendo libro" });
  }
};

// Crear libro (para pruebas)
export const createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    console.error("ERROR CREANDO LIBRO:", error); 
    res.status(500).json({ msg: "Error creando libro" });
  }
};

/*
module.exports = {
  getBooks,
  getRecommendedBooks,
  getBookById,
  createBook
};
*/