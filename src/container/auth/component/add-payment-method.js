import React from "react";
import { Row, Col } from "react-bootstrap";
import Header from "../../../layout/component/header/header";
// import Button from "../../../components/button/button";
import Button from "../../../components/button/button.styled";
import { BsCheck2, BsArrowLeftShort } from "react-icons/bs";
import { AddPaymentWrapper, AddAmazonWrapper } from "../style";
import Input from "../../../components/inputs/input/index";
import Select from "../../../components/select/index"


const AddPaymentMethod = () => {
  const State = [
    { value: 'Lahore', label: 'Lahore' },
    { value: 'Faislabad', label: 'Faislabad' },
    { value: 'pindhi', label: 'pindhi' }
  ]
  const Country = [
    { value: 'Pakistan', label: 'Pakistan' },
    { value: 'India', label: 'India' },
    { value: 'USA', label: 'USA' }
  ]

  const data = [
    {
      id: 1,
      name: (
        <>
          <BsCheck2 className="check-icon" />
        </>
      ),
      label: "Lorem ipsum",
      content:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore.",
    },
    {
      id: 1,
      name: (
        <>
          <BsCheck2 className="check-icon" />
        </>
      ),
      label: "Dolor Sit Amet",
      content:
        "Consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      id: 2,
      name: (
        <>
          <BsCheck2 className="check-icon" />
        </>
      ),
      label: "Lorem ipsum",
      content:
        "Vendors management.",
    },
    {
      id: 3,
      name: (
        <>
          <BsCheck2 className="check-icon" />
        </>
      ),
      label: "Lorem ipsum",
      content:
        "consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      id: 4,
      name: (
        <>
          <BsCheck2 className="check-icon" />
        </>
      ),
      label: "Dolor Sit Amet",
      content:
        "consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: 5,
      name: (
        <>
          <BsCheck2 className="check-icon" />
        </>
      ),
      label: "Lorem ipsum",
      content:
        "sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
      id: 6,
      name: (
        <>
          <BsCheck2 className="check-icon" />
        </>
      ),
      label: "Dolor Sit Amet",
      content:
        "consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      id: 7,
      name: (
        <>
          <BsCheck2 className="check-icon" />
        </>
      ),
      label: "Dolor Sit Amet",
      content:
        "consectetur adipiscing elit.",
    },

  ];
  return (
    <>
      <Header />
      <AddAmazonWrapper>
        <div className="d-flex align-items-center">
          <BsArrowLeftShort className="left-arrow-icon add-user-arrow" />
          <h1 className="m-0">Add Payment Method</h1>
        </div>
        <AddPaymentWrapper>
          <Row>
            <Col md={6}>
              <Row className="justify-content-center">
                <Col md={10}>
                  <div className="card-Wrapper">
                    <div className="card-header">
                      <div className="d-flex justifiy-content-between">
                        <span className="d-flex align-items-center price-detail">
                          <span>$</span><h1 className="title">99.00</h1><small>/month</small>
                        </span>
                        <Button className="premuim-btn">Premium</Button>
                      </div>
                      <p>Powerful premium features to get started</p>
                    </div>
                    <hr className="bottom-line" />
                    <div className="card-content-wrapper">
                      <h3>Lorem ipsum</h3>

                      <div className="users">
                        {data.map((user) => (
                          <div className="card-content d-flex align-items-baseline">
                            <span>{user.name}</span>
                            <div>
                              <h6>{user.label}</h6>
                              <p>{user.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <div className="auth-add-payment">
                <Col md={12}><h3>Add Credit Card Credentials</h3></Col>
              <Row>
                
                <Col md={6} >
                  <Input label="Name on Card" placeholder="Name Here" className="payment-input" />
                </Col>
                <Col md={6}>
                  <div className="position-relative card-input-wrapper">
                    <Input cardicon className="pl-3" label="Card Number" placeholder="0000 0000 0000 0000" />
                  </div>
                </Col>
                <Col md={6}>
                  <Input label="Expiration Date" type="date" placeholder="MM/YYYY" />
                </Col>
                <Col md={6}>
                  <Input label="CVC" placeholder="000" />
                </Col>
                <Col md={12}>
                <h3 className="mt-3">Address</h3>
                </Col>
                <Col md={6}>
                  <Input label="Address Title" placeholder="Address Holder Name" />
                </Col>
                <Col md={6}>
                  <Input label="Address Line 1" placeholder="Address Line 1" />
                </Col>
                <Col md={6}>
                  <Input label="Address Line 2" placeholder="Address Line 2" />
                </Col>
                <Col md={6}>
                  <Input label="City" placeholder="City" />
                </Col>
                <Col md={12}>
                  <Row>
                    <Col md={6} className="payment-field-small">
                      <Row>
                        <Col md={6}>
                          <Select options={State} label="State" placeholder="State" />
                        </Col>
                        <Col md={6}>
                          <Input label="Postal Code" placeholder="000" />
                        </Col>
                      </Row>
                    </Col>
                    <Col md={6} >
                      <Select options={Country} label="Country" placeholder="Country Name" />
                    </Col>

                  </Row>
                  <Button className="subscribe-btn">Subscribe</Button>
                </Col>
              </Row>
              </div>
            </Col>

          </Row>

        </AddPaymentWrapper>
      </AddAmazonWrapper>
    </>
  );
};
export default AddPaymentMethod;
