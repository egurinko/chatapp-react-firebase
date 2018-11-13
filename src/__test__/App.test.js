import React from "react";
import ReactDOM from "react-dom";

import sinon from "sinon";
import { expect } from "chai";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import Navbar from "../components/Navbar";
import ChatHistory from "../components/ChatHistory";

import MessageForm from "../components/MessageForm";

configure({ adapter: new Adapter() });

describe("The App component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders itself", () => {
    expect(wrapper.find(".App").exists()).to.eql(true);
  });
  it("has 6 initial state containing chat with [], isSignIn with false, user/user_id/photo/username with undefined", () => {
    wrapper = shallow(<App />);
    expect(Array.isArray(wrapper.state().chat)).to.eql(true);
    expect(wrapper.state().isSignIn).to.eql(false);
    expect(wrapper.state().user).to.eql(undefined);
    expect(wrapper.state().user_id).to.eql(undefined);
    expect(wrapper.state().photo).to.eql(undefined);
    expect(wrapper.state().username).to.eql(undefined);
  });
  it("makes a call to the componentDidMount", () => {
    sinon.spy(App.prototype, "componentDidMount");
    wrapper = shallow(<App />);
    expect(App.prototype.componentDidMount.calledOnce).to.eql(true);
  });

  it("renders Navbar", () => {
    expect(wrapper.find("Navbar").exists()).to.eql(true);
  });
  it("passes two state with isSignIn and photo", () => {
    wrapper = shallow(<App />);
    wrapper.setState({ photo: "photoURL" });
    expect(Object.keys(wrapper.find(Navbar).props()).length).to.eql(2);
    expect(wrapper.find(Navbar).props().isSignIn).to.eql(false);
    expect(wrapper.find(Navbar).props().photo).to.eql("photoURL");
  });

  it("renders MessageForm", () => {
    expect(wrapper.find(MessageForm).exists()).to.eql(true);
  });
  it("passes four states with username, user_id, photo, isSignIn", () => {
    wrapper = shallow(<App />);
    expect(Object.keys(wrapper.find(MessageForm).props()).length).to.eql(4);
    expect(wrapper.find(MessageForm).props().isSignIn).to.eql(false);
    expect(wrapper.find(MessageForm).props().photo).to.eql(undefined);
    expect(wrapper.find(MessageForm).props().user_id).to.eql(undefined);
    expect(wrapper.find(MessageForm).props().username).to.eql(undefined);
  });

  it("renders please Login if isSignIn is false", () => {
    wrapper = shallow(<App />);
    expect(
      wrapper
        .find(".App")
        .childAt(2)
        .text().length
    ).not.to.eql(0);
    wrapper.setState({ isSignIn: true });
    expect(
      wrapper
        .find(".App")
        .childAt(2)
        .text().length
    ).to.eql(0);
  });

  it("renders two ChatHistory", () => {
    wrapper = shallow(<App />);
    wrapper.setState({
      chat: [
        { messge: "A", photo: "B", username: "C" },
        { messge: "AA", photo: "BB", username: "CC" }
      ]
    });
    expect(wrapper.find(ChatHistory).length).to.eql(2);
  });
  it("passes five propss with key, message, senderPhoto,senderUsername, photo", () => {
    wrapper = shallow(<App />);
    wrapper.setState({
      chat: [
        { message: "A", photo: "B", username: "C" },
        { message: "AA", photo: "BB", username: "CC" }
      ]
    });
    expect(
      Object.keys(
        wrapper
          .find(ChatHistory)
          .first()
          .props()
      ).length
    ).to.eql(4);
    expect(
      wrapper
        .find(ChatHistory)
        .first()
        .props().message
    ).to.eql("A");
    expect(
      wrapper
        .find(ChatHistory)
        .first()
        .props().senderPhoto
    ).to.eql("B");
    expect(
      wrapper
        .find(ChatHistory)
        .first()
        .props().senderUsername
    ).to.eql("C");
  });
});
