import React, { Component } from 'react'
import history from "./history"
import { connect } from "react-redux";
import { getUser , profile } from "./selector";
import "./style.css"
class Profile extends Component {
    handleBackToList(){
        history.push("/list")
    }
    handleLogout(){
        history.push("/")
    }
    render() {
        return (
            <div>
                <div className="main">
                    <b>Your Profile</b>
                    <p > userName : {this.props.userName}</p>
                    profile Picture :<br/> <img src={this.props.profile} alt="profile"/>
                </div>
                <div className="back">
                    <button onClick={this.handleBackToList}>  Back </button><br/><br/>
                </div>
                <div className="logout">
                    <button  onClick={this.handleLogout}> Logout  </button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      userName: getUser(state),
      profile : profile(state)
    };
  }
  export default connect(mapStateToProps)(Profile)