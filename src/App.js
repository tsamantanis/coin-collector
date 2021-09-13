import { useState } from 'react';
import './App.css';

function App() {
  const [pennies, setPennies] = useState(0)
  const [nickles, setNickles] = useState(0)
  const [dimes, setDimes] = useState(0)
  const [quarters, setQuarters] = useState(0)

  const total = 0.01 * pennies + 0.05 * nickles + 0.1 * dimes + 0.25 * quarters
  return (
    <div className="row">
      <h1>Coin Collector!</h1>
      <h2>Total: $ {total.toFixed(2)}</h2>
      <div className="details">
        <span>Pennies: {pennies}</span>
        <span>Nickles: {nickles}</span>
        <span>Dimes: {dimes}</span>
        <span>Quarters: {quarters}</span>
      </div>
      <div className="buttons">
        <button
          onClick={() => setPennies(pennies + 1)}
        >
          $0.01
        </button>
        <button
          onClick={() => setNickles(nickles + 1)}
        >
          $0.05
        </button>
        <button
          onClick={() => setDimes(dimes + 1)}
        >
          $0.10
        </button>
        <button
          onClick={() => setQuarters(quarters + 1)}
        >
          $0.25
        </button>
      </div>
    </div>
  );
}

export default App;
