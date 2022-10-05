import React from "react";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionWrapper } from "./style";
const Index = (props) => {
  const {data } = props;
  const [change, setChange] = useState("");
  const [selectedIndex, setSelectedIndex] = useState([]);
  const toggleHandler = () => {
    setChange(!change);
  }
  return (
    <AccordionWrapper>
      {data.map((accordion, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary
              {...props}
              aria-controls={`accordion-${index}`}
              expandIcon={<i className={selectedIndex.includes(index) ? "icon-minus" : "icon-plus"}></i>}
              id={index} onClick={() => { 
                toggleHandler();
                console.log('array value ', selectedIndex);
                if (selectedIndex.includes(index)) {
                    const temp = selectedIndex;
                    const currentIndex = temp.indexOf(index);
                    temp.splice(currentIndex, 1);
                    setSelectedIndex(temp);
                } else {
                    const temp = selectedIndex;
                    temp.push(index);
                    setSelectedIndex(temp);
                }
            } }
            >
              <Typography>{accordion.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{accordion.text}</Typography>
            </AccordionDetails>
          </Accordion>
          //   <MenuItem key={index} value={value.value}>
          //     {value.title}
          //   </MenuItem>
        );
      })}
      {/* <Accordion>
        <AccordionSummary {...props}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{heading}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {text}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </AccordionWrapper>
  );
};
export default Index;
