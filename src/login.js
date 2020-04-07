import React, { Component } from 'react'
import history from './history'
import AddUser from './Redux-storage/action'
import { connect } from 'react-redux'
class login extends Component {
   handlClick({ dispatch } ,props)
   {
       let usr=document.getElementById('name').value;
       let psd=document.getElementById('pwd1').value;
       if(usr==='beniel' && psd==='password')
       {
           dispatch(AddUser(usr,psd))
           console.log(props.displayState)
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

const mapStateToProps = state => {
    return {
        displayState : state.map((user) => user.email)
    }
}
export default connect(mapStateToProps)(login)