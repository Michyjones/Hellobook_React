import React from "react";
import { shallow } from "enzyme";
import { store } from "../../store/index";
import Create from "../../components/addbook";
import EditBook from "../../components/editbook";

// This tests render create book component
describe("AddBook component", () => {
  it("Renders add book component", () => {
    const wrapper = shallow(<Create store={store} />).dive();
    expect(wrapper).toHaveLength(1);
  });
});

// This tests render edit book component
describe("EditBook component", () => {
  const param = {
    params: {
      id: 1
    }
  };
  it("Renders edit book component", () => {
    const wrapper = shallow(
      <EditBook params={{ param }} store={store} />
    );
    expect(wrapper).toHaveLength(1);
  });
});