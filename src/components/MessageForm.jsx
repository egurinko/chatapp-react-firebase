import React, { Component } from "react";
import { firebaseDb, cloudStorage } from "../firebase";
import { TextField, RaisedButton, FloatingActionButton } from "material-ui";
import "../css/MessageForm.css";

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
    const file = document.getElementById("Message-file").files[0];
    console.log(file.name);
    e.preventDefault();
    const post = {
      user_id: this.props.user_id,
      message: this.state.message,
      username: this.props.username,
      photo: this.props.photo
    };
    firebaseDb
      .ref("/posts")
      .push(post)
      .then(postRef => {
        const path = `${post.user_id}/${postRef.key}/${file.name}`;
        return cloudStorage
          .ref(path)
          .put(file)
          .then(data => {
            return data.ref.getDownloadURL().then(url => {
              return postRef.update({
                postedPhotoUrl: url,
                storageUri: data.metadata.fullPath
              });
            });
          });
      });
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
        <FloatingActionButton style={style}>
          <input type="file" id="Message-file" />
        </FloatingActionButton>
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
