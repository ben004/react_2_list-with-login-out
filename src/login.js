import React, { Component } from 'react'
import history from './history'
export default class login extends Component {
   handlClick()
   {
       let usr=document.getElementById('name').value;
       let psd=document.getElementById('pwd1').value;
       if(usr==='beniel' && psd==='password')
        history.push('/list')
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
