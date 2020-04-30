import React from "react";
import { shallow } from "enzyme";

import FibonacciComponent from "./FibonacciComponent";

describe("FibonacciComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<FibonacciComponent debug />);
    expect(component).toMatchSnapshot();
  });
});
