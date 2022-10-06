// import React from "react";
// import Tab from "react-bootstrap/Tab";
// import { StyledTabs } from "./style";
// const Tabs = (props) => {
//   const { tabs, defaultActiveKey, className } = props;
//   return (
//     <StyledTabs defaultActiveKey={defaultActiveKey} className={`mb-3 ${className}`}>
//       {tabs?.map((tab, key) => {
//         return (
//           <Tab key={key} eventKey={tab.key} title={tab.title}>
//             {tab.component}
//           </Tab>
//         );
//       })}    </StyledTabs>
//       );
//     };
    
//     export default Tabs;


import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import  {StyledTabs} from "./style"

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const {tabs,handleChange,value,className, parentClass}=props;


  return (
    <StyledTabs className={parentClass}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} className={className}>
          {tabs.map((tab,index)=>{
            return(
            <Tab key={index} iconPosition="start"  icon={tab.icon} label={tab.label} {...a11yProps(tab.index)} />
            )
          })}
          
        </Tabs>
      </Box>
    </Box>
    </StyledTabs>
  );
}
