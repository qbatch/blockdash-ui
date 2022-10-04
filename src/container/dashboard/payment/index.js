import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Button from "../../../components/button/button";

import { DashboardWrapper, PageHeader } from "../style";
import PaymentWrapper from "./style";
const Index = () => {
  return (
    <>
      <DashboardWrapper>
        <PageHeader className="d-flex justify-content-between align-items-center">
          <div className="page-header-left">
            <h1 className="page-title">
              Good Morning <span>Name Here</span>
            </h1>
            <p>
              You currently have 3 connected wallets. Upgrade to PRO to unlock
              unlimited wallets.{" "}
            </p>
          </div>
        </PageHeader>
        <PaymentWrapper>
          <Container maxWidth={"100%"}>
            <Grid
              container
              spacing={0}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item md={8} xs={12} className="payment-content">
                <h2>Choose your Premium Plan</h2>
                <Grid container spacing={3}>
                  <Grid item md={6}>
                    column 1
                  </Grid>
                  <Grid item md={6}>
                    column 2
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </PaymentWrapper>
      </DashboardWrapper>
    </>
  );
};
export default Index;
