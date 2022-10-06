import React from "react";
import { useState } from "react";
import Button from "../../../components/button/button.styled";
import Select from "../../../components/select/index";
import Input from "../../../components/inputs/input/index";
import PasswordInput from "../../../components/inputs/passwordInput/index";
import PhoneInput from "../../../components/inputs/phoneInput/index";
import CheckBox from "../../../components/checkbox/index";
import MetaMask from "../../../static/images/metamask.svg";
import CoinBaseWallet from "../../../static/images/coinbasewallet.svg";
import CoinBase from "../../../static/images/coinbase.svg";
import { Box } from "@mui/system";
import { AuthConnect } from "../style";

import { Row, Col } from "react-bootstrap";
import SignUp from "../index";
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
      <SignUp>
        <div className="auth-content">
          <div className="auth-heading">
            <h1>Sign Up</h1>
            <p>Create your login with email or sms <i className="icon-info"></i></p>
          </div>
          <Box className="auth-content-top">
            <Input
              label="Email/Phone"
              placeholder="Your Email/Phone"
              size="medium"
            />
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
              <Button variant="outlined" className="w-100" color="primary" size="large">
                Register
              </Button>
              <AuthConnect>
                <p>Connect with <i className="icon-info"></i></p>
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
      </SignUp>
    </>
  );
};
export default Index;
