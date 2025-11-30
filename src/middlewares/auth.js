import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authRequired = (req, res, next) => {
  console.log("HEADER TOKEN RECIBIDO:", req.headers.authorization);

  const token = req.headers.authorization?.split(" ")[1];

  if (!token)
    return res.status(401).json({ msg: "Token no proporcionado" });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log("PAYLOAD DECODIFICADO:", payload);
    req.user = payload;
    next();

  } catch (error) {
    return res.status(403).json({ msg: "Token inválido" });
  }
};