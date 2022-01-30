import { PlusIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useFetch } from "../customHook/useFetch";

const TrainingTabs = () => {
  // Inputs fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // Gruppi Muscolari
  const [groups, setGroups] = useState("");

  const [newGroups, setNewGroups] = useState([]);
  // Gruppi esercizi
  const [exercises, setExercises] = useState("");
  const [newExercises, setNewExercises] = useState([]);

  const [time, setTime] = useState("");
  const [image, setImage] = useState("");

  // Funzione che aggiunge i valori presi in input pushandoli dentro l'array controllando se
// il valore inserito in input presenta spazi o non è ripetuto 
  const addMuscleGroup = (e) => {
    e.preventDefault();
    const muscleGroup = groups.trim();

    if (muscleGroup && !newGroups.includes(muscleGroup)) {
      setNewGroups((prevMuscle) => [...prevMuscle, muscleGroup]);
    }
    console.log(newGroups);
    setGroups("");
  };

  // Funzione che aggiunge i valori presi in input pushandoli dentro l'array controllando se
// il valore inserito in input presenta spazi o non è ripetuto 
  const addExercises = (e) => {
    e.preventDefault();
    const exGroup = exercises.trim();
    if (exGroup && !newExercises.includes(exGroup)) {
      setNewExercises((prevExe) => [...prevExe, exGroup]);
    }
    setExercises("");
  };

  // Fetchare il JSON per la POST Request
  const { data, postData } = useFetch("http://localhost:3000/workouts", "POST");
// Funzione che va ad inserire l'oggetto PostData nel json prendendo 
  const createWorkout = (e) => {
    e.preventDefault();
    postData({
      title,
      description,
      imgURL: image,
      muscleGroups: newGroups,
      exercises: newExercises,
      duration: time,
    });
  };
  //Controllo che se l'oggetto è presente di riportarci alla HOME Page
  const navigate = useNavigate();
  if (data) {
    navigate("/");
  }

  return (
    // Create tabs container
    <div>
      <div className="mb-10 border-b">
        <h1 className="font-semibold text-lg">
          Crea la tua scheda di allenamento
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic possimus
          exercitationem consequuntur.
        </p>
      </div>
      <div>
        <form onSubmit={createWorkout}>
          <h3 className="mb-2">Titolo allenamento</h3>
          <input
            type="text"
            placeholder="type your title here..."
            className="outline-none placeholder:text-sm bg-[#3d6cb9]/60 placeholder:text-white p-2 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          {/* Descrizione */}
          <div className="mt-5">
            <h3 className="mb-2">Descrizione Esercizio</h3>
            <textarea
              type="text"
              placeholder="Your description here..."
              className="outline-none placeholder:text-sm bg-[#3d6cb9]/60 placeholder:text-white p-2 w-full h-28"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          {/* Foto */}
          <div className="mt-5">
            <h3 className="mb-2">URL Image</h3>
            <input
              type="text"
              placeholder="Your image url here..."
              className="outline-none placeholder:text-sm bg-[#3d6cb9]/60 placeholder:text-white p-2 w-full"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          {/* Gruppi muscolari */}
          <div className="mt-5">
            <h3 className="mb-2">Gruppi Muscolari</h3>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Muscle Groups Here..."
                className="outline-none placeholder:text-sm bg-[#3d6cb9]/60 placeholder:text-white p-2 w-full"
                onChange={(e) => setGroups(e.target.value)}
                value={groups}
                
              />

              <div onClick={addMuscleGroup}>
                <PlusIcon className="w-10 text-white bg-[#00d1ff] p-2" />
              </div>
            </div>
            <small>Muscle Groups:{newGroups.join(", ")}</small>
          </div>

          {/* Singoli Esercizi */}
          <div className="mt-5">
            <h3 className="mb-2">Inserisci gli esercizi</h3>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Add Exercises..."
                className=" outline-none placeholder:text-sm bg-[#3d6cb9]/60 placeholder:text-white p-2 w-full"
                value={exercises}
                onChange={(e) => setExercises(e.target.value)}
                
              />
              <div onClick={addExercises}>
                <PlusIcon className="w-10 text-white bg-[#00d1ff] p-2" />
              </div>
            </div>
            <small>Exercises Groups:{newExercises.join(", ")}</small>
          </div>
          {/* Minuti allenamento */}
          <div className="mt-5">
            <h3 className="mb-2">Minuti di allenamento</h3>
            <div className="">
              <input
                type="number"
                placeholder="Set your time..."
                className="outline-none placeholder:text-sm bg-[#3d6cb9]/60 placeholder:text-white p-2 w-full"
                min={5}
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>
          <button className="p-2 bg-[#3d6cb9] w-full mt-6 text-white font-semibold">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrainingTabs;
