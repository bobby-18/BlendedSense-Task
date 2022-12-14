import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { logout } from './redux/actions/BsActions';
import { useDispatch } from "react-redux";
function Setting() {
     const [auth, setAuth] = useState(false);
      const dispatch = useDispatch();
     const navigate=useNavigate();
     if(auth){
        navigate('/')
     }
    function handleClick(){
      setAuth(true)
        localStorage.removeItem("token");
     dispatch(logout());

     window.location.reload();
    }
  return (
    <div>
      <h5>This is settings page</h5>
      <button  className="back" onClick={handleClick}>logout</button>
    </div>
  )
}

export default Setting
