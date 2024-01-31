import React, { useEffect, useState } from "react";
import { Form, Link, useParams } from "react-router-dom";
import FormData from "./FormData.js";
import { userImage } from "../../Utils/constant.js";

const MovieSummary = () => {
  const [summarys, setSummary] = useState(null);
  const { movieId } = useParams();
  const [isForm, setIsForm] = useState(false);
  console.log("https://api.tvmaze.com/shows/" + movieId);

  const getData = async () => {
    const data = await fetch(`https://api.tvmaze.com/shows/${movieId}`);
    const json = await data.json();

    setSummary(json);
  };

  useEffect(() => {
    getData();
  }, []);

  if (summarys === null) {
    return "Loading";
  }
  const { image, name, language, rating, status, summary, url } = summarys;
 

  return (
    <div className="py-8 relative lg:h-[100vh]">
      <div className="w-[80%] mx-auto sm:w-[70%] md:w-[80%] lg:flex lg:justify-between">
        <div className="w-[40%] sm:[60%] md:[70%]  mx-auto lg:w-[35%] lg:mr-[15%]">
          <img src={image?image.medium:userImage} alt="" className="w-full"></img>
        </div>
        <div className="lg:w-[60%]">
          <div className="my-4">
            <h1 className="text-lg font-bold">Name: {name}</h1>
            <p>
              <b>lang :</b> {language}
            </p>
            <p>
              <b>rating:</b> {rating.average}
            </p>
            <p>
              {" "}
              <b>status :</b> {status}
            </p>

            <p className="text-xs leading-5 md:text-sm">
              <b>Description</b> :{" "}
              <span dangerouslySetInnerHTML={{ __html: summary }} />
            </p>
          </div>
          <div className="rounded-lg text-center">
            <button className="px-3 py-1 bg-blue-950 text-white rounded-lg">
              <Link to={url}> Go to website</Link>
            </button>
          </div>
          {!isForm && (
            <div
              className="rounded-lg text-center my-4"
              onClick={() => {
                setIsForm(!isForm);
              }}
            >
              <button className="px-3 py-1 bg-blue-950 text-white rounded-lg">
                {" "}
                book
              </button>
            </div>
          )}

          {isForm && (
            <div className=" lg:w-[100%] mx-auto ">
              {isForm ? (
                <FormData movieName={name} setIsForm={setIsForm} />
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieSummary;
