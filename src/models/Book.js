import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true
    },
    genre: {
      type: String,
      required: [true, "Genre is required"],
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
    description: {
      type: String,
      default: "",
      trim: true
    },
    cover: {
      type: String, // image URL
      default: ""
    },
    publicationDate: {
      type: Date
    },
    recommended: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export const Book = mongoose.model("Book", bookSchema);