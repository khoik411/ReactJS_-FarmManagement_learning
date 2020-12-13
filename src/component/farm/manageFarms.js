import React, { useState, useEffect } from "react";
import "./farm.css";
import Farm from "./farm";

const ManageFarms = ({ data, type }) => {
  const farm = data;
  const Test = data[0];
  useEffect(() => {
    console.log(farm);
  });
  return (
    <div className="row">
      {farm.map(({ id, name, email, phone, status }) => {
        return <Farm data={[id, name, email, phone, status]} />;
      })}
    </div>
  );
};
export default ManageFarms;
