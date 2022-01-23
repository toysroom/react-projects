import { ChatIcon, XIcon } from "@heroicons/react/solid";
import {
  PhotographIcon,
  PlayIcon,
  DocumentTextIcon,
  BriefcaseIcon,
  ChipIcon,
  ChartBarIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { useFetch } from "../customHook/useFetch";

const Modal = ({ hide, data, setData}) => {
  // Funzionalità aggiungi post al click del bottone
  const [inputArea, setInputArea] = useState("");
  const { postData } = useFetch("http://localhost:3000/post", "POST");

  const addPost = () => {
    const newPost = {
      userName: "Eugenio",
      avatar:
        "https://images.unsplash.com/photo-1487528001669-63c47a53fd39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
      userJob: "Frontend Developer",
      singleComment: inputArea,
    };
    postData(newPost);
    const newState = [...data, newPost]
    console.log(newState)
    setData(newState)
  };

  return (
    // Modal Container
    <div className="bg-white w-2/4 rounded-lg shadow-2xl mt-8">
      {/* Modal Header */}
      <div className="flex items-center justify-between py-5 border-gray-300 border-b-2 px-3">
        <h2 className="text-gray-500 font-normal text-xl">Crea un Post</h2>
        <XIcon
          className="w-6 hover:bg-gray-200 rounded-full p-1"
          onClick={hide}
        />
      </div>
      {/* Avatar Info */}

      <div className="flex mt-4 px-3">
        <img
          src="https://images.unsplash.com/photo-1487528001669-63c47a53fd39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="w-10 rounded-full object-contain mr-2"
        />
        <h2 className="text-gray-600 font-semibold">Eugenio</h2>
      </div>
      <form>
        <div className="p-3 mt-5">
          <textarea
            className="w-full h-32 outline-0"
            placeholder="Di cosa vorresti parlare?"
            onChange={(e) => {
              setInputArea(e.target.value);
            }}
            value={inputArea}
          ></textarea>
        </div>
      </form>

      <div className="flex items-center justify-between p-3">
        {/* Icons */}
        <div className="py-1 flex border-r-2 w-3/5 justify-between ">
          <PhotographIcon className="w-6 mr-2 text-gray-500" />
          <PlayIcon className="w-6 mr-2 text-gray-500" />
          <DocumentTextIcon className="w-6 mr-2 text-gray-500" />
          <BriefcaseIcon className="w-6 mr-2 text-gray-500" />
          <ChipIcon className="w-6 mr-2 text-gray-500" />
          <ChartBarIcon className="w-6 mr-2 text-gray-500" />
          <DotsHorizontalIcon className="w-6 mr-2 text-gray-500" />
        </div>
        <div className="flex items-center w-2/5 justify-between">
          <div className="flex pl-1 ml-2">
            <ChatIcon className="w-6" />
            <p>Tutti</p>
          </div>
          <button
            className="bg-gray-200 py-2 px-3 rounded-full"
            onClick={() => {
              addPost()
              hide()
            }}
          >
            Pubblica
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
