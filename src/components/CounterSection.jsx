// Demonstrates useState for a counter and a user-controlled update step.
import { useState } from 'react';

function CounterSection() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="counter-demo">
      <div className="counter-display" aria-live="polite">
        <span className="counter-label">CURRENT COUNT</span>
        <output className="counter-value" aria-label={`Current count: ${count}`}>{count}</output>
      </div>
      <div className="step-control">
        <label htmlFor="counter-step">Step size</label>
        <select id="counter-step" value={step} onChange={(event) => setStep(Number(event.target.value))}>
          {[1, 2, 5, 10].map((value) => <option key={value} value={value}>{value}</option>)}
        </select>
      </div>
      <div className="counter-actions" aria-label="Counter controls">
        <button className="button button-outline" type="button" onClick={() => setCount((value) => value - step)} aria-label={`Decrease by ${step}`}>− Decrease</button>
        <button className="button button-primary" type="button" onClick={() => setCount((value) => value + step)} aria-label={`Increase by ${step}`}>+ Increase</button>
        <button className="button button-quiet" type="button" onClick={() => setCount(0)}>Reset</button>
      </div>
      <p className="helper-text">Changing the step updates how much each click adds or subtracts.</p>
    </div>
  );
}

export default CounterSection;
