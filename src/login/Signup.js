import { React, useState } from "react";
import Signupform from "./Signupform";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../blendedsense/redux/actions/BsActions";


function Signup() {
  const [values] = useState({ formValues: " " });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    console.log(event,'bobby');
  
    let data = { email: event[0].email, password: event[0].password };
    dispatch(login({ data, navigate }));
      
  };

   const token = localStorage.getItem("token");
  if (token && isLoggedIn === true) {
     setIsLoggedIn(true); 
     console.log('dnwqkjddouwhd')
    navigate("/Dashboard");
  }

  return (
    <div>
      <Signupform onSubmit={onFormSubmit} />
     
    </div>
  );
}

export default Signup;
