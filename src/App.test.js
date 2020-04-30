import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { mount } from 'enzyme';
import { sumNum, multiplyNum, findPrimeNum, findFibonnaciNum } from './lib';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('logic algorithm test', () => {
  it("sum x & y", () => {
    expect(sumNum(1, 2)).toEqual(3);
    expect(sumNum(4, 5)).toEqual(9);
    expect(sumNum(123, 234)).toEqual(357)
  });

  it('multiply x & y', () => {
    expect(multiplyNum(1, 2)).toEqual(2);
    expect(multiplyNum(2, 5)).toEqual(10);
    expect(multiplyNum(25, 8)).toEqual(200);
  });

  it('should find the first N prime number as Array', () => {
    expect(findPrimeNum(4)).toEqual([2, 3, 5, 7]);
    expect(findPrimeNum(10)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    expect(findPrimeNum(15)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
  });

  it('should find the first N fibonnaci sequence as Array', () => {
    expect(findFibonnaciNum(4)).toEqual([0, 1, 1, 2]);
    expect(findFibonnaciNum(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(findFibonnaciNum(12)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
  })
})

describe('testing the whole app',() => {
   it("renders without crashing", () => {
     mount(<App />);
   });
})