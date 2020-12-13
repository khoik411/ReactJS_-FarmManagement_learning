import axios from "axios";
import React, { Component } from "react";
import * as pathAPI from "./path";
import { Redirect } from "react-router-dom";
// import "./login.css";

class CreateCultivationStep extends Component {
  state = {};
  handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: this.username,
      password: this.passWord,
    };
    // console.log(data);

    await axios
      .post(pathAPI.CREATE_CULTIVATIONS, data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        this.setState({
          loggedIn: true,
        });
      })
      .catch((err) => {
        this.setState({
          loggedIn: false,
        });
        console.log(err);
      });
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to={"/dashboard"} />;
    }

    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.handleSubmit}>
            <h3>Create Cultivation</h3>
            <div className="form-group">
              <label>Applied Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Applied Number"
                onChange={(e) => (this.username = e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="description"
                onChange={(e) => (this.username = e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Interval</label>
              <input
                type="text"
                className="form-control"
                placeholder="Interval"
                onChange={(e) => (this.passWord = e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>name</label>
              <input
                type="text"
                className="form-control"
                placeholder="name"
                onChange={(e) => (this.passWord = e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>note</label>
              <input
                type="text"
                className="form-control"
                placeholder="note"
                onChange={(e) => (this.passWord = e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>ratings</label>
              <input
                type="text"
                className="form-control"
                placeholder="ratings"
                onChange={(e) => (this.passWord = e.target.value)}
              ></input>
            </div>

            <button className="btn btn-primary btn-block">Create</button>
          </form>
        </div>
      </div>
    );
  }
}
export default CreateCultivationStep;
