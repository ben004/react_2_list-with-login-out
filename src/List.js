import React, { Component } from "react";
import _ from "lodash";
import history from "./history";
let array = [];
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      items: [],
    };
  }

  onInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  addItem() {
    let items = this.state.items;
    items.push(this.state.inputValue);
    this.setState({
      items,
    });
  }
  delItem() {
    let items = this.state.items;
    _.pullAt(items, array);
    array = [];
    this.setState({
      items,
    });
  }
  clear() {
    this.setState({
      items: [],
    });
  }

  listItems() {
    let items = this.state.items;
    return (
      <ol>
        <label data-testid="values">
        {items.map((val, id) => {
          return (
              <li key={id}>
                <input
                  type="checkbox"
                  onChange={() => {
                    array.push(id);
                  }}
                  checked={_.includes(array, id)}
                />
                {val}
              </li>
          );
        })}</label>
      </ol>
    );
  }
  handleLogout() {
    history.push("/");
  }

  render() {
    return (
      <div>
        <h1>This is your Dashboard</h1>
        <input
          type="text"
          data-testid="data"
          value={this.state.inputValue}
          onChange={(e) => this.onInputChange(e)}
        />

        <button data-testid="add_button" onClick={() => this.addItem()}>
          Add item
        </button>
        <button data-testid="delete_button" onClick={() => this.delItem()}>
          delete item
        </button>
        <br />
        <br />
        <button data-testid="clear_button" onClick={() => this.clear()}>
          Clear item
        </button>
        <br />
        {this.listItems()}
        <br />
        <button
          data-testid="logout_button"
          onClick={(e) => this.handleLogout(e)}
        >
          logout
        </button>
      </div>
    );
  }
}
