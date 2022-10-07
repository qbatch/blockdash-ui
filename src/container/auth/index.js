import React, { Children, useState } from "react";
import Grid from "@mui/material/Grid"; // Grid version 1
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
// Importing Images
import logo from "../../static/images/logo.svg";
import { AuthWrapper } from "./style";
import { useNavigate } from "react-router-dom";
const Index = (props) => {
  let navigate = useNavigate();
  const { children } = props;
  return (
    <>
      <AuthWrapper>
        <Container maxWidth={"100%"}>
          <Grid container spacing={3}>
            <Grid item md={8} xs={12}>
              <Box className="auth-section-left">
                <img onClick={() => navigate("/auth/sign-in")} src={logo} alt="logo" />
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box className="auth-section-right">{children}</Box>
            </Grid>
          </Grid>
        </Container>
      </AuthWrapper>
    </>
  );
};

export default Index;
