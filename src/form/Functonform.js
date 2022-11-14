import React, { useState } from "react";

const Functionform = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [blured, setBlured] = useState(false);
  const handleFocus = (e) => {
    setBlured(true);
  };
  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === "confirmPassword" && setBlured(true)}
        blured={blured.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};
export default Functionform;
