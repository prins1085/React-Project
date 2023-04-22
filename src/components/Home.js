import React, { Fragment } from "react";
import ExplorePostData from "./ExplorePostData";
import CreatePostData from "./CreatePostData";

const Home = ({posts}) => {
  return (
    <Fragment>
      <CreatePostData />
      <ExplorePostData posts={posts}/>
    </Fragment>
  );
};

export default Home;
