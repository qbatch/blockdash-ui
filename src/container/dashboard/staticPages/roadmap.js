import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Input from '../../../components/inputs/input/index';
import Button from '../../../components/button/button';
import { Grid, Box } from "@mui/material";
import { ContactForm, DashboardWrapper } from "../style";
import { RoadMap } from "./style";

export default function OutlinedTimeline() {
  return (
    <DashboardWrapper>
      <Grid container spacing={3} alignItems="center" justifyContent={"center"}>
        <Grid item md={8}>
          <RoadMap>
            <h1>Road Map</h1>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <h3>Upcoming features</h3>
                  <span>Expected lauch Date: October 18 2022</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <h3>Upcoming features</h3>
                  <span>Expected lauch Date: October 18 2022</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <h3>Upcoming features</h3>
                  <span>Expected lauch Date: October 18 2022</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <h3>Upcoming features</h3>
                  <span>Expected lauch Date: October 18 2022</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  <h3>Upcoming features</h3>
                  <span>Expected lauch Date: October 18 2022</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
            <ContactForm>
              <Box className="form-header">
                <h3>Submit a Question</h3>
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
                <Button className="w-100" variant="outlined">
                  Send
                </Button>
              </Box>
            </ContactForm>
          </RoadMap>
        </Grid>
      </Grid>
    </DashboardWrapper>
  );
}
