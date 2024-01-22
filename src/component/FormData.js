import React from 'react'

const FormData = ({movieName}) => {
  return (
    <div className='border-2  mx-auto shadow-lg py-4 sm:px-10 '>
        <div className='shadow-lg text-[1rem] font-bold pb-2'>
            <h1 className='text-center'>Movie Name : {movieName}</h1>
        </div>
        <div className=''>
        <div className='border-gray-50 p-2 pt-4 flex flex-col sm:flex-row  sm:items-center pl-4 border-2 shadow-lg rounded-lg'>
        <label>Name : </label>
        <input type='text'placeholder='enter your name' className='outline-none  rounded-lg py-1 ml-4'></input>
        </div>
        <div className='border-gray-50 p-2 pt-4 flex flex-col pl-4 sm:flex-row sm:items-center border-2 shadow-lg rounded-lg'>
        <label>Phone no : </label>
        <input type='number'placeholder='enter your phone numer' className='outline-none  rounded-lg py-1 ml-4'></input>
        </div>
        <div className='border-gray-50 p-2 pt-4  pl-4 flex flex-col sm:flex-row sm:items-center border-2 shadow-lg rounded-lg'>
        <label>Email: </label>
        <input type='email'placeholder='enter your phone email' className='outline-none rounded-lg py-1 ml-4'></input>
        </div>
        <div className=' my-5'>
            <button className='bg-blue-950 text-white px-4 py-1 rounded-lg md:px-8 md:py-2' type='submit'>Book</button>
        </div>
        </div>
        
    </div>
  )
}

export default FormData



