import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom';
function Home() {
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
    <div className="home">
      <h3>This is Home page</h3>
      <button className="back" onClick={handleClick}>
        logout
      </button>
    </div>
  );
}

export default Home
