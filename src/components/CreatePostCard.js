import HeaderOption from "./HeaderOption";

const CreatePostCard = ({show}) => {
  return (
    <div className="bg-white p-3 border-1  rounded-lg border-gray-200  mt-6">
      {/* Avatar */}
      <div className="flex items-center justify-center">
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1523478016374-2a27cc521718?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1000&q=60"
            alt=""
            className="w-10 rounded-full object-contain mr-2"
          />
        </div>
        {/* button */}
        <div className="border-2 flex-grow rounded-full p-3 hover:bg-gray-200 cursor-pointer" onClick={show}>
          <button className="px-2 border-gray-500 text-gray-400 font-semibold">Avvia un post</button>
        </div>
      </div>
      <HeaderOption />
    </div>
  );
};

export default CreatePostCard;
