import React, { useEffect, useState } from 'react'
import { movieData } from '../Utils/constant'
import Movie from './Movie'
import { Link } from 'react-router-dom'
const MovieList = () => {
    const [movieList,setMovieList] =useState([])
    const getMovie =async() =>{
        console.log("hello")
        const data = await fetch(movieData) ;
        const json = await data.json()
        console.log("json",json)
        setMovieList(json)
    }
    useEffect(() =>{
        getMovie()
    } ,[])
    if (movieList.length===0){ return null}

  return (
    <div>
    {
        movieList.map((movie) => {return (
            <Link to = {`/shows/${movie.show.id}`}
            key={movie.show.id}>
            <Movie movie={movie} />
            </Link>
            )
        })
    }
    </div>
  )
}

export default MovieList