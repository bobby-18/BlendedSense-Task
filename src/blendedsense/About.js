import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
function About() {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  if (auth) {
    navigate("/");
  }
  function handleClick() {
    setAuth(true);
    localStorage.removeItem("token");
    localStorage.removeItem('name')
  }
  return (
    <div>
      <h3>This is About page</h3>
      <button className="back" onClick={handleClick}>
        logout
      </button>
    </div>
  );
}

export default About
