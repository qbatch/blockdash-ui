import React from "react";
import Button from "../../../components/button/button.styled";
import Input from "../../../components/inputs/input/index";
import { Box } from "@mui/system";
import ResetPassword from "../index";
import { useNavigate } from "react-router-dom";
const Index = () => {
  let navigate = useNavigate();
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
                className="auth-btn w-100"
              >
                Reset Password
              </Button>
              <div className="already-account">
                <label>
                Don’t have an account! <a href="javascript:;" onClick={() => navigate("/auth/sign-up")}>Sign Up</a>
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
