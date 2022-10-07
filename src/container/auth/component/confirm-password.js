import React from "react";
import Button from "../../../components/button/button.styled";
import PasswordInput from "../../../components/inputs/passwordInput/index";
import { Box } from "@mui/system";
import ConfirmEmail from "../index";
import { useNavigate } from "react-router-dom";
const Index = () => {
  let navigate = useNavigate();
  return (
    <>
      <ConfirmEmail>
        <div className="auth-content auth-topalign-content">
          <div className="auth-heading">
            <h1>New Password</h1>
            <p>Type your new password.</p>
          </div>
          <Box className="auth-content-top">
            <PasswordInput
              strength
              barColors={[
                "#FF7B00",
                "#FF7B00",
                "#FF7B00",
                "#FF7B00",
                "#13D802",
              ]}
              label="Password"
              placeholder="Password"
              className="password-input-primary"
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm Password"
              inputStatus="Password matched."
              status="success"
            />
          </Box>
          <Box className="auth-content-bottom">
            <div className="bottom-content">
              <Button
                className="w-100"
                variant="outlined"
                color="primary"
                size="large"
              >
                Confirm Password
              </Button>
              <div className="already-account">
                <label>
                  Don’t have an account! <a href="javascript:;" onClick={() => navigate("/auth/sign-up")}>Sign Up</a>
                </label>
              </div>
            </div>
          </Box>
        </div>
      </ConfirmEmail>
    </>
  );
};
export default Index;
