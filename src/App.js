import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import Login from "./components/Login";
import HomePage from './pages/HomePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <Login /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
