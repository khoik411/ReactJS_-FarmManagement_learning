import React, { useState, useEffect } from "react";
import axios from "axios";
import { EDIT, DELETE } from "./path";
import "./path";
import "./cultivation.css";
import { Link } from "react-router-dom";

import img1 from "./assets/img1.jpg";
import CultivationEdit from "./cultivationEdit";

function Cultivation({ data }) {
  const [DeleteDisabled, setDeleteDisabled] = useState(0);

  let typeDelete = true;
  useEffect(() => {
    let status = data[4];

    if (status === "ACTIVATED") {
      setDeleteDisabled(false);
    } else {
      setDeleteDisabled(true);
    }
  });

  const HandleAPIClick1 = async (e) => {
    const values = EDIT + data[0];
    console.log(values);
    axios
      .get(values)
      .then((res) => {
        console.log(res.data.data.id);
        typeDelete = false;
        console.log(typeDelete);
        console.log(this.CultiData);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const HandleAPIClick2 = async (e) => {
    const values = DELETE + data[0];
    console.log(values);
    axios
      .put(values)
      .then((res) => {
        console.log("success");
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div class="card bg-dark text-white">
      <div className="overflow">
        <img src={img1} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h4 class="card-title">{data[1]}</h4>
          <p class="card-text">Status: {data[4]} </p>
          <p class="card-text"> {data[2]}</p>
          <div class="card-body">
            <Link to={`dashboard/cultivation/edit/${data[0]}`}>
              <button
                href="#"
                className="btn btn-light "
                id="0"
                onClick={HandleAPIClick1}
              >
                Edit
              </button>
            </Link>
            <button
              disabled={DeleteDisabled}
              href="#"
              className="btn btn-light "
              id="1"
              onClick={HandleAPIClick2}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cultivation;
