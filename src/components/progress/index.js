import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {    
    buildStyles
  } from "react-circular-progressbar";
const Index = (props) => {
const {percentage}=props
  return (
    <>
      <CircularProgressbar strokeWidth="5" value={percentage} text={`${percentage}%`}     styles={buildStyles({
          textColor: "#258AFF ",
          pathColor: "#009C34",
          trailColor: "#E6E6E6"
        })} />
    </>
  );
};
export default Index;
