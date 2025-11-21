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
      "fantasía",
      "ciencia ficción",
      "misterio",
      "romance",
      "historia",
      "terror",
      "juvenil",
      "ensayo",
      "poesía",
      "aventura",
      "drama",
      "biografía"
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
  }
}, {
  timestamps: true
});

export const Book = mongoose.model("Book", bookSchema);