import React from "react";
import { Link, Redirect } from "react-router-dom";

const Nav = () => {
  const logoutClick = () => {
    localStorage.removeItem("token");
  };
  return (
    <div>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          Process Admin
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <Link to="/" className="nav-link" onClick={logoutClick}>
              Log out
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
export default Nav;
