import axios from "axios";
import React, { Component } from "react";
import * as pathAPI from "./path";
import { Redirect } from "react-router-dom";
import "./login.css";

class Login extends Component {
  state = {};
  handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: this.username,
      password: this.passWord,
    };
    console.log(data);

    await axios
      .post(pathAPI.LOGIN_API, data)
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
            <h3>Login</h3>
            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                onChange={(e) => (this.username = e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>password</label>
              <input
                type="password"
                className="form-control"
                placeholder="password"
                onChange={(e) => (this.passWord = e.target.value)}
              ></input>
            </div>

            <button className="btn btn-primary btn-block">login</button>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
