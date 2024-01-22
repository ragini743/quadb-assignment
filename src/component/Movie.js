import React from "react";

export const Movie = ({ movie }) => {
  const { show } = movie;

  const { image } = show;
  if (!image) {
    return "image not found";
  }
  const imgUrl = image.medium || image.original;
  console.log("imgurl", imgUrl);
  // const {medium} = show?.image ;

  return (
    <div>
      <div className="w-[100%] rounded-lg">
        <img
          src={imgUrl}
          alt="vgh"
          className="w-[80%] mx-auto rounded-lg box-content"
        ></img>
      </div>
      <div className="rounded-lg text-center mt-4 font-bold">
        <button className="hover:text-white border-gray px-4 py-1 rounded-lg hover:bg-blue-900 border-2 shadow-lg">
          Show
        </button>
      </div>
    </div>
  );
};
export default Movie;
