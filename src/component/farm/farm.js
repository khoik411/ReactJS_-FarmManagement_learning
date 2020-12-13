import React, { useState, useEffect } from "react";
import axios from "axios";
import img1 from "./assets/img1.jpg";
import { ACTIVE, APPROVE, REJECT, DELETE } from "./path";
import "./path";
import "./farm.css";

function Farm({ data }) {
  const [statusState, setStatusState] = useState(data[4]);

  const [ActiveDisabled, setActiveDisabled] = useState(0);
  const [DeleteDisabled, setDeleteDisabled] = useState(0);
  const [ApproveDisabled, setApproveDisabled] = useState(0);
  const [RejectDisabled, setRejectDisabled] = useState(0);
  useEffect(() => {
    let status = data[4];
    if (status === "ACTIVATED") {
      setActiveDisabled(true);
      setApproveDisabled(true);
      setRejectDisabled(true);
      setDeleteDisabled(false);
    } else if (status === "APPROVED") {
      setActiveDisabled(false);
      setDeleteDisabled(false);
      setApproveDisabled(true);
      setRejectDisabled(true);
    } else {
      setActiveDisabled(false);
      setDeleteDisabled(false);
      setApproveDisabled(false);
      setRejectDisabled(false);
    }
  });
  const HandleAPIClick = async (e) => {
    const listAPI = [ACTIVE, APPROVE, REJECT, DELETE];
    e.preventDefault();
    const clickValue = e.target.id;
    const values = listAPI[clickValue] + data[0];
    setStatusState(listAPI[clickValue]);

    axios
      .put(values)
      .then((res) => {
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
          <p class="card-text">Phone number: {data[3]}</p>
          <div class="card-body">
            <button
              disabled={ActiveDisabled}
              href="#"
              className="btn btn-light "
              id="0"
              onClick={HandleAPIClick}
            >
              Active
            </button>
            <button
              disabled={ApproveDisabled}
              href="#"
              className="btn btn-light "
              id="1"
              onClick={HandleAPIClick}
            >
              Approve
            </button>
            <button
              disabled={RejectDisabled}
              href="#"
              className="btn btn-light "
              id="2"
              onClick={HandleAPIClick}
            >
              Reject
            </button>
            <button
              disabled={DeleteDisabled}
              href="#"
              className="btn btn-light "
              id="3"
              onClick={HandleAPIClick}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Farm;
