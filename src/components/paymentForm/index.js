import React, { Children } from "react";
import { Grid, InputAdornment, Box } from "@mui/material";

import Input from "../../components/inputs/input/index";
import Button from "../button/button";

import PaymentFormWrapper from "./style";
import IconMastercard from "../../static/images/mastercard.svg";

const Index = (props) => {
  const { Children, onClick } = props;
  return (
    <PaymentFormWrapper>
      <Box className="payment-form">
        <div className="form-contents">
          <Grid container rowSpacing={0} columnSpacing={3}>
            <Grid item md={6}>
              <Input placeholder="Card Name" label="Card Name" />
            </Grid>
            <Grid item md={6}>
              <Input
                placeholder="Card Number"
                label="Card Number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <img src={IconMastercard} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={6}>
              <Input placeholder="MM/YY" label="MM/YY" />
            </Grid>
            <Grid item md={6}>
              <Input placeholder="CVC" label="CVC" />
            </Grid>
            <Grid item md={12}>
              <Button onClick={onClick} className="w-100" variant="outlined">
                Checkout
              </Button>
            </Grid>
          </Grid>
        </div>
      </Box>
    </PaymentFormWrapper>
  );
};

export default Index;
