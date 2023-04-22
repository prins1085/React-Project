import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import Login from "./components/Login";
import HomePage, { loader as loadPosts } from "./pages/HomePage";
import CreatePostForm, {
  action as addPostDataAction,
} from "./components/CreatePostForm";
import { action as logoutAction } from "./pages/LogoutPage";
import PostDetails from "./components/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage />, loader: loadPosts },
      { path: "login", element: <Login /> },
      {
        path: "create-post",
        element: <CreatePostForm />,
        action: addPostDataAction,
      },
      { path: "post/:post_id", element: <PostDetails /> },
      { path: "logout", action: logoutAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
