import React, { useState, useEffect } from "react";

const ExplorePostData = () => {
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const searchHandler = (event) => {
    setSearchTitle(event.target.value);
}

const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTitle.toLowerCase()));


const ellipsisBody = (body, bodylength) => {
  if (body.length <= bodylength) {
    return body;
  } else {
    return body.slice(0, bodylength) + "...";
  }
};
  return (
    <div className="md:mx-10 my-10 mx-3 ">
        <div className="flex justify-between flex-wrap">
          <div>
      <h1 className="text-3xl font-bold mb-4">Explore Posts</h1></div>
      <div className="mb-2">
    
      <input
        className="border rounded py-2 px-3"
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        value={searchTitle}
        onChange={searchHandler}
      />
    </div>
     </div>
      <ul>
        {filteredPosts
          .map((post) => (
            <li key={post.id} className="flex border border-black mb-4">
              <div className="flex-1 flex flex-wrap">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                  alt={post.title}
                  className="md:w-52 object-cover sm:w-full"
                />
                <div className="flex-1 p-2">
                  <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                  <div className="text-gray-600">
                  {ellipsisBody(post.body, 120)}
                  </div>
                </div>
              </div>
            </li>
          ))
          .slice(0, 10)}
      </ul>
    </div>
  );
};

export default ExplorePostData;
