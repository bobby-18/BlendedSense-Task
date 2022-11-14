import { React, useState } from "react";
import axios from "axios";
import Signupform from "./Signupform";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../blendedsense/redux/actions/BsActions";

function Signup() {
  const [values] = useState({ formValues: " " });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    console.log(event);

    let data = { email: event[0].email, password: event[0].password };
    dispatch(login({data}));
    axios
      .post("https://stage.blendedsense.com/api/login", data)
      .then((response) => {
        console.log(response.data.token);
        console.log(response.data.user.role.name);
        localStorage.setItem("token", response.data.token);
         localStorage.setItem("name", response.data.user.role.name);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
        swal(
          "Invalid email address or password. ",
          " please try again later",
          "error"
        );
      });
  };

  const data = localStorage.getItem("token");
  if (data && isLoggedIn === true) {
    navigate("/Dashboard");
  }
  return (
    <div>
      <Signupform onSubmit={onFormSubmit} />
     
    </div>
  );
}

export default Signup;
