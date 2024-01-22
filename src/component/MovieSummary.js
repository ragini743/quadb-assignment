import React, { useEffect, useState } from 'react'
import {  Form, Link, useParams } from 'react-router-dom' ;
import FormData from './FormData.js';

const MovieSummary = () => {
    const [summarys,setSummary] = useState(null)
    const {movieId} = useParams() ;
   const [isForm,setIsForm] =useState(false)
    console.log("https://api.tvmaze.com/shows/"+movieId)

    const getData = async() =>{
        const data = await fetch(`https://api.tvmaze.com/shows/${movieId}`)
        const json = await data.json()
        console.log(json)
        setSummary(json)

    };
   
    useEffect(() =>{
        getData()
    },[]) ;

    if(summarys===null){return "Loading"} ;
    const {image,name,language,rating ,status ,summary,url} = summarys ;

  return (
    <div className='w-[80%] mx-auto sm:w-[70%] md:w-[50%]'>
       <div className='w-full mt-8'>
        <img src ={image.medium} alt='' className='w-full'></img>
       </div>
       <div className='my-4'>
        <h1 className='text-lg font-bold'>Name: {name}</h1>
        <p><b>lang :</b> {language}</p>
        <p><b>rating:</b> {rating.average}</p>
        <p> <b>status :</b> {status}</p>
       <p className='text-xs leading-5 md:text-sm'> <b>Description</b> : {summary}</p>

       </div>
       <div className='rounded-lg text-center'>
            <button className='px-3 py-1 bg-blue-950 text-white rounded-lg'><Link to ={url}> Go to website</Link></button>
       </div>
       <div className='rounded-lg text-center my-4' onClick={() =>{
        setIsForm(true)
       }}>
            <button className='px-3 py-1 bg-blue-950 text-white rounded-lg'> book</button>
       </div>
       {isForm?<FormData movieName={name} />:null}
    </div>
  )
}

export default MovieSummary