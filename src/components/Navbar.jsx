import React, { Component } from "react";
import "../css/App.css";
import firebase from "firebase";
import { RaisedButton, AppBar, Avatar } from "material-ui";
import { firebaseAuth } from "../firebase";

const buttonStyle = {
  margin: 12
};
const avatarStyle = { margin: 10 };

class Navbar extends Component {
  handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebaseAuth.signInWithRedirect(provider);
  };
  handleSignOut = () => {
    firebaseAuth.signOut();
  };
  render() {
    const isSignIn = this.props.isSignIn;
    return (
      <div className="App-header">
        <AppBar title="React-Firebase-ChatApp">
          {isSignIn ? (
            <Avatar src={this.props.photo} style={avatarStyle} />
          ) : (
            <div />
          )}

          <RaisedButton
            label="Sign-In"
            disabled={isSignIn}
            onClick={this.handleSignIn}
            style={buttonStyle}
          />
          <RaisedButton
            label="Sign-Out"
            disabled={!isSignIn}
            onClick={this.handleSignOut}
            style={buttonStyle}
          />
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
