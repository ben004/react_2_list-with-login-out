import React, { Component } from 'react'
import _ from 'lodash';
import history from './history'
let array=[];
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      items: []
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
    update=_.pullAt(items,array);
    update.pop()
    array=[];
    this.setState({
      items
    });
  }
  handlechange(e,id)
  {
    array.push(id)
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
              
                <h1>This is your Dashboard</h1>
                <input type="text" onChange={ (e) => this.onInputChange(e) } />
                <button data-testid="add_button" onClick={ () => this.addItem() }>Add item</button>
                <button data-testid="delete_button" onClick={ () => this.delItem() }>delete item</button>
                <br/>
                { this.listItems() }
                <br/>
                <button data-testid="logout_button" onClick={(e=>this.handleLogout(e))}>logout</button>
                
            </div>
        )
    }
}

