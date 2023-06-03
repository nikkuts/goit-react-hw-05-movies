import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import css from './SharedLayout.module.css';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;

const SharedLayout = () => {
  return (
    <div>
        <ul className={css.nav}>
          <li>
          <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
          <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </ul>
        <hr></hr>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
    </div>
  );
};

export default SharedLayout;