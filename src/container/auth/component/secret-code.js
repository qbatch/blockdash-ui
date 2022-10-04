import React from "react";
import Button from "../../../components/button/button.styled";
import VerficationEmail from "../index";
import Verification from "../../../static/images/verification.svg";
import VerificationInput from "react-verification-input";
import { Box } from "@mui/system";
import { AuthConnect } from "../style";
const Index = () => {
  return (
    <>
      <VerficationEmail>
        <div className="auth-content auth-topalign-content">
          <div className="auth-heading">
            <h1>Enter your Secret Code </h1>
          </div>
          <Box className="auth-content-top">
            <div className="secret-code">
                <VerificationInput length={4} />
            </div>
          </Box>
          <Box className="auth-content-bottom">
            <div className="bottom-content">
              <Button
                variant="outlined"
                color="primary"
                size="large"
              >
                Verify
              </Button>
              <div className="already-account">
                <label>
                Didn’t get a code? <a href="#">Click to resend</a>
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
