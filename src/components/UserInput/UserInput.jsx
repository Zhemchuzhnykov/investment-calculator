import "./UserInput.css";
import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100000,
    annualInvestment: 10000,
    expectedReturn: 100,
    duration: 1,
  });

  function handleValueChange(inputId, newValue) {
    setUserInput((previousInputs) => {
      return {
        ...previousInputs,
        [inputId]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) =>
              handleValueChange("initialInvestment", e.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) =>
              handleValueChange("annualInvestment", e.target.value)
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) =>
              handleValueChange("expectedReturn", e.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) => handleValueChange("duration", e.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
