import React from "react";
import { shallow } from "enzyme";

import PrimeComponent from "./PrimeComponent";

describe("PrimeComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<PrimeComponent debug />);
    expect(component).toMatchSnapshot();
  });
});
