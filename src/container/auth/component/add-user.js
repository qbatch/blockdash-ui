import React from "react";
import Header from "../../../layout/component/header/header";
import { BsArrowLeftShort } from "react-icons/bs";
import AddUserImg from "../../../static/images/add-user-img.svg";
import Button from "../../../components/button/button";
import { Row, Col } from "react-bootstrap";

import { AddUserWrapper, AddAmazonWrapper } from "../style";

const AddUser = () => {
  return (
    <>
      <Header />
      <AddAmazonWrapper>
        <div className="d-flex align-items-center m-0">
          <BsArrowLeftShort className="left-arrow-icon add-user-arrow" />
          <h1 className="m-0">Add User</h1>
        </div>
      
      <AddUserWrapper >
        <Row className="d-flex justify-content-center align-items-center text-center">
          <Col md={6}>
            <h1 className="title add-user-title">Congratulations</h1>
            <img src={AddUserImg} />
            <h1>Permissions Granted & Store Added Successfully!</h1>
            <h3>Your store has been successfully setup, ready to be used.</h3>
            <Button className="add-payment-btn">Add Payment Method</Button>
          </Col>
        </Row>
      </AddUserWrapper>
      </AddAmazonWrapper>
    </>
  );
};
export default AddUser;
