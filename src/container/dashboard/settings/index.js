import React from 'react';
import { useState } from 'react';

// Components
import { Row, Col } from 'react-bootstrap';
import Select from '../../../components/select/index';
import Input from '../../../components/inputs/input';

import { PageHeader, TableHeader, PoDetailTable } from '../style';
import Button from '../../../components/button/button.styled';
import Drawer from '../../../components/drawer';

import SignalIcon from '../../../static/images/signal-logo.svg';
import AmazonLogo from '../../../static/images/card-amazon.svg';
import WalmartLogo from '../../../static/images/card-walmart.svg';
import US from '../../../static/images/us.svg';
import CA from '../../../static/images/ca.svg';
import MX from '../../../static/images/mx.svg';
import BR from '../../../static/images/br.svg';
import { BsExclamationTriangle } from 'react-icons/bs';
import { ReactComponent as CheckIcon } from '../../../static/images/check.svg';
import { ReactComponent as ChipIcon } from '../../../static/images/chip.svg';
import { ReactComponent as EditIcon } from '../../../static/images/edit.svg';

import { SubscriptionCard } from '../../../components/subscriptionCard/style';
import { CreditCard } from '../../../components/creditCard/style';
import { SettingsWrapper } from './style';
import { PaymentMethodInfo } from '../style';
import Modal from '../../../components/modal/index';

