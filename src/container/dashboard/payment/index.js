import { Grid } from "@mui/material";
import { Container, Box } from "@mui/system";
import React, { useState } from "react";
import Button from "../../../components/button/button";
import SubscriptionCard from "../../../components/subscriptionCard/index";
import PaymentForm from "../../../components/paymentForm/index";
import { ReactComponent as IconCard } from "../../../static/images/icon-card.svg";
import { ReactComponent as IconStripe } from "../../../static/images/icon-stripe.svg";
import { ReactComponent as IconGoogle } from "../../../static/images/icon-google.svg";
import { ReactComponent as IconPaypal } from "../../../static/images/icon-paypal.svg";
import { ReactComponent as IconCoinbase } from "../../../static/images/icon-coinbase.svg";
import Tabs from "../../../components/tabs";

import { DashboardWrapper, PageHeader } from "../style";
import PaymentWrapper from "./style";
const Index = () => {

  const tabs = [
    {
      key: "Credit Card",
      title: (
        <div>
          <IconCard /> Credit Card
        </div>
      ),
      component: <PaymentForm />,
    },
    {
      key: "Stripe",
      title: (
        <div>
          <IconStripe /> Stripe
        </div>
      ),
      component: (
        <>
          <PaymentForm />
        </>
      ),
    },
    {
      key: "Paypal",
      title: (
        <div>
          <IconPaypal /> Paypal
        </div>
      ),
      component: (
        <>
          <PaymentForm />
        </>
      ),
    },
    {
      key: "Google",
      title: (
        <div>
          <IconGoogle /> Google Pay
        </div>
      ),
      component: (
        <>
          <PaymentForm />
        </>
      ),
    },
    {
      key: "Coinbase",
      title: (
        <div>
          <IconCoinbase /> Coinbase Commerce Crypto
        </div>
      ),
      component: (
        <>
          <PaymentForm />
        </>
      ),
    },
  ];
  return (
    <>
      <DashboardWrapper>
        <PageHeader>
          <Box
            display={"flex"}
            alignItems="center"
            justifyContent="space-between"
          >
            <div className="page-header-left">
              <h1 className="page-title">
                Good Morning <span> Name Here</span>
              </h1>
              <p>
                You currently have 3 connected wallets. Upgrade to PRO to unlock
                unlimited wallets.{" "}
              </p>
            </div>
          </Box>
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
                <Grid container columnSpacing={3} rowSpacing={3}>
                  <Grid item md={6}>
                    <SubscriptionCard>
                      <Box className="subscription-card-header">
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <h1>
                            <strong>$</strong>9.99<small>/month</small>
                          </h1>
                        </Box>
                        <p>Subscribe to get unlimited features</p>
                      </Box>
                    </SubscriptionCard>
                  </Grid>
                  <Grid item md={6}>
                    <SubscriptionCard className="active">
                      <Box className="subscription-card-header">
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <h1>
                            <strong>$</strong>99.99<small>/Yearly</small>
                          </h1>
                          <span className="tag">2 Free Months</span>
                        </Box>
                        <p>Subscribe to get unlimited features</p>
                      </Box>
                    </SubscriptionCard>
                  </Grid>
                  <Grid item md={12} className="payment-method">
                    <div className="payment-form">
                      <h3>Payment Method </h3>
                      <Tabs defaultActiveKey={tabs[0].key} tabs={tabs} />
                    </div>
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
