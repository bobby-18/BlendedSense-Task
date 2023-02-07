import { React } from "react";
import Signupform from "./Signupform";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../blendedsense/redux/actions/BsActions";
// import { LoadingOutlined } from "@ant-design/icons";
// import { Spin } from "antd";
import { toast } from "react-toastify";
// import swal from "sweetalert";
function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function showToastMessage() {
    toast.success("Success Notification!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: true,
    });

    console.log("login success");
  }
  const onFormSubmit = (event) => {
    let data = { email: event[0].email, password: event[0].password };
    dispatch(login({ data, navigate, showToastMessage }));
  };

  return (
    <div>
      <Signupform onSubmit={onFormSubmit} />
    </div>
  );
}

export default Signup;
