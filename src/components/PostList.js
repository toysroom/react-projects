import BottomIcon from "./BottomIcon";
import {
  HeartIcon,
  ChatIcon,
  ChevronDoubleRightIcon,
  ShareIcon,
  EmojiHappyIcon,
  PhotographIcon,
} from "@heroicons/react/solid";

const PostList = ({ viewComment, showComment, data }) => {
  return (
    <div className="w-2/4 mt-6 flex flex-col-reverse">
      {data &&
        data.map((post) => (
          <div key={post.id}>
            <div className=" rounded-md border-1 border-gray-500 w-full bg-white my-2 p-5">
              {/* Avatar Post */}
              <div className="flex items-center ">
                <img
                  src={post.avatar}
                  alt=""
                  className="w-10 rounded-full object-contain mr-2"
                />
                <div>
                  <p className="-mb-2 font-semibold">{post.userName}</p>
                  <small>{post.userJob}</small>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-sm">{post.singleComment}</p>
              </div>
              {/* icon Bottom Post */}
              <div className="border-t-2 border-gray-300 mt-6 py-3 flex justify-between">
                <BottomIcon
                  icon={<HeartIcon className="w-6 mr-2 text-gray-500" />}
                  title="Consiglia"
                />
                <div onClick={viewComment}>
                  <BottomIcon
                    icon={<ChatIcon className="w-6 mr-2 text-gray-500" />}
                    title="Commenta"
                  />
                </div>

                <BottomIcon
                  icon={
                    <ChevronDoubleRightIcon className="w-6 mr-2 text-gray-500" />
                  }
                  title="Condividi"
                />
                <BottomIcon
                  icon={<ShareIcon className="w-6 mr-2 text-gray-500" />}
                  title="Invia"
                />
              </div>
              {/* comments section */}
              <div>
                {/* Input comments */}
                <div className="flex">
                  <img
                    src={post.avatar}
                    alt=""
                    className="w-10 rounded-full object-contain mr-2"
                  />
                  <form className="flex justify-between w-full  border-gray-500 border rounded-full px-3">
                    <input
                      type="text"
                      placeholder="Aggiungi un commento"
                      className="flex-grow bg-transparent outline-0"
                    />
                    <div className="flex items-center">
                      <EmojiHappyIcon className="w-6 text-gray-500" />
                      <PhotographIcon className="w-6 ml-2 text-gray-500" />
                    </div>
                  </form>
                </div>

                {showComment && (
                  <div className="mt-10">
                    {post.comments && post.comments.map((comment) => (
                      <div key={comment.id} className="flex items-start mb-5">
                        <img
                          src={comment.fotoCommento}
                          alt=""
                          className="w-10 rounded-full object-contain mr-2"
                        />
                        <div className="bg-gray-100 w-full p-2 relative">
                          <h1 className="-mb-2 text-gray-800 font-semibold text-sm">
                            {comment.userComment}
                          </h1>
                          <small className="text-gray-500">
                            {comment.jobComment}
                          </small>
                          <p>{comment.commentContent}</p>
                          <small className="absolute top-2 right-5 text-xs text-gray-500">
                            {comment.commentHour}
                          </small>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
