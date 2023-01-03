import { React ,useState} from "react";
import Signupform from "./Signupform";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../blendedsense/redux/actions/BsActions";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

function Signup() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
   
     const onFormSubmit = (event) => {
    console.log(event,'bobby');
  
    let data = { email: event[0].email, password: event[0].password };
    dispatch(login({ data, navigate}));
      
  };

  return (
    <div>
      <Signupform onSubmit={onFormSubmit} />
     
    </div>
  );
}

export default Signup;
