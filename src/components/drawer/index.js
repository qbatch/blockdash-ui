import React, { useState } from "react";
import { DrawerWrapper } from "./style";
import Button from "../button/button.styled";
import "react-modern-drawer/dist/index.css"
const Index = (props) => {
  const { 
    show,
    size,
    onHide,
    children, 
    crossIcon, 
    drawerHeader, 
    className, 
    buttons
   } = props;
  return (
    <DrawerWrapper 
    className={className} 
    open={show} 
    size={size} 
    direction="right">

      <div className="drawer-header align-items-center justify-content-between d-flex">
        <h1 className="page-title">
          {crossIcon && (
            <span
              className="icon-back cross-icon"
              onClick={onHide}>
              <i className="icon-left-arrow"></i>
            </span>
          )}
          {drawerHeader}
        </h1>
        {buttons && (
          <div className="drawer-buttons">
            <ul>
              <li>
                <Button outlined="true" onClick={onHide}>Cancel</Button>
              </li>
              <li><Button>Save</Button></li>
            </ul>
          </div>
        )}
      </div>

      {children}
    </DrawerWrapper>
  );
};
export default Index;
