import React from "react";
import Tab from "react-bootstrap/Tab";
import { StyledTabs } from "./style";
const Tabs = (props) => {
  const { tabs, defaultActiveKey, className } = props;
  return (
    <StyledTabs defaultActiveKey={defaultActiveKey} className={`mb-3 ${className}`}>
      {tabs?.map((tab, key) => {
        return (
          <Tab key={key} eventKey={tab.key} title={tab.title}>
            {tab.component}
          </Tab>
        );
      })}

      {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}   
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </StyledTabs>
  );
};

export default Tabs;
