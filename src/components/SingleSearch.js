import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom'
import { useFetch } from "../customHook/useFetch";

const SingleSearch = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  //Fetchare il dato da cercare
  const url = "http://localhost:3000/workouts?q=" + query;
  const { data } = useFetch(url);
  
  if(data && data.length === 0){
    return (
      <div className="text-center flex flex-col justify-center h-screen">
        <h1 className="font-light text-md">What you were looking for was not found <span className="font-bold text-[#00d1ff]">"{query}"</span></h1>
        <span className="text-2xl font-extralight">Try looking for something different</span>
      </div>
    )
  }

 

  return (
    <div className="p-2">
      <div className="text-center mt-2">
        <h1 className="font-light text-sm border-b">
          Your Are Searching for: <span className="font-semibold text-2xl">{query}</span>
        </h1>
      </div>
      {data &&
        data.map((training) => (
          <div
            key={training.id}
            className="mb-2 my-4 shadow-lg rounded-lg overflow-hidden"
          >
            <img src={training.imgURL} alt="" />
            <div className="py-5 px-5 flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-[#3d6cb9] text-lg">
                  {training.title}
                </h2>
                <p>{training.description}</p>
              </div>
              <div>
                <Link  to={`/single/${training.id}`} className="bg-[#00d1ff] p-2 font-semibold text-xs text-white rounded-lg">
                  Apri Scheda
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SingleSearch;
