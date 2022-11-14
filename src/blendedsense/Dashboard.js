import React, { useState ,useEffect} from 'react'
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Dashboard() {
  const [auth,setAuth]=useState(false);
  const navigate=useNavigate()
  const[producer,setProducer]=useState(false);
  const[admin,setAdmin]=useState(false);
  
  function handleClick(){
    setAuth(true);
    localStorage.removeItem("token");
    localStorage.removeItem('name')
  }
  if (auth) {
    navigate("/");
  }
  const proadm=localStorage.getItem('name') 
  useEffect(() => {
    if (proadm === "producer") setProducer(true);
  },[proadm]);
   useEffect(() => {
     if (proadm === "admin") setAdmin(true);
   },[proadm]);
  return (
    <div className="dashboard">
      <div className={producer ? "block" : "hide"}>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </div>
      <div className={admin ? "block" : "hide"}>
        <ul>
          <li>
            <Link to="/Setting">Setting</Link>
          </li>
          <li>
            <Link to="/Users">Users</Link>
          </li>
        </ul>
      </div>
      <button className="back" onClick={handleClick}>
        logout
      </button>
    </div>
  );
}
export default Dashboard
