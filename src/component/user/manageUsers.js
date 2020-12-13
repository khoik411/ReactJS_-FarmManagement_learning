import React, { useEffect } from "react";
import "./user.css";
import User from "./user";

const ManageUsers = ({ data, type }) => {
  const value = data;
  useEffect(() => {
    console.log(data);
  });

  return (
    <div className="row">
      {value.map(({ id, lastname, firstname, username, email, status }) => {
        return (
          <User data={[id, lastname, firstname, username, email, status]} />
        );
      })}
    </div>
  );
};
export default ManageUsers;
