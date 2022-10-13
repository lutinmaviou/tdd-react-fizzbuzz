import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import fizzBuzz from './fizzBuzz';

function App() {
  useEffect(() => {
    fizzBuzz(1, 1);
  });
  return (
    <div className="App">
      <h1>TDD</h1>
    </div>
  );
}

export default App;
