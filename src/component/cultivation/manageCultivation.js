import React, { useEffect } from "react";
import Cultivation from "./cutivation";
import { Redirect, Link } from "react-router-dom";

const ManageCultivations = ({ data, type }) => {
  const value = data;
  useEffect(() => {
    // console.log(data);
    // console.log("content log");
  });

  return (
    <div className="row">
      <Link to="/dashboard/create-cultivation">
        <button href="#" className="btn btn-light ">
          Create Cultivation
        </button>
      </Link>
      {value.map(({ id, name, description, note, status }) => {
        return <Cultivation data={[id, name, description, note, status]} />;
      })}
    </div>
  );
};
export default ManageCultivations;
