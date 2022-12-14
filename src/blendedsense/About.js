import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "./redux/actions/BsActions";
import { useDispatch } from "react-redux";
function About() {
  const [auth, setAuth] = useState(false);
    const dispatch = useDispatch();
  const navigate = useNavigate();
  if (auth) {
    navigate("/");
  }
  function handleClick() {
    setAuth(true);
    localStorage.removeItem("token");
       window.location.reload();
       dispatch(logout());
  }
  return (
    <div>
      <h5>This is About page</h5>
      <button className="back" onClick={handleClick}>
        logout
      </button>
    </div>
  );
}

export default About
