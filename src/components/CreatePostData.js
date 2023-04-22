import React from "react";
import { Link } from "react-router-dom";

const CreatePostData = () => {
  const createPostData = JSON.parse(localStorage.getItem("Post_Data")) || [];

  return (
    <div className="md:mx-10 my-5 mx-3 ">
      <h1 className="text-3xl font-bold mb-4">Created Posts</h1>
      {createPostData.length > 0 ? (
        <ul>
          {createPostData.map((postData) => (
            <Link to={`post/${postData.id}`}>
              <li key={postData.id} className="flex border border-black mb-4">
                <div className="flex-1 flex">
                  <img
                    src={postData.image}
                    alt={postData.title}
                    className="w-1/6 object-cover"
                  />
                  <div className="flex-1 p-2">
                    <h2 className="text-lg font-semibold mb-2">
                      {postData.title}
                    </h2>
                    <time className="text-gray-600 max-w-prose text-ellipsis">
                      {postData.description}
                    </time>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <p>No Posts Created.</p>
      )}
    </div>
  );
};

export default CreatePostData;
