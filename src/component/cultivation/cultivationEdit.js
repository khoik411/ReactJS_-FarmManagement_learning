import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { EDIT, DELETE, PUT } from "./path";
import { Redirect, Link } from "react-router-dom";
import Creating from "./Creating";

// import "./login.css";

class CultivationEdit extends Component {
  state = {
    loggedIn: false,
    DataGet: {},
  };
  componentDidMount() {
    const values = EDIT + this.props.match.params.id;
    console.log(values);
    axios
      .get(values)
      .then((res) => {
        this.setState({ DataGet: res.data.data });
        console.log(this.state.DataGet);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  HandleEditSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id: this.props.match.params.id,
      name: this.Name,
      description: this.Description,
      note: this.Note,
    };
    console.log(data);

    const values = PUT + this.props.match.params.id;
    console.log(values);
    axios
      .put(values, data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if(loggedIn) {
    return <Redirect to={"/dashboard"} />;
  }

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.HandleEditSubmit}>
            <h3>Edit Cultivation</h3>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder={`${this.state.DataGet.name}`}
                onChange={(e) => (this.Name = e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                placeholder={`${this.state.DataGet.description}`}
                onChange={(e) => (this.Description = e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Note</label>
              <input
                type="text"
                className="form-control"
                placeholder={`${this.state.DataGet.note}`}
                onChange={(e) => (this.Note = e.target.value)}
              ></input>
            </div>

            {/* <Creating></Creating> */}
            <button className="btn btn-primary btn-block">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
export default CultivationEdit;
