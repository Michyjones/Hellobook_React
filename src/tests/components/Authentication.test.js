
import React from "react";
import { shallow } from "enzyme";
import { store } from "../../store/index";
import Login from "../../components/LoginForm";
import Register from "../../components/RegisterForm";

describe("Register component", () => {
  it("Renders register component", () => {
    const wrapper = shallow(<Register store={store} />).dive();
    expect(wrapper).toHaveLength(1);
  });
});

describe("Login component", () => {
  it("Renders login component", () => {
    const wrapper = shallow(<Login store={store} />).dive();
    expect(wrapper).toHaveLength(1);
  });
});

