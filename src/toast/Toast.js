//import "./blendedsense/blendedsense.css";
//import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

// //import Background from "./blendedsense/Background";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";
// import "./blendedsense/drop.css";

const ToastMessage= () => {
  swal("Hello world!");

  return (
    <div>
      <button onClick={wave}>login</button>
      <ToastContainer />
    </div>
  );
};
export default ToastMessage;
