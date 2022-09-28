import React from 'react';
import logo from '../../../static/images/logo.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import { HeaderWrappper } from '../style';
const  Header = (props) => {
  const {onClick,login} =props
  return (
    <HeaderWrappper className='d-flex align-items-center'>
    {login && 
    <div className='header-wrapper d-flex justify-content-between align-items-center'>
      <div className='d-flex'>
        <span className="icon-menu cursor-pointer" onClick={onClick}></span>
        <div>
          <span className='header-logo'><a href="#"><img src={logo} alt="logo"/></a></span>
        </div>
      </div>
    <Dropdown>
      <Dropdown.Toggle className='position-relative d-flex justify-content-center' id="dropdown-basic">
        AS
       <span className='icon-chevron-down'></span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
}
    </HeaderWrappper>
  );
}
export default Header;
