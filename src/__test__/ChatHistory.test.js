import React from "react";
import ReactDOM from "react-dom";

import sinon from "sinon";
import { expect } from "chai";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ChatHistory from "../components/ChatHistory";
import { Card, CardHeader, CardText } from "material-ui/Card";

configure({ adapter: new Adapter() });

describe("The ChatHistory component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ChatHistory />);
  });

  it("renders itself", () => {
    expect(wrapper.find(".Chat-History").exists()).to.eql(true);
  });
  it("renders Card", () => {
    expect(wrapper.find(Card).exists()).to.eql(true);
  });
  it("renders CardHeader", () => {
    expect(wrapper.find(CardHeader).exists()).to.eql(true);
  });
  it("renders CardHeader which has two props, titile and avatar", () => {
    expect(Object.keys(wrapper.find(CardHeader).props()).length).to.eql(2);
    expect(wrapper.find(CardHeader).props().title).to.eql(undefined);
    expect(wrapper.find(CardHeader).props().avatar).to.eql(null);
  });
  it("renders CardText", () => {
    expect(wrapper.find(CardText).exists()).to.eql(true);
  });
});
