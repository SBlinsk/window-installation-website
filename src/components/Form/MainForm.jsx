import { useState, useEffect } from "react";

const MainForm = (classList) => {
  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [alreadyCalled, setAlreadyCalled] = useState(false);
  const [dirtyInputName, setDirtyInputName] = useState(false);
  const [dirtyInputNumber, setDirtyInputNumber] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState(
    "Qty of sumbols must be more than 1"
  );
  const [numberErrorMessage, setNumberErrorMessage] = useState(
    "The telephone number must be a 10-digit number"
  );
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const[validName,setValidName] = useState(false)
  const [validNumber, setValidNumber] = useState(false)

  const onBlur = (event) => {
    switch (event.target.name) {
      case "userName":
        setDirtyInputName(true);
        break;
      case "userNumber":
        setDirtyInputNumber(true);
        break;
    }
  };

  const onHandleChange = (event) => {
    const value = event.target.value;
    switch (event.target.name) {
      case "userName":
        setUserName(value);
        if (value.length < 1) {
          setNameError(true);
          setValidName(false)
        } else {
          setNameError(false)
          setValidName(true);
        }
        break;
      case "userNumber":
        setUserNumber(value);
        const digitsOnly = value.replace(/\D/g, "");
        if (digitsOnly.length !== 10) {
          setNumberError(true)
          setValidNumber(false)
        } else {
          setNumberError(false)
          setValidNumber(true)
        }
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("We have rcvd userName and userNumber: ", userName, userNumber);
    setAlreadyCalled(true);
  };

  useEffect(() => {
    setButtonDisabled(!(validName && validNumber));
  }, [validName, validNumber]);


  return (
    <form onSubmit={handleSubmit} className={"form main_form" + classList}>
      {alreadyCalled ? (
        <div
          className="text-uppercase btn-block button"
          style={{ cursor: "default" }}
        >
          Master has been called
        </div>
      ) : (
        <div>
          <h2>
            Make an appointment today
            <br />
            for a free measurement
          </h2>

          <input
            className="form-control form_input"
            type="text"
            name="userName"
            value={userName}
            onBlur={onBlur}
            onChange={onHandleChange}
            placeholder="Your name"
          ></input>
          {dirtyInputName && nameError && (
            <div style={{ color: "red" }}>{nameErrorMessage}</div>
          )}

          <input
            className="form-control form_input"
            type="text"
            name="userNumber"
            value={userNumber}
            onBlur={onBlur}
            onChange={onHandleChange}
            placeholder="Your telephone number"
          ></input>
          {dirtyInputNumber && numberError && (
            <div style={{ color: "red" }}>{numberErrorMessage}</div>
          )}
          <button
            className="text-uppercase btn-block button"
            type="submit"
            disabled={buttonDisabled}
          >
            Call a surveyor
          </button>
        </div>
      )}

      <p className="form_notice">Your data will remain confidential </p>
    </form>
  );
};

export default MainForm;
