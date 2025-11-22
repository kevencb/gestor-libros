import { User } from "../models/User.js";

// Agregar libro a favoritos
export const addFavorite = async (req, res) => {
  try {
    const userId = req.user.id;
    const bookId = req.params.bookId;

    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ msg: "Usuario no encontrado" });

    // Evitar duplicados
    if (user.favorites.includes(bookId)) {
      return res.status(400).json({ msg: "El libro ya está en favoritos" });
    }

    user.favorites.push(bookId);
    await user.save();

    res.json({ msg: "Libro agregado a favoritos" });
  } catch (error) {
    res.status(500).json({ msg: "Error agregando a favoritos" });
  }
};

// Obtener lista de favoritos
export const getFavorites = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).populate("favorites");

    res.json(user.favorites);
  } catch (error) {
    res.status(500).json({ msg: "Error obteniendo favoritos" });
  }
};

// Eliminar libro de favoritos
export const removeFavorite = async (req, res) => {
  try {
    const userId = req.user.id;
    const bookId = req.params.bookId;

    const user = await User.findById(userId);

    user.favorites = user.favorites.filter(
      (fav) => fav.toString() !== bookId
    );

    await user.save();

    res.json({ msg: "Libro eliminado de favoritos" });
  } catch (error) {
    res.status(500).json({ msg: "Error eliminando favorito" });
  }
};