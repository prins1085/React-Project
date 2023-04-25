import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditPopUp from "./UI/EditPopUp";

const CreatePostData = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [PostData, setPostData] = useState([]);
  const createPostData = JSON.parse(localStorage.getItem("Post_Data")) || [];

  const navigate = useNavigate();

  const editHandler = (Id) => {
    setPostData(createPostData.find((obj) => obj.id === Id));
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
  const deleteHandler = (Id) => {
    console.log(Id);
    const filterData = createPostData.filter((postId) => postId.id !== Id);
    console.log(filterData);
    localStorage.setItem("Post_Data", JSON.stringify(filterData));
    navigate("/");
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
      <div className="md:mx-10 my-5 mx-3 ">
        <h1 className="text-3xl font-bold mb-4">Created Posts</h1>
        {createPostData.length > 0 ? (
          <ul>
            {createPostData.map((postData) => (
              <li key={postData.id} className="flex border border-black mb-4">
                <Link to={`post/${postData.id}`}>
                  <div className="flex-1 flex flex-wrap">
                    <img
                      src={postData.image}
                      alt={postData.title}
                      className="md:w-52 object-cover sm:w-full"
                    />
                    <div className="flex-1 p-2">
                      <h2 className="text-lg font-semibold mb-2">
                        {postData.title}
                      </h2>
                      <div className="text-gray-600 max-w-prose text-ellipsis">
                        {postData.description}
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="flex flex-wrap items-center">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 h-fit"
                    onClick={() => {
                      editHandler(postData.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md mr-2 h-fit"
                    onClick={() => {
                      deleteHandler(postData.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Posts Created.</p>
        )}
      </div>
    </>
  );
};

export default CreatePostData;
