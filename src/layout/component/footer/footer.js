import React from "react";
import { useNavigate } from "react-router-dom";
import { FooterWrapper } from "../style";
const Footer = (props) => {
  let navigate = useNavigate();
  const { onClick } = props;
  return (
    <FooterWrapper>
      <div className="footer-wrapper d-flex justify-content-between align-items-center">
        <div>
          <p>C 2022 BlockDash LLC.</p>
        </div>
        <ul className="d-flex footer-menu">
          <li>
            <a onClick={()=>  navigate("/faq")} href="javascript:;">FAQ’s</a>
          </li>
          <li>
            <a onClick={()=>  navigate("/privacy")} href="javascript:;">Privacy Policy</a>
          </li>
          <li>
            <a onClick={()=>  navigate("/terms")} href="javascript:;">Terms & Conditions</a>
          </li>
        </ul>
      </div>
    </FooterWrapper>
  );
};
export default Footer;
