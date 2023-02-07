import { useState, useEffect } from "react";

function Form() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormValues(initialValues);
    }
  }, [[formErrors]]);
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "please provide title";
    }

    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label style={{ fontSize: "10px", fontWeight: 600 }}>Title*</label>
            <br />
            <input
              style={{ width: "100%", height: "25px" }}
              type="text"
              name="username"
              placeholder=""
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red", fontSize: "10px" }}>
            {formErrors.username}
          </p>
          {/* <button className="fluid ui button blue">Submit</button> */}
        </div>
      </form>
    </div>
  );
}
export default Form;
