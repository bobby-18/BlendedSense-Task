import { Navigate, Outlet } from "react-router-dom";


const Protected = () => {
  const data = localStorage.getItem("token");   
   console.log(data)
  return data ? <Navigate to='/Dashboard'/>: <Outlet/>;
};

export default Protected;
