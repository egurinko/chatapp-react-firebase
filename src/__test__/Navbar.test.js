import React from "react";
import ReactDOM from "react-dom";

import sinon from "sinon";
import { expect } from "chai";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Navbar from "../components/Navbar";
import { RaisedButton, AppBar, Avatar } from "material-ui";

configure({ adapter: new Adapter() });

describe("The Navbar component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });

  it("renders itself", () => {
    expect(wrapper.find(".App-header").exists()).to.eql(true);
  });
  it("renders AppBar", () => {
    expect(wrapper.find(AppBar).exists()).to.eql(true);
  });
  it("renders Avatar after signIn is finished", () => {
    expect(wrapper.find(Avatar).exists()).to.eql(false);
    wrapper = shallow(<Navbar isSignIn={true} />);
    expect(wrapper.find(Avatar).exists()).to.eql(true);
  });
  it("renders two RaisedButton for Sign-in", () => {
    expect(wrapper.find(RaisedButton).length).to.eql(2);
  });
});
