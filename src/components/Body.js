import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import Header from "./Header";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by+popularity.desc&api_key=ed8a2600bd3fc0701078eadf7a4b9e01&page=1";
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?&api_key=ed8a2600bd3fc0701078eadf7a4b9e01&query=";

function Body() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(API_SEARCH + searchTerm);

      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="root">
      <Header
        handleOnSubmit={handleOnSubmit}
        searchTerm={searchTerm}
        handleOnChange={handleOnChange}
      />
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default Body;
