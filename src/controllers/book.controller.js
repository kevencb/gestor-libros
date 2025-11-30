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

// Crear libro 
export const createBook = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Solo el admin puede crear libros" });
    }

    const newBook = await Book.create(req.body);
    return res.json(newBook);

  } catch (error) {
    console.error("ERROR CREANDO LIBRO:", error);
    res.status(500).json({ msg: "Error creando libro" });
  }
};

// Update libro 
export const updateBook = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Solo el admin puede editar libros" });
    }

    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updated) return res.status(404).json({ msg: "Libro no encontrado" });

    res.json(updated);

  } catch (error) {
    console.error("ERROR ACTUALIZANDO LIBRO:", error);
    res.status(500).json({ msg: "Error actualizando libro" });
  }
};

// Delete Book
export const deleteBook = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Solo el admin puede eliminar libros" });
    }

    const deleted = await Book.findByIdAndDelete(req.params.id);

    if (!deleted) return res.status(404).json({ msg: "Libro no encontrado" });

    res.json({ msg: "Libro eliminado" });

  } catch (error) {
    console.error("ERROR ELIMINANDO LIBRO:", error);
    res.status(500).json({ msg: "Error eliminando libro" });
  }
};