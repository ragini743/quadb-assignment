import React from "react";
import { userImage } from "../Utils/constant";

export const Movie = ({ movie }) => {
  const { show } = movie;

  const { image } = show;
 
  return (
    < div className="h-full flex flex-col">
      <div className="w-[80%] rounded-lg mx-auto flex-1">
        <img
          src={image?(image.medium||image.original):userImage}
          alt="vgh"
          className="w-[100%] rounded-lg box-content object-cover h-full"
        ></img>
      </div>
      <div className="rounded-lg text-center mt-4 font-bold">
        <button className="hover:text-white border-gray px-4 py-1 rounded-lg hover:bg-blue-900 border-2 shadow-lg text-center">
          Show
        </button>
      </div>
    </div>
  );
};
export default Movie;
