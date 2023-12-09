import { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import Results from "./components/Results/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 18000,
    annualInvestment: 1200,
    expectedReturn: 9,
    duration: 6,
  });

  const isValidInput = userInput.duration >= 1;

  function handleValueChange(inputId, newValue) {
    setUserInput((previousInputs) => {
      return {
        ...previousInputs,
        [inputId]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleValueChange} />
      {isValidInput ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">Please enter at least one year</p>
      )}
    </>
  );
}

export default App;
