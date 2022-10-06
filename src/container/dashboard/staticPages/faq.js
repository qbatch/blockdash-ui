import React, { useState } from "react";
import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Accordion from "../../../components/accordion/index";
import faqIcon from "../../../static/images/faq-icon.svg";
import Input from "../../../components/inputs/input/index";
import Button from '../../../components/button/button';
import { ContactForm, DashboardWrapper } from "../style";
import { FaqWrapper } from "./style";
const Index = () => {
  const option = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Ut enim ad minim veniam, quis nostrud exercitation.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    
    {
      title:
        "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <>
      <DashboardWrapper>
        <FaqWrapper>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent={"center"}
          >
            <Grid item md={6}>
              <Box className="faq-header" textAlign={"center"}>
                <img src={faqIcon} alt="faq heading" />
                <h1>Frequently Asked Questions</h1>
              </Box>
              <Accordion data={option} />
              <ContactForm>
                <Box className="form-header">
                  <h3>Didn’t Find The Questions!</h3>
                  <p>Send us your question</p>
                </Box>
                <Box className="form-content">
                  <Input placeholder="Email address" label="Email address" />
                  <Input
                    multiline
                    maxRows={3}
                    minRows={3}
                    placeholder="Your question..."
                    label="Your question..."
                  />
                  <Button className="w-100" variant="outlined">Send</Button>
                </Box>
              </ContactForm>
            </Grid>
          </Grid>
        </FaqWrapper>
      </DashboardWrapper>
    </>
  );
};
export default Index;
