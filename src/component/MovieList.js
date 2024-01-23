import React, { useEffect, useState } from "react";
import { movieData } from "../Utils/constant";
import Movie from "./Movie";
import { Link } from "react-router-dom";
const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const getMovie = async () => {
    const data = await fetch(movieData);
    const json = await data.json();
  console.log(json)
    setMovieList(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  if (movieList.length === 0) {
    return null;
  }

  return (
    <div className=" w-[70%] mx-auto my-5 sm:[80%] md:w-[70%] lg:w-[70%] md:my-10">
      <div className="grid gap-20 sm:gap-16 sm:grid-cols-2 md:gap-20 md:grid-cols-3 grid-flow-row">
        {movieList.map((movie) => {
          return (
            <Link to={`/shows/${movie.show.id}`} key={movie.show.id}>
              <Movie movie={movie} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
