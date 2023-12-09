import "./Result.css";
import { calculateInvestmentResults, formatter } from "../../util/investment";

export default function Results({ userInput }) {
  const result = calculateInvestmentResults(userInput);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].annualInvestment - result[0].interest;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {...result.map((yearData) => {
          const totalInterestEarned =
            yearData.valueEndOfYear -
            initialInvestment -
            yearData.annualInvestment * yearData.year;
          const totalAmountInvested =
            yearData.valueEndOfYear - totalInterestEarned;

          return (
            <tr key={yearData.year}>
              <th>{yearData.year}</th>
              <th>{formatter.format(yearData.valueEndOfYear)}</th>
              <th>{formatter.format(yearData.interest)}</th>
              <th>{formatter.format(totalInterestEarned)}</th>
              <th>{formatter.format(totalAmountInvested)}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
