import React, { Fragment } from "react";
import { Form, Link } from "react-router-dom";

const MainNavigation = () => {
  const storedData = localStorage.getItem("login_data");
  const parsedData = JSON.parse(storedData);
  const role = parsedData?.role;
  console.log(role);

  return (
    <Fragment>
      <header className="flex justify-between bg-gray-300 py-4 md:px-6">
        <div className="text-xl font-bold">
          <Link to="">Project Name</Link>
        </div>
        <div className="flex gap-7">
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            Explore Post
          </Link>
          {role === "admin" ? (
            <Link
              to="/create-post"
              className="text-gray-700 hover:text-gray-900"
            >
              Created Post
            </Link>
          ) : (
            <Link to="/" className="text-gray-700 hover:text-gray-900" disabled>
              Created Post
            </Link>
          )}

          <Link to="/login" className="text-gray-700 hover:text-gray-900">
            Login
          </Link>
        </div>

        <div>
          <Form action="/logout" method="post">
            <button>Logout</button>
          </Form>
        </div>
      </header>
    </Fragment>
  );
};

export default MainNavigation;
