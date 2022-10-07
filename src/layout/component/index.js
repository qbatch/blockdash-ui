import React, { useState } from "react";
import Header from "./header/header";
import { Content } from "./style";
import Footer from "./footer/footer";
const Layout = ({ Component }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Header login={true} onClick={() => setCollapsed(!collapsed)} />
      <Content>
        {/* <Sidebar collapsed={collapsed} /> */}
        <div className="dashboard-top-space w-100">
          <Component />
        </div>
      </Content>
      <Footer/>
  
    </>
  );
};

export default Layout;
