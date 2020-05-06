import React, { Component } from "react";
import history from "./history";
import AddUser from "./Redux-storage/action";
import store from "./Redux-storage/store";
import "./style.css";
import ImageCrop from './ImageCrop'

class login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userProfilePic: "",
      editor: null,
      scaleValue: 1,
    };
  }

  setEditorRef = (editor) => this.setState({ editor });

  onCrop = () => {
    const { editor } = this.state;
    if (editor !== null) {
      const url = editor.getImageScaledToCanvas().toDataURL();
      this.setState({ userProfilePic: url });
    }
  };

  onScaleChange = (scaleChangeEvent) => {
    const scaleValue = parseFloat(scaleChangeEvent.target.value);
    this.setState({ scaleValue });
  };
  profilePicChange = (fileChangeEvent) => {
    const file = fileChangeEvent.target.files[0];
    const { type } = file;
    if (
      !(
        type.endsWith("jpeg") ||
        type.endsWith("png") ||
        type.endsWith("jpg") ||
        type.endsWith("gif")
      )
    ) {
    } else {
      this.setState({
        openCropper: true,
        selectedImage: fileChangeEvent.target.files[0],
        fileUploadErrors: [],
      });
    }
  };
  handlClick() {
    let user = document.getElementById("name").value;
    let password = document.getElementById("pwd1").value;
    let profile=this.state.userProfilePic;
    store.dispatch(AddUser({ user, password ,profile }));
    if (user === "" || password === "")
      document.getElementById("display").innerHTML = "*Fill the data for login";
    else history.push("/list");
  }
  render() {
    return (
      <div className="main">
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
        <br /><br/>
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
        <input type="file" name="profilePicBtn" accept="image/png, image/jpeg" onChange={this.profilePicChange} />
       <ImageCrop
          imageSrc={this.state.selectedImage}
          setEditorRef={this.setEditorRef}
          onCrop={this.onCrop}
          scaleValue={this.state.scaleValue}
          onScaleChange={this.onScaleChange}
        />
        <br />
        <button data-testid="login_button" onClick={(e)=>this.handlClick(e)}>
          login
        </button>
      </div>
    );
  }
}

export default login;
