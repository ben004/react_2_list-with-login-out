import React, { Component } from 'react'
import _ from 'lodash';
import history from './history'
let array=[];
export default class List extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      items: [],
      id:''
    }
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
      items
    });
  }
  delItem()
  { 
    let items = this.state.items
    let update=[]
    console.log("del function")
    console.log(array)
    //   eslint-disable-next-line
    update=_.pullAt(items,array);
    array=[];
    this.setState({
      items
    });
  }
  handlechange(e,id)
  {
    array.push(id)
    console.log("push function")
    console.log(array)
  }

  listItems() {
    let items = this.state.items;
    return (
      <ol>
        {
            
          items.map((val, id) => {
            return (
              <li key={id}>
                <input  type="checkbox" name="isDone"ref="check_me" checked={items.isDone} onChange={(e)=>this.handlechange(e,id)} />
                  {val}
              </li>
            );
          })
        }
      </ol>
      
    );
  }
handleLogout(){
    history.push('/')
}


    render() {
        return (
            <div>
              <table>
                <th><h1>This is your Dashboard</h1></th>
                <tr><input type="text" onChange={ (e) => this.onInputChange(e) } /></tr>
                <td><button onClick={ () => this.addItem() }>Add item</button></td>
                <td><button onClick={ () => this.delItem() }>delete item</button></td>
                <br/>
                <tr>{ this.listItems() }</tr>
                <br/>
                <button onClick={(e=>this.handleLogout(e))}>logout</button>
                </table>
            </div>
        )
    }
}

