import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import Login from "./components/Login";
import HomePage from "./pages/HomePage";
import CreatePostForm from "./components/CreatePostForm";
import PostDetails from "./components/PostDetails";
import { checkCreateFormLoader, checkRoleLoader } from "./util/Auth";
import ExplorePostData from "./components/ExplorePostData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage />, loader: checkRoleLoader },
      { path: "login", element: <Login /> },
      {
        path: "create-post",
        element: <CreatePostForm />,
        // action: addPostDataAction,
        loader: checkCreateFormLoader,
      },
      {
        path: "post/:post_id",
        element: <PostDetails />,
        loader: checkRoleLoader,
      },
      {
        path: "explore-post",
        element: <ExplorePostData />,
        loader: checkRoleLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
