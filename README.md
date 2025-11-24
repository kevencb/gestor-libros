# 📚 Books API – Backend en Node.js

API REST para la gestión de libros, desarrollada con **Node.js**, **Express** y **MongoDB**.  
Incluye autenticación con JWT, CRUD de libros y un sistema de recomendados.

---

## 🚀 Características

- Registro y login de usuarios mediante **JWT**
- CRUD completo de libros
- Listar libros recomendados
- Validaciones con Mongoose
- Proyecto modular con controladores, rutas y middlewares

---

## 🧱 Tecnologías utilizadas

- Node.js  
- Express  
- MongoDB + Mongoose  
- JSON Web Tokens  
- Dotenv  
- ES Modules  

---

## 📁 Estructura del proyecto

```bash
project/
│── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── config/
│   └── index.js
│── .env
│── package.json
└── README.md
```
---

## 🛠 Variables de entorno

- Crear un archivo `.env` en la raíz:
- PORT=4000
- MONGO_URI=your_mongo_connection_string
- JWT_SECRET=your_secret_key

---

## 📘 Modelo Book (Schema)
{
    title: String (required),
    author: String (required),
    genre: String (required, enum),
    description: String,
    coverImage: String,
    publicationDate: Date,
    recommended: Boolean
}

### Géneros permitidos:

- Fantasy  
- Sci-Fi  
- Mystery  
- Romance  
- History  
- Horror  
- Young Adult  
- Essay  
- Poetry  
- Adventure  
- Drama  
- Biography  

---

# 📌 Endpoints de la API

La URL base es:
http://localhost:4000/api

---

## 🔐 Autenticación

### **POST /auth/register**  
Registra un nuevo usuario.

### **POST /auth/login**  
Devuelve un token JWT y los datos del usuario.

---

# 📚 Rutas de Libros  
Base: `/api/books`

#### **POST /api/books**  
Crear un libro.

#### **GET /api/books**  
Obtener todos los libros.

#### **GET /api/books/:id**  
Obtener un libro por ID.

#### **PUT /api/books/:id**  
Actualizar un libro.

#### **DELETE /api/books/:id**  
Eliminar un libro.

#### **GET /api/books/recommended**  
Obtener solo los libros recomendados.

---

## ▶️ Ejecutar el proyecto

Instalar dependencias:
npm install

Iniciar el servidor:
node server.js

El backend estará disponible en:
http://localhost:4000

---

## 🎯 Notas finales

- El backend está totalmente funcional y listo para conectarse con un frontend (ej. Angular).  
- Sigue una arquitectura modular y buenas prácticas REST.  

---