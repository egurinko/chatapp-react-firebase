import React, { Component } from "react";
import { firebaseDb } from "../firebase";
import { TextField, RaisedButton } from "material-ui";

const style = {
  margin: 12
};
const testStyle = {
  margin: 12,
  width: 500
};

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      isInputExist: false
    };
  }
  sendToDb = e => {
    e.preventDefault();
    const post = {
      user_id: this.props.user_id,
      message: this.state.message,
      username: this.props.username,
      photo: this.props.photo
    };
    firebaseDb.ref("/posts").push(post);
    this.setState({ message: "" });
    return false;
  };
  setMessage = e => {
    const message = e.target.value;
    const isInputExist = !(message.length === 0);
    this.setState({ message, isInputExist });
  };
  render() {
    return (
      <div className="Message-Form">
        <TextField
          hintText="Message Here"
          onChange={this.setMessage}
          style={testStyle}
        />
        <RaisedButton
          label="Send"
          style={style}
          onClick={this.sendToDb}
          disabled={!this.state.isInputExist || !this.props.isSignIn}
        />
      </div>
    );
  }
}

export default MessageForm;
