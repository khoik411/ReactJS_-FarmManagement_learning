import axios from "axios";
import React, { Component } from "react";
import "./dashboard.css";
import * as PathAPI from "./path";
import * as TypeSelection from "./type";
import Nav from "../Nav";
import Sidebar from "./Sidebar";
import ManageFarms from "../farm/manageFarms";
import ManageUsers from "../user/manageUsers";
import ManageCultivations from "../cultivation/manageCultivation";

class Dashboard extends Component {
  state = {
    data: [],
    type: [],
    ACCOUNTS: false,
    FARMS: false,
    CULTIVATION: false,
    value: null,
  };
  componentDidMount() {
    console.log("dashboard log !");
  }
  // typeComp = [
  //   TypeSelection.GET_ACCOUNTS,
  //   TypeSelection.GET_FARMS,
  //   TypeSelection.GET_CULTIVATION,
  // ];
  HandleAPIClick = async (e) => {
    const listAPI = [
      PathAPI.GET_USERS,
      PathAPI.GET_FARMS,
      PathAPI.GET_CULTIVATIONS,
    ];

    e.preventDefault();
    const clickValue = e.target.id;
    const values = listAPI[clickValue];
    if (clickValue == 0) {
      this.setState({ ACCOUNTS: true });
      this.setState({ FARMS: false });
      this.setState({ CULTIVATION: false });
    } else if (clickValue == 1) {
      this.setState({ ACCOUNTS: false });
      this.setState({ FARMS: true });
      this.setState({ CULTIVATION: false });
    } else {
      this.setState({ ACCOUNTS: false });
      this.setState({ FARMS: false });
      this.setState({ CULTIVATION: true });
    }
    console.log(values);
    this.setState({ value: values });

    axios
      .get(values, {
        headers: {
          Authorization: "Bearer  " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        this.setState({ data: res.data.data.content });
      })
      .catch((error) => {});
  };

  render() {
    if (this.state.ACCOUNTS) {
      return (
        <div className="App">
          <Nav />
          <Sidebar HandleAPIClick={this.HandleAPIClick} />
          <ManageUsers data={this.state.data} type={this.state.type} />
        </div>
      );
    } else if (this.state.FARMS) {
      return (
        <div className="App">
          <Nav />
          <Sidebar HandleAPIClick={this.HandleAPIClick} />
          <ManageFarms data={this.state.data} type={this.state.type} />
        </div>
      );
    } else if (this.state.CULTIVATION) {
      return (
        <div className="App">
          <Nav />
          <Sidebar HandleAPIClick={this.HandleAPIClick} />
          <ManageCultivations data={this.state.data} type={this.state.type} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Nav />
          <Sidebar HandleAPIClick={this.HandleAPIClick} />
        </div>
      );
    }
  }
}
export default Dashboard;
