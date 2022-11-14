// import React,{useState} from "react";
// import { AiFillEyeInvisible, AiOutlineEye } from "react-icons/ai"
//  {
//   const [passwordType, setPasswordType] = useState("password");
//   const [passwordInput, setPasswordInput] = useState("");
//   const handlePasswordChange = (evnt) => {
//     setPasswordInput(evnt.target.value);
//   };
//   const togglePassword = () => {
//     if (passwordType === "password") {
//       setPasswordType("text");
//       return;
//     }
//     setPasswordType("password");
//   };
//   return (
//     <div className="form-row">
//       <div className="mb-3">
//         <div className="d-flex">
//           <input
//             type={passwordType}
//             onChange={handlePasswordChange}
//             value={passwordInput}
//             name="password"
//             class="form-control"
//             placeholder="Password"
//             className="password"
//           />

//           <div className="passwordtoggle">
//             <button className="passwordtoggle-btn" onClick={togglePassword}>
//               {passwordType === "password" ? (
//                 <AiFillEyeInvisible />
//               ) : (
//                 <AiOutlineEye />
//               )}
//             </button>
//           </div>
//         </div>
//         {/* <p classNamTogglee="text-danger">{passwordError}</p> */}
//       </div>
//     </div>
//   );
// }
// export default ShowAndHidePassword;
import React, { Component } from 'react'

export default class Toggle extends Component {
constructor(){
    super();
{
    passWordType={this.passWordType
}
}

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
