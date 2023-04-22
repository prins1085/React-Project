import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import Login from "./components/Login";
import HomePage from "./pages/HomePage";
import CreatePostForm, {
  action as addPostDataAction,
} from "./components/CreatePostForm";
import { action as logoutAction } from "./pages/LogoutPage";
import PostDetails from "./components/PostDetails";
import { checkRoleLoader } from "./util/Auth";

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
        action: addPostDataAction,
        loader: checkRoleLoader,
      },
      {
        path: "post/:post_id",
        element: <PostDetails />,
        loader: checkRoleLoader,
      },
      { path: "logout", action: logoutAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
