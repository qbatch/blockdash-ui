import React from "react";
import {Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { SidebarWrapper } from "../style";
import { useNavigate } from "react-router-dom";
const Layout = (props) => {
  const {collapsed} =props;
  let navigate = useNavigate();
  return (
    <SidebarWrapper collapsed={collapsed}>
      <Menu>
        <MenuItem onClick={()=>  navigate("/user")} icon={<span class="icon-menu-users"></span>}>Sales Order</MenuItem>
        <MenuItem onClick={()=>  navigate("/purchaseOrder")} icon={<span class="icon-menu-po"></span>}>Purchase Orders</MenuItem>
        <MenuItem onClick={()=>  navigate("/purchaseOrderDetails")} icon={<span class="icon-menu-po"></span>}>PO Detail</MenuItem>
        <MenuItem onClick={()=>  navigate("/settings")} icon={<span class="icon-menu-setting"></span>}>Settings</MenuItem>
      </Menu>
    </SidebarWrapper>
  );
};

export default Layout;