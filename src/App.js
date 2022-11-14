import "./blendedsense/blendedsense.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import "./blendedsense/drop.css";
import Background from "./blendedsense/Background";
import Dashboard from "./blendedsense/Dashboard";
import Home from "./blendedsense/Home";
import About from "./blendedsense/About";
import PrivateRoutes from "./blendedsense/PrivateRoutes";
import  Protected from "./blendedsense/Ranbhir";
import Setting from "./blendedsense/Setting";
import Users from "./blendedsense/Users";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Setting" element={<Setting />}></Route>
            <Route path="/Users" element={<Users />}></Route>
          </Route>
          <Route element={<Protected />}>
            <Route exact path="/" element={<Background />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App