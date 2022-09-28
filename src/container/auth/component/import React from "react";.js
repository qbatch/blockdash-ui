import React from "react";
import Button from "../../../components/button/button.styled";
import Input from "../../../components/inputs/input/index";
import {Row,Col} from 'react-bootstrap';
import PasswordInput from '../../../components/inputs/passwordInput/index'
import SignIn from "../index";
const Index = () => {
  return (
    <>
      <SignIn>
         <h1 className="title">Login to use your business potential!</h1>
         <Row>
          <Col md={12}>
         <Input label="User Name" placeholder="User Name" />
         </Col>
         <Col md={12}>
         <PasswordInput label="Password" placeholder="Your Password Here"/>
         <label className="d-flex justify-content-end"><a href="#">Forgot Password!</a></label>
         </Col>
         <Col md={12}>
         <Button className="login-btn">Login</Button>
         </Col>
         <Col md={12}>
              <div className="already-account align-items-center">
                <label>Don't have an account! <a href="">Signup</a></label>
              </div>
          </Col>
         </Row>
      </SignIn>
    </>
  );
};
export default Index;
