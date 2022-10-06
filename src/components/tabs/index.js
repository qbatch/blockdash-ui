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
  const {tabs,handleChange,value}=props;


  return (
    <StyledTabs>
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs value={value} onChange={handleChange}>
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
