import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieSummary = () => {
    const [summary,setSummary] = useState(null)
    const {movieId} = useParams()
    // if(!param){return "not"}
    console.log("param",movieId)
    console.log("https://api.tvmaze.com/shows/"+movieId)

    const getData = async() =>{
        const data = await fetch(`https://api.tvmaze.com/shows/${movieId}`)
        const json = await data.json()
        console.log(json)

    }
    useEffect(() =>{
        getData()
    },[])
  return (
    <div>
       dfghjcvbnm 
    </div>
  )
}

export default MovieSummary