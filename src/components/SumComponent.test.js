import React from 'react';
import { shallow } from 'enzyme';

import SumComponent from './SumComponent';

describe('SumComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<SumComponent debug />);
    expect(component).toMatchSnapshot();
  });
})