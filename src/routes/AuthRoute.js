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
const AuthRoute = () => {
  return (
    <Routes>
      <Route exact path="blockdash-ui/auth/reset-password-email" element={<ResetPasswordEmail />} />
      <Route exact path="blockdash-ui/auth/secret-code" element={<SecretCode />} />
      <Route exact path="blockdash-ui/auth/terms" element={<Terms />} />
      <Route exact path="blockdash-ui/auth/sign-in" element={<SignIn />} />
      <Route exact path="blockdash-ui/auth/sign-up" element={<SignUp/>} />
      <Route exact path="blockdash-ui/auth/reset-password" element={<ResetPassword/>} />
      <Route exact path="blockdash-ui/auth/verification-email" element={<VerficationEmail/>} />
      <Route exact path="blockdash-ui/auth/confirm-password" element={<ConfirmPassword/>} />
    </Routes>
  );
};

export default AuthRoute;
