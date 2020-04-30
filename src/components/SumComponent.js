import React from 'react';
import styled from 'styled-components';
import { sumNum } from '../lib';

const SumComponentStyle = styled.div`
  margin: 0 auto;
  max-width: 400px;
  text-align: left;
  .input-container {
    max-width: 50%;
    padding: 0 0.75rem;
    input {
      margin: 0.25rem 0 1rem;
    }
  }
  .text-container {
    max-width: 50%;
    padding: 0 0.75rem;
  }
  .wrapper {
    display: flex;
    margin: 0 -0.75rem;
  }
`;

const SumComponent = () => {
  const firstInput = React.useRef();
  const secondInput = React.useRef();
  const [result, setResult] = React.useState(0);
  const handleFirstInput = (e) => {
    if (e.target.maxLength) {
      if (e.target.value.length > e.target.maxLength) {
        e.target.value = e.target.value.slice(0, e.target.maxLength);
      }
    }
    if (firstInput.current.value === '' || secondInput.current.value === '') {
      return
    }
    setResult(sumNum(firstInput.current.value, secondInput.current.value));
  }
  const handleSecondInput = (e) => {
    if (e.target.maxLength) {
      if (e.target.value.length > e.target.maxLength) {
        e.target.value = e.target.value.slice(0, e.target.maxLength);
      }
    }
    if (firstInput.current.value === "" || secondInput.current.value === "") {
      return;
    }
    setResult(sumNum(firstInput.current.value, secondInput.current.value));
  };
  return (
    <SumComponentStyle>
      <h3>Sum X & Y, and print the result!</h3>
      <div className="wrapper">
        <div className="input-container">
          <div>
            <label htmlFor="firstInput">First Input</label>
            <input type="number" name="firstInput" placeholder="1, 3, 5 (max 7 digits)" ref={firstInput} onChange={handleFirstInput} maxLength="7" />
          </div>
          <div>
            <label htmlFor="firstInput">Second Input</label>
            <input type="number" name="secondInput" placeholder="1, 3, 5 (max 7 digits)" ref={secondInput} onChange={handleSecondInput} maxLength="7" />
          </div>
        </div>
        <div className="text-container">
          <div>Result:</div>
          <span>{result}</span>
        </div>
      </div>

    </SumComponentStyle>
  );
}

export default SumComponent;