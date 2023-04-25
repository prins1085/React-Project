import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  const storedData = localStorage.getItem("login_data");
  const parsedData = JSON.parse(storedData);
  const role = parsedData?.role;


  const logoutHandler = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if(confirmLogout){

        localStorage.removeItem('login_data');
    }
  }

  return (
    <Fragment>
      <header className="flex justify-between bg-gray-300 py-4 md:px-6">
        <div className="text-xl font-bold">
          <Link to="">Project Name</Link>
        </div>
        <div className="flex gap-7">
          <Link to="/explore-post" className="text-gray-700 hover:text-gray-900">
            Explore Post
          </Link>
          {role === "admin" && (
            <Link
              to="/create-post"
              className="text-gray-700 hover:text-gray-900"
            >
              Created Post
            </Link>
          )}
        </div>

        <div>
          {role ? (
           <button onClick={logoutHandler}>Logout</button>
          ) : (
            <Link to="/login" className="text-gray-700 hover:text-gray-900">
              Login
            </Link>
          )}
        </div>
      </header>
    </Fragment>
  );
};

export default MainNavigation;
