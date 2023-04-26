import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutPopUp from "./UI/LogoutPopUp";

const MainNavigation = () => {
  const [logoutPopUpOpen, setLogoutPopUpOpen] = useState(false);
  const [logoutDropdownOpen, setLogoutDropdownOpen] = useState(false);
  const storedData = localStorage.getItem("login_data");
  const parsedData = JSON.parse(storedData);
  const role = parsedData?.role;

  const navigate = useNavigate();

  const logoutHandler = () => {
    setLogoutPopUpOpen(true);
    setLogoutDropdownOpen(false);
  };

  const LogoutAction = () => {
    localStorage.removeItem("login_data");
    setLogoutPopUpOpen(false);
    navigate("/login");
  };

  const closeLogoutPopUp = () => {
    setLogoutPopUpOpen(false);
  };

  const toggleLogout = () => {
    setLogoutDropdownOpen(!logoutDropdownOpen);
  };

  return (
    <Fragment>
      {logoutPopUpOpen && (
        <LogoutPopUp onCancel={closeLogoutPopUp} onConfirm={LogoutAction} />
      )}
      <header className="flex justify-between bg-gray-300 py-4 md:px-6">
        <div className="text-xl font-bold">
          <Link to="">Project Name</Link>
        </div>
        <div className="flex gap-7">
          <Link
            to="/explore-post"
            className="text-gray-700 hover:text-gray-900"
          >
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

        <div className="relative">
          {role ? (
            <img
              src="https://freesvg.org/img/abstract-user-flat-4.png"
              alt="profile icon"
              className="w-8 h-8 bg-transparent cursor-pointer"
              onClick={toggleLogout}
            />
          ) : (
            <Link to="/login" className="text-gray-700 hover:text-gray-900">
              Login
            </Link>
          )}
          {logoutDropdownOpen && (
            <div className="absolute mt-2 right-0 bg-white rounded-md shadow-lg">
              <button
                onClick={logoutHandler}
                className=" px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>
    </Fragment>
  );
};

export default MainNavigation;
