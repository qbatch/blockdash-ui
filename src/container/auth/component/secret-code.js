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
            <h1>Enter your Secret Code </h1>
          </div>
          <Box className="auth-content-top">
            <div className="secret-code">
              
            </div>
          </Box>
          <Box className="auth-content-bottom">
            <div className="bottom-content">
              <Button
                variant="outlined"
                color="primary"
                size="large"
                className="auth-btn"
              >
                Verify
              </Button>
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
