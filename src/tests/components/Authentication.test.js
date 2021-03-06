
import React from "react";
import { shallow } from "enzyme";
import { store } from "../../store/index";
import Login from "../../components/LoginForm";
import Register from "../../components/RegisterForm";

// This tests render user authentication(register)
describe("Register component", () => {
  it("Renders register component", () => {
    const wrapper = shallow(<Register store={store} />).dive();
    expect(wrapper).toHaveLength(1);
  });
});
// This tests render user authentication(login)
describe("Login component", () => {
  it("Renders login component", () => {
    const wrapper = shallow(<Login store={store} />).dive();
    expect(wrapper).toHaveLength(1);
  });
});

