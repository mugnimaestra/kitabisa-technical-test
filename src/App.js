import React from 'react';
import './App.css';
import SumComponent from './components/SumComponent';
import MultiplyComponent from './components/MultiplyComponent';
import PrimeComponent from './components/PrimeComponent';
import FibonacciComponent from './components/FibonacciComponent';

function App() {
  return (
    <div className="App">
      <h1>Kitabisa.com Technical Test</h1>
      <SumComponent />
      <MultiplyComponent />
      <PrimeComponent />
      <FibonacciComponent />
    </div>
  );
}

export default App;
