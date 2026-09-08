import express from "express";
import cors from "cors";
import movieRoutes from "./src/routes/movies.routes.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Rutas principales
app.use("/api", movieRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});