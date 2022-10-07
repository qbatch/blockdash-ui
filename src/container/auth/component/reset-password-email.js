import React from "react";
import VerficationEmail from "../index";
import Verification from "../../../static/images/verification.svg";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
const Index = () => {
  let navigate = useNavigate();
  return (
    <>
      <VerficationEmail>
        <div className="auth-content auth-centered-content">
          <div className="auth-heading">
            <h1>Reset Password</h1>
            <p>
              We have sent you an email with verification link, please click on
              that link to proceed further.
            </p>
          </div>
          <Box className="auth-content-top">
            <div className="email-verification-image password-verification-image">
              <img src={Verification} alt="email verification" />
            </div>
            <div className="already-account email-receive">
              <label>
                Don’t receive the email <a href="#">Click Here</a>
              </label>
            </div>
          </Box>
          <Box className="auth-content-bottom">
            <div className="bottom-content">
              <div className="already-account">
                <label>
                  Don’t have an account! <a href="javascript:;" onClick={() => navigate("/auth/sign-up")}> Sign Up</a>
                </label>
              </div>
            </div>
          </Box>
        </div>
      </VerficationEmail>
    </>
  );
};
export default Index;
