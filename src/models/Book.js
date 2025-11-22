import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, "El título es obligatorio"],
    trim: true
  },
  autor: {
    type: String,
    required: [true, "El autor es obligatorio"],
    trim: true
  },
  genero: {
    type: String,
    required: [true, "El género literario es obligatorio"],
    enum: [
      "Fantasía",
      "Ciencia Ficción",
      "Misterio",
      "Romance",
      "Historia",
      "Terror",
      "Juvenil",
      "Ensayo",
      "Poesía",
      "Aventura",
      "Drama",
      "Biografía"
    ]
  },
  descripcion: {
    type: String,
    default: "",
    trim: true
  },
  portada: {
    type: String, // URL de imagen
    default: ""
  },
  fechaPublicacion: {
    type: Date
  },
  recommended: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export const Book = mongoose.model("Book", bookSchema);