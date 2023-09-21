import { useState } from "react";
import"./modal.css"

const Footage = ({ price }) => {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState();

  const onHandleChange = (e) => {
    const value = e.target.value;
    return setInputValue(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const areaSize = parseFloat(inputValue);

    if (isNaN(areaSize)) {
      return setResult("Вы ввели неверные данные, введите число");
    }
    return setResult(areaSize * price);
  };

  return (
    <div className="footage-container">
      <form onSubmit={onHandleSubmit}>
        <label>
          Enter the square footage of your apartment:
          <input type="text" value={inputValue} onChange={onHandleChange} />
        </label>
        <button type="submit">Calculate</button>
      </form>
      {result?<div className="result">The price will be {result} $</div>:null}
    </div>
  );
};

export default Footage;
