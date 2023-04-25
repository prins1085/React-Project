import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutPopUp from "./UI/LogoutPopUp";

const MainNavigation = () => {
  const [logoutPopUpOpen, setLogoutPopUpOpen] = useState(false);
  const storedData = localStorage.getItem("login_data");
  const parsedData = JSON.parse(storedData);
  const role = parsedData?.role;

  const navigate = useNavigate();


  const logoutHandler = () => {
    setLogoutPopUpOpen(true);
   
  }

  const LogoutAction = () => {
    localStorage.removeItem('login_data');
    setLogoutPopUpOpen(false);
    navigate('/login');

  }

  const closeLogoutPopUp = () => {
    setLogoutPopUpOpen(false);
  }

  return (
    <Fragment>
      {logoutPopUpOpen && <LogoutPopUp onCancel={closeLogoutPopUp} onConfirm={LogoutAction}/>}
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
