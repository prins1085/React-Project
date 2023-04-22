import React from "react";

const Home = ({ posts }) => {
  return (
    <div className="md:mx-10 md:my-5">
      <h1 className="text-3xl font-bold mb-4">API Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="flex border border-black mb-4">
            <div className="flex-1 flex">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                alt={post.title}
                className="w-1/6 object-cover"
              />
              <div className="flex-1 p-2">
                <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                <time className="text-gray-600 max-w-prose text-ellipsis">{post.body}</time>
              </div>
            </div>
          </li>
        )).slice(0,10)}
      </ul>
    </div>
  );
};

export default Home;
