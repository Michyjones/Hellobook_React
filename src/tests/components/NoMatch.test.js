import React from "react";
import { shallow } from "enzyme";
import { store } from "../../store/index";
import NoMatch from "../../components/NoMatch";

// This render Page not found component
describe("Page not found component", () => {
  it("Renders 404 error component", () => {
    const wrapper = shallow(<NoMatch store={store} />);
    expect(wrapper).toHaveLength(1);
  });
});
