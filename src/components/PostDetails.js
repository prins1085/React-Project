import React from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const param = useParams();

  const createPostData = JSON.parse(localStorage.getItem("Post_Data"));

  const desiredObject = createPostData.find((obj) => obj.id === param.post_id);

  return (
    <div>
    PostDetails: {param.post_id}, {desiredObject.title}
    <img src={desiredObject.image} alt="check" />
  </div>
  );
};

export default PostDetails;
