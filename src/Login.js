import React, { Component } from "react";
import history from "./history";
import AddUser from "./Redux-storage/action";
import store from "./Redux-storage/store";

class login extends Component {
  handlClick() {
    let user = document.getElementById("name").value;
    let password = document.getElementById("pwd1").value;
    store.dispatch(AddUser({ user, password }));
    if (user === "" || password === "")
      document.getElementById("display").innerHTML = "*Fill the data for login";
    else history.push("/list");
  }
  render() {
    return (
      <div>
        {" "}
        <h1>Login page</h1>
        <br />
        Enter user name :
        <input
          type="text"
          data-testid="user_name"
          placeholder="Enter user name here"
          id="name"
        />
        <br />
        Enter password :
        <input
          type="password"
          data-testid="password"
          placeholder="Enter Password here"
          id="pwd1"
        />
        <br />
        <b>
          <p id="display" data-testid="para"></p>
        </b>
        <br />
        <button data-testid="login_button" onClick={this.handlClick}>
          login
        </button>
      </div>
    );
  }
}

export default login;
