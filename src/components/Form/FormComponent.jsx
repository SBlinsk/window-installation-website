import { useState } from "react";

const Form = (classList) => {
  const [formData, setFormData] = useState({
    username: "",
    number: "",
  });
  const [alreadyCalled, setAlreadyCalled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.username, formData.number);
    setAlreadyCalled(true);
  };

  return (
    <form onSubmit={handleSubmit} className={"form main_form"+classList}>
            {alreadyCalled?<div className="text-uppercase btn-block button">Master has been called</div>:<div>      <h2>
        Make an appointment today
        <br />
        for a free measurement
      </h2>
      <input
        className="form-control form_input"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Your name"
      ></input>
      <input
        className="form-control form_input"
        type="text"
        name="number"
        value={formData.number}
        onChange={handleChange}
        placeholder="Your telephone number"
      ></input>
      <button className="text-uppercase btn-block button" type="submit">
        Call a surveyor
      </button></div>}

      <p className="form_notice">Your data will remain confidential </p>
    </form>
  );
};

export default Form;
