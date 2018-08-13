import React from "react";
import { shallow } from "enzyme";
import { store } from "../../store/index";
import History from "../../components/History";
import Header from "../../components/Header";
import Home from "../../components/home";
import RequestPassword from "../../components/RequestPassword";
import PasswordReset from "../../components/ResetPassword";

// This tests render book history component
describe("BorrowHistory component", () => {
  it("Renders user borrow history component", () => {
    const wrapper = shallow(<History store={store} />);
    expect(wrapper).toHaveLength(1);
  });
});
// This tests render  navbar component
describe("Header component", () => {
  it("Renders navbar component", () => {
    const wrapper = shallow(<Header store={store} />).dive();
    expect(wrapper).toHaveLength(1);
  });
});

// This tests render request Password component
describe("Request Password component", () => {
  it("Renders request Password component", () => {
    const wrapper = shallow(<RequestPassword store={store} />).dive();
    expect(wrapper).toHaveLength(1);
  });
});
// This tests render Home component
describe("Home component", () => {
  it("Renders Home component", () => {
    const wrapper = shallow(<Home store={store} />);
    expect(wrapper).toHaveLength(1);
  });
});
// This tests render reset Password component
describe("Reset Password component", () => {
  it("Renders reset Password component", () => {
    const wrapper = shallow(<PasswordReset store={store} />).dive();
    expect(wrapper).toHaveLength(1);
  });
});
