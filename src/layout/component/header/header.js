import React from "react";
import logo from "../../../static/images/logo.svg";
import Dropdown from "react-bootstrap/Dropdown";
import profileImg from '../../../static/images/profile.svg';
import { HeaderWrappper } from "../style";
const Header = (props) => {
  const { onClick, login } = props;
  return (
    <HeaderWrappper className="d-flex align-items-center">
      <div className="header-wrapper d-flex justify-content-between align-items-center">
        <div>
          <span className="header-logo">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </span>
        </div>
        <ul className="d-flex header-menu">
          <li>
            <a href="dashboard">Dashboard</a>
          </li>
          <li>
            <a href="nft-dashboard">NFT Dashboard</a>
          </li>
          <li>
            <a href="wallet">Add a Wallet</a>
          </li>
        </ul>
        <div className="header-links">
          <ul>
            <li>
              <a href="#"><i className="icon-bell"></i></a>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle
                  className="position-relative d-flex justify-content-center"
                  id="dropdown-basic"
                >
                  <img src={profileImg} alt="profile image"/>
                  <span className="icon-chevron-down"></span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </HeaderWrappper>
  );
};
export default Header;
