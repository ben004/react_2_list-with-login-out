import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import login from "./Login";
import List from "./List";
import { Provider } from "react-redux";
import store from "./Redux-storage/store";
import Profile from "./Profile"
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={login}></Route>
            <Route exact path="/list" component={List}></Route>
            <Route exact path="/profile" component={Profile}></Route>
          </Switch>
        </Provider>
      </div>
    );
  }
}
