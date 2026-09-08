import { useState, useEffect } from "react";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/movies")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar las películas");
        return res.json();
      })
      .then((data) => {
        setMovies(data);
        if (data.length > 0) setSelectedMovie(data[0]); // Seleccionar la primera por defecto
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []); // Array vacío para ejecutar una sola vez al montar el componente

  if (loading) return <p>Cargando catálogo...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ color: "#fff", backgroundColor: "#141414", minHeight: "100vh", padding: "20px" }}>
      {/* Reproductor principal estilo Netflix */}
      {selectedMovie && (
        <div style={{ marginBottom: "30px", textAlign: "center" }}>
          <h2>Reproduciendo: {selectedMovie.title}</h2>
          <video 
            key={selectedMovie.id} 
            controls 
            autoPlay 
            style={{ width: "100%", maxHeight: "500px", borderRadius: "8px", backgroundColor: "#000" }}
          >
            <source src={selectedMovie.videoUrl} type="video/mp4" />
            Tu navegador no soporta el reproductor de video.
          </video>
          <p style={{ marginTop: "10px", color: "#ccc" }}>{selectedMovie.description}</p>
        </div>
      )}

      {/* Cartelera */}
      <h3>Cartelera de Películas</h3>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <div 
            key={movie.id} 
            onClick={() => setSelectedMovie(movie)}
            style={{
              cursor: "pointer",
              border: selectedMovie?.id === movie.id ? "3px solid #e50914" : "1px solid #333",
              borderRadius: "8px",
              padding: "10px",
              width: "180px",
              backgroundColor: "#222"
            }}
          >
            <img src={movie.poster} alt={movie.title} style={{ width: "100%", borderRadius: "4px" }} />
            <h4 style={{ margin: "10px 0 5px 0", fontSize: "16px" }}>{movie.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;