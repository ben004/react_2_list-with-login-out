import React, { Component } from "react";
import _ from "lodash";
import history from "./history";
import { connect } from 'react-redux'
import { getUser } from './selector'
import './style.css'
let array = [];
class List extends Component {
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
              <li>
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
      <div className="main">
      <p>Hello {this.props.userName} !!!</p>
        <p>This is your Dashboard</p>
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
        <p>current user: {this.props.userName}</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userName: getUser(state)
  };
}
export default connect(mapStateToProps)(List)