import React, { Component } from 'react'
import history from './history'
import AddUser from './Redux-storage/action'
import store from './Redux-storage/store'

export default class login extends Component {
   handlClick()
   {
       let user=document.getElementById('name').value;
       let password=document.getElementById('pwd1').value;
       AddUser({user,password})
       store.dispatch(AddUser({user,password}))
       if(user==='beniel' && password==='password')
       { 
           history.push('/list')
       }
       else
        alert("worng data")
   }
    render() {
        return (
            <div> <h1>Login page</h1><br />
                Enter user name :<input type="text" placeholder="Enter user name here" id="name"  /><br/>
                Enter password  :<input type="password" placeholder="Enter Password here" id="pwd1"  /><br/>
               <button onClick={(e)=>this.handlClick(e)}>login</button>
            </div>
        )
    }
}