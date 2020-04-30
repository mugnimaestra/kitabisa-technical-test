import React from "react";
import { shallow } from "enzyme";

import MultiplyComponent from "./MultiplyComponent";

describe("MultiplyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MultiplyComponent debug />);
    expect(component).toMatchSnapshot();
  });
});