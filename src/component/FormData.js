import React from 'react'

const FormData = ({movieName}) => {
  return (
    <div>
        <div>
            <h1>Movie Name {movieName}</h1>
        </div>
        <label>Name : </label>
        <input type='text'placeholder='enter your name' className='border-gray-50 outline-none'></input>
        
    </div>
  )
}

export default FormData



