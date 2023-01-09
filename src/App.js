import "./blendedsense/blendedsense.css";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./blendedsense/drop.css";
import "./blendedsense/businesses/businesses.css";
import Background from "./blendedsense/Background";
import Dashboard from "./blendedsense/Dashboard";
import Daashboard from "./blendedsense/Daashboard";
import PrivateRoutes from "./blendedsense/PrivateRoutes";
import Protected from "./blendedsense/Ranbhir";
import { refresh } from "./blendedsense/redux/actions/BsActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SweepBlocks from "./blendedsense/SweepBlocks";
import Sweepblocks from "./blendedsense/Sweep";
import SweepDetails from "./blendedsense/SweepDetails";
import Businesses from "./blendedsense/businesses/Businesses";
import BusinessSweeps from "./blendedsense/businesses/BusinessSweeps";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(refresh({ token }));
  });
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/Dashboard" element={<Dashboard />}>
              <Route path="" element={<Daashboard />}></Route>
              <Route path="projects" element={<Businesses />}></Route>
              <Route
                path="/Dashboard/project_overview/:sweepid"
                element={<BusinessSweeps />}
              ></Route>
              <Route path="SweepBlocks" element={<SweepBlocks />}>
                <Route path="" element={<Sweepblocks />}></Route>
                <Route path="SweepDetails" element={<SweepDetails />}></Route>
              </Route>
            </Route>
          </Route>
          <Route element={<Protected />}>
            <Route exact path="/" element={<Background />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