const Index = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [popup, setPopup] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(true);
  };
  const handleClick = () => {
    setPopup(true);
  };
  const State = [
    { value: "Lahore", label: "Lahore" },
    { value: "Faislabad", label: "Faislabad" },
    { value: "pindhi", label: "pindhi" },
  ];
  const Country = [
    { value: "Pakistan", label: "Pakistan" },
    { value: "India", label: "India" },
    { value: "USA", label: "USA" },
  ];
  return (
    <>
      <SettingsWrapper>
        <PageHeader className="d-flex justify-content-between align-items-center">
          <h1 className="page-title">Settings</h1>
        </PageHeader>
        <div className="payment-card-wrapper">
          <div className="payment-card-details">
            <TableHeader className="d-flex align-items-center justify-content-between">
              <h3 className="table-title">Subscription</h3>
              <div className="table-header-extras">
                <ul>
                  <li>
                    <Button onClick={handleClick} outlined>
                      Cancel Subscription
                    </Button>
                  </li>
                </ul>
              </div>
            </TableHeader>
            <Row>
              <Col md={4}>
                <SubscriptionCard>
                  <div className="subscription-card-header">
                    <div className="d-flex justify-content-between align-items-center">
                      <h2>
                        <strong>$</strong>99.00<small>/month</small>
                      </h2>
                      <span className="tag">Premium</span>
                    </div>
                    <p>Powerful premium features to get started</p>
                  </div>
                  <div className="subscription-card-content d-flex">
                    <div className="subscription-date">
                      <h3>Start Date</h3>
                      <p>23 July 2022</p>
                    </div>
                    <div className="subscription-date">
                      <h3>End Date</h3>
                      <p>23 August 2022</p>
                    </div>
                  </div>
                </SubscriptionCard>
              </Col>
            </Row>
          </div>
          <div className="payment-card-details">
            <TableHeader className="d-flex align-items-center justify-content-between">
              <h3 className="table-title">Payment Method</h3>
              <div className="table-header-extras">
                <ul>
                  <li>
                    <Button onClick={toggleDrawer} outlined>
                      Add Card
                    </Button>
                  </li>
                </ul>
              </div>
            </TableHeader>
            <Row>
              <Col md={12}>
                <div className="card-sublabel">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <CreditCard>
                  <div className="creditcard-header d-flex justify-content-between align-items-center">
                    <div className="creditcard-headerleft d-flex align-items-center">
                      <div className="signal-logo">
                        <img src={SignalIcon} alt="signal logo" />
                      </div>
                      <span className="tag tag-success">Active</span>
                    </div>
                    <div className="creditcard-headerright">
                      <ul>
                        <li>
                          <i className="icon-check-custom">
                            <CheckIcon />
                          </i>
                        </li>
                        <li>
                          <i className="icon-trash"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="creditcard-content">
                    <div className="creditcard-content-primary d-flex justify-content-between align-items-end">
                      <div>
                        <h3>M T Siddiqui</h3>
                        <h4>xxxx-xxxx-xxxx-0000</h4>
                        <p>13345 REGAL CREST DRIVE, Clifton, VA. 20124</p>
                      </div>
                      <div className="chip-icon">
                        <ChipIcon />
                      </div>
                    </div>
                  </div>
                </CreditCard>
              </Col>
              <Col md={4}>
                <CreditCard className="inactive">
                  <div className="creditcard-header d-flex justify-content-between align-items-center">
                    <div className="creditcard-headerleft d-flex align-items-center">
                      <div className="signal-logo">
                        <img src={SignalIcon} alt="signal logo" />
                      </div>
                    </div>
                    <div className="creditcard-headerright">
                      <ul>
                        <li>
                          <i className="icon-check-custom">
                            <CheckIcon />
                          </i>
                        </li>
                        <li>
                          <i className="icon-trash"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="creditcard-content">
                    <div className="creditcard-content-primary d-flex justify-content-between align-items-end">
                      <div>
                        <h3>M T Siddiqui</h3>
                        <h4>xxxx-xxxx-xxxx-0000</h4>
                        <p>13345 REGAL CREST DRIVE, Clifton, VA. 20124</p>
                      </div>
                      <div className="chip-icon">
                        <ChipIcon />
                      </div>
                    </div>
                  </div>
                </CreditCard>
              </Col>
            </Row>
          </div>
          <div className="payment-card-details">
            <TableHeader className="d-flex align-items-center justify-content-between">
              <h3 className="table-title">Stores</h3>
              <div className="table-header-extras">
                <ul>
                  <li>
                    <Button outlined>Add Store</Button>
                  </li>
                </ul>
              </div>
            </TableHeader>
            <Row>
              <Col md={12}>
                <div className="card-sublabel">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <CreditCard>
                  <div className="creditcard-header d-flex justify-content-between align-items-center">
                    <div className="creditcard-headerleft d-flex align-items-center">
                      <div className="signal-logo">
                        <img src={AmazonLogo} alt="Amazon logo" />
                      </div>
                    </div>
                    <div className="creditcard-headerright">
                      <ul>
                        <li>
                          <i className="icon-edit-custom">
                            <EditIcon />
                          </i>
                        </li>
                        <li>
                          <i className="icon-trash"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="creditcard-content">
                    <div className="creditcard-content-primary">
                      <div className="store-details d-flex align-items-center justify-content-between">
                        <h2>Store Name Here</h2>
                        <div className="tag tag-success">Active</div>
                      </div>
                      <div className="region-details d-flex align-items-center justify-content-between">
                        <p>North America</p>
                        <ul>
                          <li>
                            <img src={US} alt="country flag" />
                          </li>
                          <li>
                            <img src={CA} alt="country flag" />
                          </li>
                          <li>
                            <img src={MX} alt="country flag" />
                          </li>
                          <li>
                            <img src={BR} alt="country flag" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CreditCard>
              </Col>
              <Col md={4}>
                <CreditCard className="inactive">
                  <div className="creditcard-header d-flex justify-content-between align-items-center">
                    <div className="creditcard-headerleft d-flex align-items-center">
                      <div className="signal-logo">
                        <img src={WalmartLogo} alt="Amazon logo" />
                      </div>
                    </div>
                    <div className="creditcard-headerright">
                      <ul>
                        <li>
                          <Button className="btn-trans" outlined="true">
                            Re-authorize
                          </Button>
                        </li>
                        <li>
                          <i className="icon-edit-custom">
                            <EditIcon />
                          </i>
                        </li>
                        <li>
                          <i className="icon-trash"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="creditcard-content">
                    <div className="creditcard-content-primary">
                      <div className="store-details d-flex align-items-center justify-content-between">
                        <h2>Store Name Here</h2>
                        <div className="tag tag-warning">Inactive</div>
                      </div>
                      <div className="region-details d-flex align-items-center justify-content-between">
                        <p>North America</p>
                        <ul>
                          <li>
                            <img src={US} alt="country flag" />
                          </li>
                          <li>
                            <img src={CA} alt="country flag" />
                          </li>
                          <li>
                            <img src={MX} alt="country flag" />
                          </li>
                          <li>
                            <img src={BR} alt="country flag" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CreditCard>
              </Col>
            </Row>
          </div>
        </div>
        <Drawer
          buttons
          className="drawer-sm drawer-shoppingcart"
          crossIcon
          drawerHeader="Add Payment Method"
          show={isOpen}
          onHide={() => {
            setIsOpen(false);
          }}
        >
          <PaymentMethodInfo>
            <div className="shopping-card-information">
              <div className="card-information-head">
                <h3>Card Information</h3>
                <p>
                  Please add a valid Credit Card your monthly subscription. You
                  won't be charged for first month and we will remind you before
                  your 30-Day trial ends. You can cancel subscription any time.
                </p>
              </div>
              <div className="card-information-content">
                <div className="add-payment">
                  <Row>
                    <Col md={12}>
                      <h3>Add Credit Card Credentials</h3>
                    </Col>
                    <Col md={6}>
                      <Input
                        label="Name on Card"
                        placeholder="Name Here"
                        className="payment-input"
                      />
                    </Col>
                    <Col md={6}>
                      <div className="position-relative card-input-wrapper">
                        <Input
                          cardicon
                          className="pl-3"
                          label="Card Number"
                          placeholder="0000 0000 0000 0000"
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <Input
                        label="Expiration Date"
                        type="date"
                        placeholder="MM/YYYY"
                      />
                    </Col>
                    <Col md={6}>
                      <Input label="CVC" placeholder="000" width={"186px"} />
                    </Col>
                    <Col md={12}>
                      <h3 className="mt-3">Address</h3>
                    </Col>
                    <Col md={6}>
                      <Input
                        label="Address Title"
                        placeholder="Address Title"
                      />
                    </Col>
                    <Col md={6}>
                      <Input
                        label="Phone Number"
                        placeholder="(000) 000 0000"
                      />
                    </Col>
                    <Col md={6}>
                      <Input
                        label="Address Line 1"
                        placeholder="Address Line 1"
                      />
                    </Col>
                    <Col md={6}>
                      <Input
                        label="Address Line 2"
                        placeholder="Address Line 2"
                      />
                    </Col>
                    <Col md={6}>
                      <Input label="City" placeholder="City" />
                    </Col>
                    <Col md={6}>
                      <Select
                        options={State}
                        label="State"
                        placeholder="State"
                      />
                    </Col>
                    <Col md={6}>
                      <Input label="Postal Code" placeholder="000" />
                    </Col>
                    <Col md={6}>
                      <Select
                        options={Country}
                        label="Country"
                        placeholder="Country Name"
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </PaymentMethodInfo>
        </Drawer>
        <Modal
          className="cancel-modal"
          open={popup}
          saveText="Yes"
          closeText="No"
          onClose={() => setPopup(false)}
        >
          <BsExclamationTriangle className="icon-exclamation" />
          <h3>Are you sure want to cancel the Subscription</h3>
        </Modal>
      </SettingsWrapper>
    </>
  );
};
export default Index;
