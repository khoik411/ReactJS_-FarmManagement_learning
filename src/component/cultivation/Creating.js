import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./cultivation.css";
import * as GET_API from "./path";
import axios from "axios";

export default class Creating extends Component {
  handleSave = async (e) => {
    e.preventDefault();
    const data = {
      appliedNumber: this.appliedNumber,
      description: this.description,
      interval: this.interval,
      name: this.name,
      note: this.note,
      ratings: this.ratings,
    };
    console.log(data);

    await axios
      .post(GET_API.CREATE_CULTIVATION_STEP, data)
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
    this.setState({ open: false });
  };

  state = {};
  // const data = {};

  handleChange1 = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  handleChange2 = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  // const handleSave = () => {
  //   setOpen(false);
  // };
  render() {
    return (
      <div className="step">
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Create Cultivation Step
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Create Cultivation Step
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Input information of Cultivation Step
            </DialogContentText>
            <TextField onChange={this.handleChange1} placeholder="afterDays" />
            <TextField
              onChange={this.handleChange2}
              placeholder="description"
            />
            <TextField
              onChange={this.handleChange1}
              placeholder="cultivationProcessId"
            />
            <DialogContentText></DialogContentText>
            <TextField onChange={this.handleChange1} placeholder="name" />
            <TextField onChange={this.handleChange1} placeholder="note" />
            <TextField onChange={this.handleChange1} placeholder="nextStepId" />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSave} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
