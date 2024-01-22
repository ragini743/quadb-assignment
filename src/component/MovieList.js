import React, { useEffect, useState } from "react";
import { movieData } from "../Utils/constant";
import Movie from "./Movie";
import { Link } from "react-router-dom";
const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const getMovie = async () => {
    console.log("hello");
    const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fapi.tvmaze.com%2Fsearch%2Fshows%3Fq%3Dall");
    const json = await data.json();
    // console.log("json", json);
    setMovieList(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  if (movieList.length === 0) {
    return null;
  }

  return (
    <div className=" w-[70%] mx-auto my-5 sm:[80%] md:w-[70%] lg:w-[70%]">
      <div className="grid gap-28 sm:gap-16 sm:grid-cols-2 md:gap-10 md:grid-cols-3">
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
