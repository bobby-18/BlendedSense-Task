import React, { useState } from "react";
import Functionform from "./Functonform";
import Table from "./Table";
import { Link } from "react-router-dom";

const Form = () => {
  //const [errorMessage, setErrorMessage] = useState());
  const [values, setValues] = useState({
    username: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      label: "username",

      errorMessage:
        "username should be 4-15 characters and shouldn't include any special characters ",

      pattern: "^[A-Za-z0-9]{4,15}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true,
      label: "Email ",
      errorMessage: "Enter valid E-mail",
    },
    {
      id: 3,
      name: "dob",
      type: "date",
      label: "DOB ",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      required: true,
      placeholder: "password",
      label: "password ",
      errorMessage:
        "password should contain atleast 8 characters, min 1 Uppercase 1 Lowercase 1 Number 1 special character",
      pattern: `(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$`,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "confirmPassword",
      label: "confirm Password ",
      errorMessage: "password is not matched ",
      pattern: values.password,
      required: true,
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const [data, setData] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();

    if (
      values.password === values.confirmPassword &&
      values.username !== "" &&
      values.email !== "" &&
      values.password !== "" &&
      values.dob !== ""
    ) {
      const newData = {
        username: values.username,
        email: values.email,
        dob: values.dob,
        password: values.password,
        confirmPassword: values.confirmPassword,
      };
      setData(newData);
    } else {
      alert("bobby");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form>
          <h4>Register</h4>
          {inputs.map((input) => (
            <Functionform
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <button onClick={handleClick}>submit</button>
        </form>
        <br></br>
        <Table data={data} />
        <Link to="/" className="Link">
          Home
        </Link>
        <Link to="/Todo" className="Link">
          Todolist
        </Link>{" "}
        <Link to="/Pop" className="Link">
          Modal data
        </Link>
      </div>
    </div>
  );
};
export default Form;
