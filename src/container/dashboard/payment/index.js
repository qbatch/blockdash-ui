import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Button from "../../../components/button/button";
import SubscriptionCard from "../../../components/subscriptionCard/index";
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
                    <SubscriptionCard>
                      <div className="subscription-card-header">
                        <div className="d-flex justify-content-between align-items-center">
                          <h2>
                            <strong>$</strong>99.00<small>/month</small>
                          </h2>
                          <span className="tag">2 Free Months</span>
                        </div>
                        <p>Subscribe to get unlimited features</p>
                      </div>
                    </SubscriptionCard>
                  </Grid>
                  <Grid item md={6}>
                    <SubscriptionCard className="active">
                      <div className="subscription-card-header">
                        <div className="d-flex justify-content-between align-items-center">
                          <h2>
                            <strong>$</strong>99.00<small>/month</small>
                          </h2>
                          <span className="tag">2 Free Months</span>
                        </div>
                        <p>Subscribe to get unlimited features</p>
                      </div>
                    </SubscriptionCard>
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
