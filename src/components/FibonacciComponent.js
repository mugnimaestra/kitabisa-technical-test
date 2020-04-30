import React from "react";
import styled from "styled-components";
import { findFibonnaciNum } from "../lib";

const FibonacciComponentStyle = styled.div`
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

const FibonacciComponent = () => {
  const firstInput = React.useRef();
  const [result, setResult] = React.useState([]);
  const handleInput = (e) => {
    if (e.target.maxLength) {
      if (e.target.value.length > e.target.maxLength) {
        e.target.value = e.target.value.slice(0, e.target.maxLength);
      }
    }
    if (e.target.value > 50) {
      e.target.value = 50;
    }
    if (e.target.value < 0) {
      e.target.value = 0;
    }
    if (firstInput.current.value === "") {
      return;
    }
    setResult(findFibonnaciNum(firstInput.current.value));
  };
  return (
    <FibonacciComponentStyle>
      <h3>Find the first N Fibonacci sequence, and print the result</h3>
      <div className="wrapper">
        <div className="input-container">
          <label htmlFor="firstInput">Input N Number</label>
          <input
            type="number"
            name="firstInput"
            placeholder="Positive number (max 50)"
            ref={firstInput}
            onChange={handleInput}
            maxLength="2"
          />
        </div>
        <div className="text-container">
          <div>Result:</div>
          <span>
            {result.length === 1
              ? result
              : result.map((num, index) => (
                  <>
                    {num}
                    {result.length - 1 === index ? "" : ", "}
                  </>
                ))}
          </span>
        </div>
      </div>
    </FibonacciComponentStyle>
  );
};

export default FibonacciComponent;
