import React, { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <Fragment>
      <MainNavigation />
      <Outlet />
    </Fragment>
  );
};

export default Root;
