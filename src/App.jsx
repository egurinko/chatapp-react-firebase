import React, { Component } from "react";
import MessageForm from "./components/MessageForm";
import ChatHistory from "./components/ChatHistory";
import Navbar from "./components/Navbar";
import "./css/App.css";

import { firebaseDb, firebaseAuth, cloudStorage } from "./firebase";

const dbRef = firebaseDb.ref("/posts");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: [],
      isSignIn: false,
      user: undefined,
      user_id: undefined,
      photo: undefined,
      username: undefined
    };
  }
  componentDidMount() {
    dbRef.limitToLast(20).on("value", snapshot => {
      this.setChat(snapshot.val());
    });
    firebaseAuth.onAuthStateChanged(this.setUser);
  }
  setChat = datas => {
    let final = [];
    for (let key in datas) {
      final.unshift(datas[key]);
    }
    this.setState({ chat: final });
  };
  setUser = user => {
    if (user) {
      this.setState({
        isSignIn: true,
        user: user,
        user_id: user.uid,
        photo: user.photoURL,
        username: user.displayName
      });
      return;
    }
    this.setState({
      isSignIn: false,
      user: undefined,
      user_id: undefined,
      photo: undefined,
      username: undefined
    });
  };
  render() {
    return (
      <div className="App">
        <Navbar isSignIn={this.state.isSignIn} photo={this.state.photo} />
        <MessageForm
          username={this.state.username}
          user_id={this.state.user_id}
          photo={this.state.photo}
          isSignIn={this.state.isSignIn}
        />
        {this.state.isSignIn ? <div /> : <div>Please Login First</div>}

        {this.state.chat.length !== 0 ? (
          this.state.chat.map((chat, index) => {
            return (
              <ChatHistory
                key={index}
                message={chat.message}
                senderPhoto={chat.photo}
                senderUsername={chat.username}
                photo={this.state.photo}
                postedPhotoUrl={chat.postedPhotoUrl}
              />
            );
          })
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default App;
