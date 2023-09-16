// MovieGrid.js
import { useState, useEffect } from "react";
import axios from "axios";
import { TMDB_API_KEY } from "./Config";
import { Link } from "react-router-dom";
import mv from "../assets/MV.png";
import tomatoes from "../assets/PngItem_1381056 1.png";

const ExtractedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        );
        console.log(response);
        setMovies(response.data.results.slice(0, 10));
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <Link
          to={`/movies/${movie.id}`}
          key={movie.id}
          className="movie-card"
          data-testid="movie-card"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
            data-testid="movie-poster"
          />
          <span>
            <p className="movie-title" data-testid="movie-title">
              {movie.title}
            </p>
            <p className="rate">
              <span>
                <span>
                  <img src={mv} alt="" />
                </span>
                <span>87.60 / 100</span>
              </span>
              <span>
                <span>
                  <img src={tomatoes} alt="" />
                </span>
                <span>97%</span>
              </span>
            </p>
            <p className="movie-release-date" data-testid="movie-release-date">
               {movie.release_date}
            </p>
          </span>
        </Link>
      ))}
    </div>
  );
};

export default ExtractedMovies;
