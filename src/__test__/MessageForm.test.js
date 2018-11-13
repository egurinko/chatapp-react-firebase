import React from "react";
import ReactDOM from "react-dom";

import sinon from "sinon";
import { expect } from "chai";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MessageForm from "../components/MessageForm";
import { TextField, RaisedButton } from "material-ui";

configure({ adapter: new Adapter() });

describe("The MessageForm component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MessageForm />);
  });

  it("renders itself", () => {
    expect(wrapper.find(".Message-Form").exists()).to.eql(true);
  });
  it("has initial states, message with empty string and isInputExist with false", () => {
    expect(wrapper.state().message).to.eql("");
    expect(wrapper.state().isInputExist).to.eql(false);
  });

  it("renders TextField", () => {
    expect(wrapper.find(TextField).exists()).to.eql(true);
  });
  it("renders TextField which notice text change by onChange and reflect it to state", () => {
    wrapper
      .find(TextField)
      .simulate("change", { target: { value: "my new value" } });
    expect(wrapper.state().message).to.eql("my new value");
  });

  it("renders RaisedButton", () => {
    expect(wrapper.find(RaisedButton).exists()).to.eql(true);
  });
});
