import React from "react";
import { FooterWrapper } from "../style";
const Footer = (props) => {
  const { onClick } = props;
  return (
    <FooterWrapper>
      <div className="footer-wrapper d-flex justify-content-between align-items-center">
        <div>
          <p>C 2022 BlockDash LLC.</p>
        </div>
        <ul className="d-flex footer-menu">
          <li>
            <a href="#">FAQ’s</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
        </ul>
      </div>
    </FooterWrapper>
  );
};
export default Footer;
