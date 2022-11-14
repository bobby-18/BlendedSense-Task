import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

function Users() {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  if (auth) {
    navigate("/");
  }
  function handleClick() {
    setAuth(true);
      localStorage.removeItem("token");
      localStorage.removeItem("name");
  }
  return (
    <div>
      <h2>This is Users page</h2>
      <button className="back" onClick={handleClick}>
        logout
      </button>
    </div>
  );
}

export default Users;
