import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const param = useParams();
  const navigate = useNavigate();

  const createPostData = JSON.parse(localStorage.getItem("Post_Data"));

  const PostData = createPostData.find((obj) => obj.id === param.post_id);

  const backHandler = () => {
    navigate('..');
  }

  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
      <div className="container mx-auto h-fit bg-white rounded-lg overflow-hidden shadow-2xl mt-5">

        <img
          className="w-full h-auto"
          src={PostData.image}
          alt="Post_image"
        />
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-2">{PostData.title}</h1>
          <p className="text-gray-700 text-lg mb-4">{PostData.description}</p>
          <div className="flex justify-end">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">
              Edit
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md mr-2">
              Delete
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-md" onClick={backHandler}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
