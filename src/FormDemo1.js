import React, { Component } from "react";
import alertify from "alertifyjs";

export default class FormDemo1 extends Component {
  state = {
    userName: "",
    city: "",
    phone: "",
  };

  onChangeHandler = (event) => {
    //this.setState({ userName: event.target.value });
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    if (
      this.state.userName !== "" &&
      this.state.city !== "" &&
      this.state.phone !== ""
    ) {
      alertify.success(
        "Informations Successfully Saved! Welcome to system " +
          this.state.userName
      );
    } else {
      alertify.error("You need to fill all informations!");
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h3
            style={{
              color: "lightblue",
              border: "1px black solid",
              borderRadius: "5px",
              textAlign: "center",
              padding: "0.5rem",
              marginBottom: "2rem",
            }}
          >
            Fill Your Information
          </h3>

          <h4>Username: {this.state.userName}</h4>
          <input
            name="userName"
            onChange={this.onChangeHandler}
            type="text"
            placeholder="User Name:"
          ></input>

          <h4>City: {this.state.city}</h4>
          <input
            name="city"
            onChange={this.onChangeHandler}
            type="text"
            placeholder="City"
          ></input>

          <h4>Phone: {this.state.phone}</h4>
          <input
            name="phone"
            onChange={this.onChangeHandler}
            type="number"
            placeholder="Phone Number"
          ></input>
          <h1 style={{ marginBottom: "2rem" }}> </h1>

          <input type="submit" value="Save" className="btn btn-info"></input>
        </form>
      </div>
    );
  }
}
