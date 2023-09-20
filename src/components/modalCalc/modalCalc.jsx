import { useState } from "react";

const ModalCalc = ({ isOpen, price, onClose }) => {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState();

  const onHandleChange = (e) => {
    const value = e.target.value;
    return setResult(value);
  };
  const onClickClose = () => {
    onClose();
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const number = parseFloat(inputValue);
    if (isNaN(number)) {
      return setResult("Вы ввели неверные данные, введите число");
    }
    return setResult(number * price);
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <label>
          Enter the square footage of your apartment:
          <input type="text" value={inputValue} onChange={onHandleChange} />
        </label>
        <button type="submit">Calculate</button>
        <button type="close" onClick={() => onClickClose}>
          Close
        </button>
      </form>
      <div>{result}</div>
    </div>
  );
};

export default ModalCalc;
