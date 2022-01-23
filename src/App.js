import { useState } from "react/cjs/react.development";
import "./App.css";
import CreatePostCard from "./components/CreatePostCard";
import Modal from "./components/Modal";
import PostList from "./components/PostList";
import { useFetch } from "./customHook/useFetch";

function App() {
  const { data, setData } = useFetch("http://localhost:3000/post");
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const [showComment, setShowComment] = useState(false);
  const viewComment = () => {
    setShowComment(true);
  };

  return (
    <div className="flex flex-col items-center justify-center relative bg-gray-300">
      <div className="w-2/4 mx-auto">

      <CreatePostCard show={openModal} />
      </div>

      <div className="bg-gray-300 h-full flex items-center justify-center">
        {/* App Content  -> bg white*/}
        <PostList
          viewComment={viewComment}
          showComment={showComment}
          data={data}
        />

        {showModal && (
          <div className="absolute top-0 left-0 w-full h-screen bg-black/40 flex items-start justify-center">
            <Modal hide={closeModal} data={data} setData={setData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
