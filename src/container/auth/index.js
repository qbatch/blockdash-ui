import React, { Children, useState } from "react";
import Header from "../../layout/component/header/header";
import { Row, Col } from "react-bootstrap";
import Grid from "@mui/material/Grid"; // Grid version 1
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
// Importing Images
import logo from "../../static/images/logo.svg";
import { AuthWrapper } from "./style";
const Index = (props) => {
  const { children } = props;
  const [collapsed, setCollapsed] = useState(false);
  const Box = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    padding: theme.spacing(3),
    borderRadius: "0",
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  }));
  return (
    <>
      <AuthWrapper>
        <Container maxWidth={"100%"}>
          <Grid container spacing={3}>
            <Grid item md={8} xs={12}>
              <div className="auth-section-left">
                <img src={logo} alt="logo" />
              </div>
            </Grid>
            <Grid item md={4} xs={12}>
              <div className="auth-section-right">{children}</div>
            </Grid>
          </Grid>
        </Container>
          {/* <Row>
            <Col md={8} xs={12}>
              <div className="auth-section-left">
                <img src={logo} alt="logo" />
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="auth-section-right">{children}</div>
            </Col>
          </Row> */}
      </AuthWrapper>
    </>
  );
};

export default Index;
