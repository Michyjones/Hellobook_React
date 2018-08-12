import React from "react";
import { shallow } from "enzyme";
import { store } from "../../store/index";
import Views from "../../components/viewbooks";
import singleBook from "../../components/singleBook";

describe("SingleBook component", () => {
  const param = {
    params: {
      id: 1
    }
  };
  it("Renders SingleBook component", () => {
    const wrapper = shallow(<singleBook params={{ param }} store={store} />);
    expect(wrapper).toHaveLength(1);
  });
});
describe("Books component", () => {
  it("Renders all book component", () => {
    const wrapper = shallow(<Views store={store} />);
    expect(wrapper).toHaveLength(1);
  });
});

// describe('Book component', () => {
//   it('Renders book component', () => {
//     const wrapper = shallow(<singleBook store={store} />);
//     expect(wrapper).toHaveLength(1);
//   });
// });


