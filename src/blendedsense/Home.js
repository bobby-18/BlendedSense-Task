import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "./redux/actions/BsActions";
import { useDispatch } from "react-redux";
import { refresh } from "./redux/actions/BsActions";
function Home() {
  const [auth, setAuth] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (auth) {
    navigate("/");
   
  }
  function handleClick() {
    setAuth(true);
    localStorage.removeItem("token");
    dispatch(logout());
    window.location.reload();
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(refresh({ token }));
    
  }, [dispatch]);
  return (
    <div className="home">
      <h5>This is Home page</h5>
      <button className="back" onClick={handleClick}>
        logout
      </button>
    </div>
  );
}

export default Home;
