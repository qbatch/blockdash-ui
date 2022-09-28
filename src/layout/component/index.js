import React, { useState } from "react";
import "react-pro-sidebar/dist/css/styles.css";
import Header from "./header/header";
import { Content } from "./style";
import Sidebar from "./sidebar/sidebar";
const Layout = ({ Component }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Header login={true} onClick={() => setCollapsed(!collapsed)} />
      <Content>
        <Sidebar collapsed={collapsed} />
        <div className="p-4 dashboard-top-space overflow-auto w-100"><Component /></div>
      </Content>
    </>
  );
};

export default Layout;
