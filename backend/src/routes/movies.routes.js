import { Router } from "express";
import { getMovies } from "../controllers/movies.controller.js";

const router = Router();

// GET /api/movies
router.get("/movies", getMovies);

export default router;