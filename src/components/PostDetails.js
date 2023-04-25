import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditPopUp from "./UI/EditPopUp";

const PostDetails = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);

  const param = useParams();
  const navigate = useNavigate();

  const createPostData = JSON.parse(localStorage.getItem("Post_Data"));

  const PostData = createPostData.find((obj) => obj.id === param.post_id);

  const editHandler = () => {
    setEditModalOpen(true);
  };

  const closeEditModel = () => {
    setEditModalOpen(false);
  };

  const updateDataHandler = (updatedData) => {
    const updatedPostData = createPostData.map((data) =>
      data.id === updatedData.id ? updatedData : data
    );

    localStorage.setItem("Post_Data", JSON.stringify(updatedPostData));
    setEditModalOpen(false);
  };

  const deleteHandler = () => {
    const filterData = createPostData.filter(
      (postId) => postId.id !== param.post_id
    );
    localStorage.setItem("Post_Data", JSON.stringify(filterData));
    navigate("/");
  };

  const backHandler = () => {
    navigate("..");
  };

  return (
    <>
      {editModalOpen && (
        <EditPopUp
          onConfirm={closeEditModel}
          PostData={PostData}
          onUpdate={updateDataHandler}
        />
      )}
      <div className="min-h-screen flex justify-center bg-gray-100">
        <div className="container mx-auto h-fit bg-white rounded-lg overflow-hidden shadow-2xl mt-5">
        {PostData && (
            <img
              className="w-full h-[500px]"
              src={PostData.image}
              alt="Post_image"
            />
          )}
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-2">{PostData?.title}</h1>
            <p className="text-gray-700 text-lg mb-4">{PostData?.description}</p>
            <div className="flex md:justify-end justify-center flex-wrap">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
                onClick={editHandler}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
                onClick={deleteHandler}
              >
                Delete
              </button>
              <button
                className="px-4 py-2 bg-yellow-500 text-white rounded-md"
                onClick={backHandler}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
