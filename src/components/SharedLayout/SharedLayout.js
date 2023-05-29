import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
        <ul>
          <li>
          <NavLink to="/">Home</NavLink>
          </li>
          <li>
          <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
        <main>
          <Outlet />
        </main>
    </div>
  );
};

export default SharedLayout;