import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
   <Fragment>
    <header className="flex justify-between bg-gray-200 py-4 px-6">
        <div className="text-xl font-bold"><Link to="">Project Name</Link></div>
        <div className="flex gap-7">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Explore Post</Link>
            <Link to="/" className="text-gray-700 hover:text-gray-900">Created Post</Link>
            <Link to="/login" className="text-gray-700 hover:text-gray-900">Login</Link>
        </div>
        <div><Link to="/">Logout</Link></div>
      
    </header>
   </Fragment>
  );
};

export default MainNavigation;
