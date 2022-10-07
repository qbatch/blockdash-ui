import React, {useState} from "react";
import logo from "../../../static/images/logo.svg";
// import Dropdown from "react-bootstrap/Dropdown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import profileImg from "../../../static/images/profile.svg";
import { useNavigate } from "react-router-dom";
import { HeaderWrappper } from "../style";
const Header = (props) => {
  const { onClick, login } = props;
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const [popup, setPopup] = useState(false);
  const [popupstatic, setstaticPopup] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };
  return (
    <HeaderWrappper className="d-flex align-items-center">
      <div className="header-wrapper d-flex justify-content-between align-items-center">
        <div>
          <span className="header-logo">
            <a onClick={() => navigate("/dashboard")} href="javascript:;">
              <img src={logo} alt="logo" />
            </a>
          </span>
        </div>
        <ul className="d-flex header-menu">
          <li>
            <a href="javascript:;" onClick={() => navigate("/dashboard")}>
              Dashboard
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/nft-dashboard")} href="javascript:;">
              NFT Dashboard
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/wallet")} href="javascript:;">
              Add a Wallet
            </a>
          </li>
        </ul>
        <div className="header-links">
          <ul>
            <li>
              <a href="#">
                <i className="icon-bell"></i>
              </a>
            </li>
            <li>
            <img src={profileImg} onClick={handleClick} alt="profile image"/>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                className="custom-dropdown"
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuItem>Link 3</MenuItem>
              </Menu>
            </li>
          </ul>
        </div>
      </div>
    </HeaderWrappper>
  );
};
export default Header;
