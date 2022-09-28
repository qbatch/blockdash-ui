import React from "react";
import { Route} from "react-router-dom";
import { Routes } from "react-router-dom";
import Terms from "../container/auth/component/terms";
import SecretCode from "../container/auth/component/secret-code";
import ResetPasswordEmail from "../container/auth/component/reset-password-email";
import SignIn from "../container/auth/component/signIn";
import SignUp from "../container/auth/component/signup";
import ResetPassword from "../container/auth/component/reset-password";
import VerficationEmail from "../container/auth/component/verification-email";
import ConfirmPassword from "../container/auth/component/confirm-password";
import AddAmazonRegion from "../container/auth/component/add-amazon-region";
import AddUser from "../container/auth/component/add-user";
import AddPaymentMethod from "../container/auth/component/add-payment-method";
const AuthRoute = () => {
  return (
    <Routes>
      <Route exact path="/auth/reset-password-email" element={<ResetPasswordEmail />} />
      <Route exact path="/auth/secret-code" element={<SecretCode />} />
      <Route exact path="/auth/terms" element={<Terms />} />
      <Route exact path="/auth/sign-in" element={<SignIn />} />
      <Route exact path="/auth/sign-up" element={<SignUp/>} />
      <Route exact path="/auth/reset-password" element={<ResetPassword/>} />
      <Route exact path="/auth/verification-email" element={<VerficationEmail/>} />
      <Route exact path="/auth/confirm-password" element={<ConfirmPassword/>} />
      <Route exact path="/auth/add-amazon-region" element={<AddAmazonRegion/>} />
      <Route exact path="/auth/add-user" element={<AddUser/>} />
      <Route exact path="/auth/add-payment" element={<AddPaymentMethod/>} />
    </Routes>
  );
};

export default AuthRoute;
