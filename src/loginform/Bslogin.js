import React,{useState} from "react";
import Signup from "../login/Signup";
import { Modal } from "antd";
import "antd/dist/antd.css";
function Bslogin() {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const showModal = () => {
     setIsModalOpen(true);
   };


   const handleCancel = () => {
     setIsModalOpen(false);
   };
  return (
    <div className="loginform">
      <div className="loginwrap">
        <div>
          <img
            src="https://stage.blendedsense.com/img/logo-colored.55621aa1.svg"
            alt="logo"
            className="logo"
          />
        </div>
        <div className="login">
          <p>LOGIN</p>
        </div>

        <div className="with">
          <a
            href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Fstage.blendedsense.com%2Fapi%2Fauth%2Fgoogle%2Fcallback%2F&scope=profile%20email&client_id=1039348288543-67adf4dge4ahhlji5panuf3s8s9luqc5.apps.googleusercontent.com&flowName=GeneralOAuthFlow"
            className="link"
          >
            <button className="button">
              <div className="google-flex">
                <span>
                  <img
                    className="google"
                    src="https://stage.blendedsense.com/img/google.19b04ead.svg"
                    alt="google"
                  />
                </span>
                <p className="continue">Continue with Google</p>
              </div>
            </button>
          </a>
        </div>
     
        <span className="or">or</span>
        <div className="sign">
          <Signup />
        </div>
        <>
          <button className="forgot-password" onClick={showModal}>
            Forgot Password?
          </button>
          <Modal open={isModalOpen} onCancel={handleCancel}>
            <p className="h">recovery password</p>
            <p className="t">
              Enter the email address associated with your account
            </p>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="email-address"
              style={{
                width: "80%",
                fontSize: "10px",
                paddingTop: "5px",
                paddingBottom: "5px",
                paddingLeft: "8px",
                borderColor: "black",
              }}
            />
          </Modal>
        </>

        <div className="need">
          <p className="need-acn">Need an account?</p>
          <a
            href="https://stage.blendedsense.com/onboarding/role"
            className="s-up"
          >
            sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Bslogin;
