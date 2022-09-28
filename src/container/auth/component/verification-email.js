import React from "react";
import Button from "../../../components/button/button.styled";
import VerficationEmail from "../index";
import Verification from "../../../static/images/verification.svg";
import { Box } from "@mui/system";
import { AuthConnect } from "../style";
const Index = () => {
  return (
    <>
      <VerficationEmail>
        <div className="auth-content auth-centered-content">
          <div className="auth-heading">
            <h1>Verify your email</h1>
            <p>
              We have sent you an email with verification link, please click on
              that link to proceed further.
            </p>
          </div>
          <Box className="auth-content-top">
            <div className="email-verification-image">
              <img src={Verification} alt="email verification" />
            </div>
          </Box>
          <Box className="auth-content-bottom">
            <div className="bottom-content">
              <div className="already-account">
                <label>
                  Don’t received an email <a href="#">Click Here</a>
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
