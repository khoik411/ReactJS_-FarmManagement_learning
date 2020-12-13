import React from "react";
import "./dashboard.css";

const Sidebar = ({ HandleAPIClick }) => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="2"
              aria-current="page"
              href="#"
              onClick={HandleAPIClick}
            >
              <span data-feather="home"></span>
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="0" href="#" onClick={HandleAPIClick}>
              <span data-feather="file"></span>
              Manage User
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="1" href="#" onClick={HandleAPIClick}>
              <span data-feather="shopping-cart"></span>
              Manage Farms
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="2" href="#" onClick={HandleAPIClick}>
              <span data-feather="shopping-cart"></span>
              Manage Process
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Sidebar;
