import React from "react"
import Tab from 'react-bootstrap/Tab';
import {StyledTabs} from "./style"
const Tabs =(props) => {
    const {tabs,defaultActiveKey}=props
  return (
    <StyledTabs
      defaultActiveKey={defaultActiveKey}
      className="mb-3"
    >
     {tabs?.map((tab,key)=> {
         return(
            <Tab key={key} eventKey={tab.key} title={tab.title}>
                {tab.component}
          </Tab>
         )
     })
    }
    </StyledTabs>
  );
}

export default Tabs;