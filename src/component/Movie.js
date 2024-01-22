import React from 'react'

export const Movie = ({movie}) => {
    
    const {show} = movie ;
    

    const {image} = show;
    if(!image){return "image not found"}
    const {medium} = show?.image ;
    
  return (
    <div>
        <div className='w-[100%] rounded-lg'>
            <img src={medium} alt='vgh' className='w-[100%] rounded-lg box-content'></img>
        </div>
        <div className='rounded-lg text-center mt-4 font-bold'>
            <button className='hover:text-white border-gray px-4 py-1 rounded-lg hover:bg-blue-900 border-2 shadow-lg'>Show</button>
        </div>
    </div>
  )
}
export default Movie ;
