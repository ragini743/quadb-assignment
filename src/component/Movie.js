import React from 'react'

export const Movie = ({movie}) => {
    
    const {show} = movie ;
    

    const {image} = show;
    if(!image){return "image not found"}
    const {medium} = show?.image ;
    
  return (
    <div>
        <div>
            <img src={medium} alt='vgh'></img>
        </div>
    </div>
  )
}
export default Movie ;
