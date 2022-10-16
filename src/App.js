import { useState } from 'react';
import './App.css';
import fizzBuzz from './fizzBuzz';

function App() {
  const [firstNb, setFirstNb] = useState();
  const [secondNb, setSecondNb] = useState();
  return (
    <div className="App">
      <div className="title">
        <h1>Purpose : Write FizzBuzz function in TDD</h1>
      </div>

      <main className="rules">
        <h2>Rules:</h2>
        <p>
          Write a program that returns the integers in a sequence between 1 and 100 with
          those conditions:
        </p>
        <ul>
          <li>For multiples of 3, replace the name with Fizz</li>
          <li>For multiples of 5, replace the name with Buzz</li>
          <li>For multiples of 15, replace the name with FizzBuzz</li>
        </ul>
      </main>
      <form className="form">
        <div className="nb">
          <label htmlFor="first-nb">Enter first number</label>
          <input
            type="text"
            id="first-nb"
            name="first-nb"
            onChange={(e) => setFirstNb(e.target.value)}
          />
        </div>
        <div className="nb">
          <label htmlFor="last-nb">Enter last number</label>
          <input
            type="text"
            id="last-nb"
            name="last-nb"
            onChange={(e) => setSecondNb(e.target.value)}
          />
        </div>
      </form>
      <p className="result">{fizzBuzz(firstNb, secondNb)}</p>
    </div>
  );
}

export default App;
