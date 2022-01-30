import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../customHook/useFetch";
import { PlusIcon } from "@heroicons/react/solid";
import { useState } from "react/cjs/react.development";

const SingleTraining = () => {
  const { id } = useParams();
  const url = `${process.env.REACT_APP_BASE_URL}/workouts/` + id;
  const { data, setData } = useFetch(url);
  // Prendere il valore dell'input
  const [addNew, setAddNew] = useState("");

  const addNewExercise = (data) => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, exercises: [...data.exercises, addNew] }),
    })
      .then((req) => req.json())
      .then((res) => {
        const newState = res;
        setData(newState);
        setAddNew("");
      });
  };

  const navigate = useNavigate();
  const completedTabs = () => {
    fetch(url, {
      method: "DELETE",
    }).then(navigate("/"));
  };

  return (
    <div>
      {data && (
        <div>
          <div className="flex items-center justify-between my-4">
            <h1 className="font-bold text-2xl">{data.title}</h1>
            <button onClick={completedTabs} className="text-white bg-[#00d1ff] font-semibold px-4 py-2 rounded-md">
              Completed
            </button>
          </div>
          <div className="mb-4">
            <p className="text-sm">{data.description}</p>
          </div>
          <img src={data.imgURL} alt="" />
          <div className="mt-2">
            <h2 className="font-semibold">Muscle Groups</h2>
            <small className="">{data.muscleGroups}</small>
          </div>
          <div className="my-10">
            {/* Esercizi della card */}
            <ul>
              {data.exercises.map((singleEx) => (
                <li
                  key={singleEx}
                  className="bg-[#3d6cb9] mt-3 p-2 text-white font-semibold text-center"
                >
                  {singleEx}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-3 font-semibold text-sm my-5">
            <h3 className="mb-2">Inserisci un altro esercizio</h3>
            <div className="flex space-x-3">
              <input
                type="text"
                onChange={(e) => setAddNew(e.target.value)}
                value={addNew}
                placeholder="Add exercise here..."
                className="outline-none placeholder:text-sm bg-transparent placeholder:text-gray-500 border-b-2 border-[#00d1ff] p-2 w-full"
              />
              <div
                className="cursor-pointer"
                onClick={() => addNewExercise(data)}
              >
                <PlusIcon className="w-10 text-white bg-[#00d1ff] p-2" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleTraining;
