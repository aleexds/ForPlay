// Base de datos local/simulada
const movies = [
  {
    id: 1,
    title: "Pelicula 1",
    description: "Descripción o sinopsis de la película 1.",
    poster: "https://via.placeholder.com/300x400?text=Poster+1",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  {
    id: 2,
    title: "Pelicula 2",
    description: "Descripción o sinopsis de la película 2.",
    poster: "https://via.placeholder.com/300x400?text=Poster+2",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  }
];

export const getMovies = (req, res) => {
  res.json(movies);
};