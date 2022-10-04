import React from "react";
import { useState } from "react";
import Button from "../../../components/button/button.styled";
import Input from "../../../components/inputs/input/index";
import PasswordInput from "../../../components/inputs/passwordInput/index";
import CheckBox from "../../../components/checkbox/index";
import MetaMask from "../../../static/images/metamask.svg";
import CoinBaseWallet from "../../../static/images/coinbasewallet.svg";
import CoinBase from "../../../static/images/coinbase.svg";
import { Box } from "@mui/system";
import { AuthConnect } from "../style";

import { Row, Col } from "react-bootstrap";
import SignIn from "../index";
const Index = () => {
  const State = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const Country = [
    { value: "Pakistan", label: "Pakistan" },
    { value: "India", label: "India" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [value, setValue] = useState();
  return (
    <>
      <SignIn>
        <div className="auth-content">
          <div className="auth-heading">
            <h1>Sign In</h1>
            <p>Login with your email / phone and password. <i className="icon-info"></i></p>
          </div>
          <Box className="auth-content-top">
            <Input
              label="Email/Phone"
              placeholder="Email/Phone"
              size="medium"
            />
            <PasswordInput
              label="Password"
              placeholder="Password"
              inputStatus="Incorrect password!"
              status="danger" className="password-input-primary"
            />
            <label className="d-flex justify-content-end forgot-password-link">
              <a href="reset-password">Forget your password</a>
            </label>
          </Box>
          <Box className="auth-content-bottom">
            <div className="bottom-content">
              <Button
                variant="outlined"
                color="primary"
                size="large"
                className="auth-btn"
              >
                Login
              </Button>
              <AuthConnect>
                <p>
                  Connect with <i className="icon-info"></i>
                </p>
                <ul className="d-flex">
                  <li>
                    <a href="#">
                      <img src={MetaMask} />
                      <p>MetaMask</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={CoinBaseWallet} />
                      <p>Coinbase Wallet</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={CoinBase} />
                      <p>Coinbase</p>
                    </a>
                  </li>
                </ul>
              </AuthConnect>
              <div className="already-account">
                <label>
                  Already have an account! <a href="sign-in">Sign In</a>
                </label>
              </div>
            </div>
          </Box>
        </div>
      </SignIn>
    </>
  );
};
export default Index;
