import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = () => {
  const data = useSelector((state) => state.token);
  return data ? <Navigate to="/Dashboard" /> : <Outlet />;
};

export default Protected;
