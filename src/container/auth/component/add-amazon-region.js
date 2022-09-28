import React from "react";
import Header from "../../../layout/component/header/header";
import { Row, Col } from "react-bootstrap";
// Importing Images
import AuthImageLeft from "../../../static/images/auth-img-left.png";
import AuthImageRight from "../../../static/images/auth-img-right.png";
import Us from "../../../static/images/USA.svg";

import { BsArrowLeftShort } from "react-icons/bs";
import Button from "../../../components/button/button";
import Input from "../../../components/inputs/input/index";
import { AuthWrapper } from "../style";
import { AddAmazonWrapper } from "../style";

const AddAmazonRegion = () => {
  return (
    <>
      <Header />
      <AddAmazonWrapper>
        <div className="d-flex align-items-center">
          <BsArrowLeftShort className="left-arrow-icon" />
          <h1 className="m-0">Add Amazon Region</h1>
        </div>
      <AuthWrapper className="amazon-auth-wrapper">
        <Row>
          <Col md={4} className="text-center auth-section-left">
            <img src={AuthImageLeft} alt="auth image left" />
          </Col>
          <Col md={4} className="auth-section-middle">
            <span className="position-relative search-input-wrapper">
              <Input lg searchwitharrow
                className=" search-input"
                placeholder="Type Store Name Here"
              />
              
            </span>
            <div className="market-place-wrapper">
              <h2 className="text-center mt-5">MarketPlace Region</h2>
              <div className=" d-flex country-detail justify-content-center align-items-center mt-4">
              <img src={Us} /> <h3 className="m-0">America</h3>
              </div>
              <Button className="Market-button">Next</Button>
            </div>
          </Col>
          <Col md={4} className="text-center auth-section-right">
            <img src={AuthImageRight} alt="auth image left" />
          </Col>
        </Row>
      </AuthWrapper>
      </AddAmazonWrapper>
    </>
  );
};

export default AddAmazonRegion;
