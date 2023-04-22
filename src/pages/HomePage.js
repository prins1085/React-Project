import React from "react";
import Home from "../components/Home";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const posts = useLoaderData();
  return <Home posts={posts} />;
};

export default HomePage;

export async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
  } else {
    const resData = await response.json();
    return resData;
  }
}
