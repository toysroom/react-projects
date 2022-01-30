import { Link } from "react-router-dom";
import { useFetch } from "../customHook/useFetch";
import { PlusIcon, XIcon } from "@heroicons/react/solid";



const Card = () => {
  const { data, setData } = useFetch("http://localhost:3000/workouts");
  const deleteCard = (myData) => {
    const url = "http://localhost:3000/workouts/" + myData;
    const newState = data.filter((item) => {
      return item.id !== myData;
    });
    fetch(url, {
      method: "DELETE",
    }).then(setData(newState));
  };
if(data && data.length === 0) {
  return (
    <div className="text-center">
      <h1 className="py-6 text-2xl font-extralight">No Tabs Found. <br></br>Add Something New</h1>
      <div className="bg-[#3d6cb9] flex items-center text-white p-2 justify-center my-4 rounded-md">
        <Link to="/create" className="font-semibold uppercase">
          Add New
        </Link>
        <PlusIcon className="w-5" />
      </div>
    </div>
  )
}

  return (
    <div className="">
      <h1 className="font-bold text-xl text-gray-500 border-b mb-2">
        I tuoi allenamenti
      </h1>
      {data &&
        data.map((training) => (
          <div
            key={training.id}
            className="mb-2 my-4 shadow-lg rounded-lg overflow-hidden relative"
          >
            <XIcon className="w-6 cursor-pointer p-1 absolute right-3 top-3 bg-[#3d6c9b] text-white rounded-full"  onClick={()=> deleteCard(training.id)}/>
            <img src={training.imgURL} alt="" />
            <div className="py-5 px-2 flex items-center justify-between space-x-2">
              <div className="w-3/4">
                <h2 className="font-semibold text-[#3d6cb9] text-lg">
                  {training.title}
                </h2>
                <p className="">{training.description}</p>
              </div>
              <div className="w-1/4">
                <Link
                  to={`/single/${training.id}`}
                  className="bg-[#00d1ff] p-2 font-semibold text-xs text-white rounded-lg"
                >
                  Apri Scheda
                </Link>
              </div>
            </div>
          </div>
        ))}
      <div className="bg-[#3d6cb9] flex items-center text-white p-2 justify-center my-4 rounded-md">
        <Link to="/create" className="font-semibold uppercase">
          Add New
        </Link>
        <PlusIcon className="w-5" />
      </div>
    </div>
  );
};

export default Card;
