// MovieDetails.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import home from "../assets/Home.png";
import TYv from "../assets/TV Show.png";
import movieDetect from "../assets/Movie Projector.png";
import logout from "../assets/Logout.png";
import calendar from "../assets/Calendar.png";
import group50 from "../assets/Group 50.png";
import group51 from "../assets/Group 51.png";
import group52 from "../assets/Group 52.png";
import tv from "../assets/tv.png";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [videoKey, setVideoKey] = useState(""); 

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = "42bb89ac979b58b57aaf5c989e017b35";

        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        );
        console.log(response);
        setMovie(response.data);

        //     } catch (error) {
        //       console.error("Error fetching movie details:", error);
        //     }
        //   };

        //   fetchMovieDetails();
        // }, [id]);
        // Fetch the video key
        const videoResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
        );

        if (videoResponse.data.results.length > 0) {
          setVideoKey(videoResponse.data.results[0].key);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <div className="full-page">
        <div className="leftSide">
          <div className="Left-Nav">
            <div className="TheSides">
              <span style={{ padding: "25px" }}>
                <img src={tv} alt="" className="MovieSide" />
                <span>MovieBox</span>
              </span>
            </div>
            <ul>
              <li style={{ marginTop: "40px" }}>
                <a aria-label="Home" href="/">
                  <img src={home} alt="" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a aria-label="Home" href="/">
                  <img src={movieDetect} alt="" />
                  <span>Movie</span>
                </a>
              </li>
              <li>
                <a aria-label="Home" href="/">
                  <img src={TYv} alt="" />
                  <span>TV Series</span>
                </a>
              </li>
              <li>
                <a aria-label="Home" href="/">
                  <img src={calendar} alt="" />
                  <span>Upcoming</span>
                </a>
              </li>
            </ul>
            <div className="AsideWord">
              <h4>Play movie quizes and earn free tickets</h4>
              <p>50k people are playing now</p>
              <a href="/">start playing</a>
            </div>
            <ul>
              <li style={{ marginTop: "60px" }}>
                <a aria-label="Home" href="/">
                  <img src={logout} alt="" />
                  <span>LogOut</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rightSide">
          <div className="videoWrap">
            {videoKey && (
              <iframe
                title="Youtube Video player"
                src={`https://www.youtube.com/embed/${videoKey}`}
                allowFullScreen
              />
            )}
          </div>
          <div className="AllDetails">
            <div className="info">
              <div className="info-title">
                <h2 data-testid="movie-title">{movie.title}</h2>
                <p className="details-para" data-testid="movie-release-date">
                  <span>{movie.release_date}</span>
                </p>
                <p className="details-para" data-testid="movie-runtime">
                  <span>{movie.runtime}</span>
                </p>
              </div>
              <p className="genre">
                <span>
                  {movie.genres.map((genre) => genre.name).join(", ")}
                </span>
              </p>
            </div>
            <div className="Infos">
              <div className="addedInfo">
                <div className="inform">
                  <p className="details-para" data-testid="movie-overview">
                    {movie.overview}
                  </p>
                  <p style={{ color: "black" }}>
                    Director:{" "}
                    <span style={{ color: "red" }}>Joseph Kosinski</span>
                  </p>
                  <p style={{ color: "black" }}>
                    Writers :{" "}
                    <span style={{ color: "red" }}>
                      {" "}
                      Jim Cash, Jack Epps Jr, Peter Craig
                    </span>
                  </p>
                  <p style={{ color: "black" }}>
                    Stars :
                    <span style={{ color: "red" }}>
                      Tom Cruise, Jennifer Connelly, Miles Teller
                    </span>
                  </p>
                </div>
              </div>
              <div className="sideInfo">
                <img src={group50} alt="" />
                <img src={group51} alt="" />
                <img src={group52} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
