import React from "react";
import { useState } from "react";
import Button from "../../../components/button/button.styled";
import Input from "../../../components/inputs/input/index";
import PasswordInput from "../../../components/inputs/passwordInput/index";
import { Box } from "@mui/system";
import { AuthConnect } from "../style";
import { Row, Col } from 'react-bootstrap';
import ResetPassword from "../index";
const Index = () => {
  return (
    <>
      <ResetPassword>
      <div className="auth-content auth-topalign-content">
          <div className="auth-heading">
            <h1>Reset Password</h1>
            <p>Reset your password via registered email.</p>
          </div>
          <Box className="auth-content-top">
            <Input
              label="Email"
              placeholder="Email"
              size="medium"
            />
          </Box>
          <Box className="auth-content-bottom">
            <div className="bottom-content">
              <Button
                variant="outlined"
                color="primary"
                size="large"
                className="auth-btn"
              >
                Reset Password
              </Button>
              <div className="already-account">
                <label>
                Don’t have an account! <a href="sign-up">Sign Up</a>
                </label>
              </div>
            </div>
          </Box>
        </div>
      
      </ResetPassword>
    </>
  );
};
export default Index;
