import { useState } from "react";
import "./modal.css";

const Footage = ({ price }) => {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState();
  const [error, setError] = useState(null);

  const onHandleChange = (e) => {
    const value = e.target.value;
    isNaN(value) ? setError("Error! You must set a number") : setError(null);
    return setInputValue(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    return setResult(areaSize * price);
  };

  const desabledButton = error ? true : false;

  return (
    <div className="footage-container">
      <form onSubmit={onHandleSubmit}>
        <label>
          Enter the square footage of your apartment:
          <input type="text" value={inputValue} onChange={onHandleChange} />
        </label>
        <button type="submit" disabled={desabledButton}>
          Calculate
        </button>
      </form>
      {error ? <span style={{ color: "red" }}>{error}</span> : null}
      {result ? (
        <div className="result">The price will be {result} $</div>
      ) : null}
    </div>
  );
};

export default Footage;
