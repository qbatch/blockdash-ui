import React from "react";

// Components
import Select from "../../../components/select/index";
import Input from "../../../components/inputs/input";
import AgGrid from "../../../components/ag-grid-table/index";
import Button from "../../../components/button/button.styled";
import Pagination from "../../../components/pagination/index";
import QuantityPicker from "../../../components/qty-picker/index";
import Drawer from "../../../components/drawer";
import { Row, Col } from "react-bootstrap";
import TitleImage from "../../../static/images/title-img.png";

import {
  PaymentMethodInfo,
  PageHeader,
  TableHeader,
  PoDetailTable,
} from "../style";
import TableTitle from "../component/tableTitle";
import ShoppingCardWrapper from "./style";
import CardIcon from "../../../static/images/card-icon.svg";

const Index = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen(true);
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
  const user_referrals = [
    {
      id: 1,
      poNumber: "845123095775",
      user: "John Doe",
      vendor: "ChinaVendor",
      wareHouse: "WH-12ambs",
      ordered: "100",
      received: "5",
      shipped: 100,
      atAmazon: 100,
      date: "23 Feb 2022",
    },
    {
      id: 2,
      poNumber: "845123095775",
      user: "John Doe",
      vendor: "ChinaVendor",
      wareHouse: "WH-12ambs",
      ordered: "100",
      received: "5",
      shipped: 100,
      atAmazon: 100,
      date: "23 Feb 2022",
    },
    {
      id: 3,
      poNumber: "845123095775",
      user: "John Doe",
      vendor: "ChinaVendor",
      wareHouse: "WH-12ambs",
      ordered: "100",
      received: "5",
      shipped: 100,
      atAmazon: 100,
      date: "23 Feb 2022",
    },
    {
      id: 4,
      poNumber: "845123095775",
      user: "John Doe",
      vendor: "ChinaVendor",
      wareHouse: "WH-12ambs",
      ordered: "100",
      received: "5",
      shipped: 100,
      atAmazon: 100,
      date: "23 Feb 2022",
    },
    {
      id: 5,
      poNumber: "845123095775",
      user: "John Doe",
      vendor: "ChinaVendor",
      wareHouse: "WH-12ambs",
      ordered: "100",
      received: "5",
      shipped: 100,
      atAmazon: 100,
      date: "23 Feb 2022",
    },
    {
      id: 6,
      poNumber: "845123095775",
      user: "John Doe",
      vendor: "ChinaVendor",
      wareHouse: "WH-12ambs",
      ordered: "100",
      received: "5",
      shipped: 100,
      atAmazon: 100,
      date: "23 Feb 2022",
    },
    {
      id: 7,
      poNumber: "845123095775",
      user: "John Doe",
      vendor: "ChinaVendor",
      wareHouse: "WH-12ambs",
      ordered: "100",
      received: "5",
      shipped: 100,
      atAmazon: 100,
      date: "23 Feb 2022",
    },
    {
      id: 8,
      poNumber: "845123095775",
      user: "John Doe",
      vendor: "ChinaVendor",
      wareHouse: "WH-12ambs",
      ordered: "100",
      received: "5",
      shipped: 100,
      atAmazon: 100,
      date: "23 Feb 2022",
    },
    {
      id: 9,
      poNumber: "845123095775",
      user: "John Doe",
      vendor: "ChinaVendor",
      wareHouse: "WH-12ambs",
      ordered: "100",
      received: "5",
      shipped: 100,
      atAmazon: 100,
      date: "23 Feb 2022",
    },
    {
      id: 10,
      poNumber: "845123095775",
      user: "John Doe",
      vendor: "ChinaVendor",
      wareHouse: "WH-12ambs",
      ordered: "100",
      received: "5",
      shipped: 100,
      atAmazon: 100,
      date: "23 Feb 2022",
    },
    {
      id: 11,
      poNumber: "845123095775",
      user: "John Doe",
      vendor: "ChinaVendor",
      wareHouse: "WH-12ambs",
      ordered: "100",
      received: "5",
      shipped: 100,
      atAmazon: 100,
      date: "23 Feb 2022",
    },
    {
      id: 12,
      poNumber: "845123095775",
      user: "John Doe",
      vendor: "ChinaVendor",
      wareHouse: "WH-12ambs",
      ordered: "100",
      received: "5",
      shipped: 100,
      atAmazon: 100,
      date: "23 Feb 2022",
    },
    {
      id: 13,
      poNumber: "845123095775",
      user: "John Doe",
      vendor: "ChinaVendor",
      wareHouse: "WH-12ambs",
      ordered: "100",
      received: "5",
      shipped: 100,
      atAmazon: 100,
      date: "23 Feb 2022",
    },
    {
      id: 14,
      poNumber: "845123095775",
      user: "John Doe",
      vendor: "ChinaVendor",
      wareHouse: "WH-12ambs",
      ordered: "100",
      received: "5",
      shipped: 100,
      atAmazon: 100,
      date: "23 Feb 2022",
    },
  ];
  const columnDefinitions = [
    {
      headerName: "Title",
      minWidth: 401,
      flex: 1,
      cellRendererFramework: () => {
        return <TableTitle />;
      },
    },
    {
      headerName: "Sell Price",
      minWidth: 139,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "$25.23"),
    },
    {
      headerName: "Max Orderable Qty.",
      minWidth: 157,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "200"),
    },
    {
      headerName: "Onhand Quantity",
      minWidth: 146,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "50"),
    },
    {
      headerName: "Ordered Quantity",
      minWidth: 147,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "50"),
    },
    {
      headerName: "Switch",
      minWidth: 166,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "On"),
    },
    {
      headerName: "Uploaded Date",
      minWidth: 80,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "23 Feb 2022"),
    },
  ];

  const defaultColDef = {
    resizable: true,
    sortable: true,
  };
  const selectOptions = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
    { value: "Option 4", label: "Option 4" },
  ];
  return (
    <>
      <ShoppingCardWrapper>
        {/* <Loader/> */}
        <PageHeader className="d-flex justify-content-between page-header align-items-center">
          <h1 className="page-title">
            <a className="back-arrow" href="#">
              <i className="icon-left-arrow"></i>
            </a>
            Shopping Cart
          </h1>
          <div className="page-header-extras">
            <ul>
              <li>
                <Button onClick={toggleDrawer} outlined>
                  Add Payment Method
                </Button>
              </li>
            </ul>
          </div>
        </PageHeader>
        <Row>
          <Col md={8}>
            <div className="shopping-cart">
              <div className="shopping-cart-group">
                <TableHeader className="d-flex align-items-center justify-content-between shoppingcart-header">
                  <h3 className="table-title">Warehouse Name</h3>
                  <div className="table-header-extras">
                    <Input
                      label="Purchase Order Number"
                      className="field-wrapper"
                      width={"291px"}
                    />
                  </div>
                </TableHeader>
                <div className="shopping-cart-item">
                  <div class="d-flex title-column justify-content-between">
                    <div className="shoppingcart-img">
                      <img width="36" src={TitleImage} alt="no-product" />
                    </div>
                    <div>
                      <span class="title-content">
                        Baby Children Girls Clothes Cartoon Rompers Kids
                        Trousers Jumpsuit Toddler Infant Pants Denim Jeans
                        Overalls Dungarees
                      </span>
                      <ul class="d-flex shopping-cart-details">
                        <li class="">
                          <label>Quantity</label>
                          <QuantityPicker
                            width="127px"
                            smooth
                            min="0"
                          ></QuantityPicker>
                        </li>
                        <li class="">
                          <label>Max. Orderable Qty.</label>
                          <span className="d-block">0000</span>
                        </li>
                        <li class="">
                          <label>Cost</label>
                          <span className="d-block">$25.23</span>
                        </li>
                        <li class="">
                          <label>Profit</label>
                          <span className="d-block  text-success">+$25.23</span>
                        </li>
                        <li class="">
                          <label>Total</label>
                          <strong className="d-block">$25.23</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="shoppingcart-remove">
                      <a href="#">
                        <i className="icon-trash"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="shopping-cart-item">
                  <div class="d-flex title-column justify-content-between">
                    <div className="shoppingcart-img">
                      <img width="36" src={TitleImage} alt="no-product" />
                    </div>
                    <div>
                      <span class="title-content">
                        Baby Children Girls Clothes Cartoon Rompers Kids
                        Trousers Jumpsuit Toddler Infant Pants Denim Jeans
                        Overalls Dungarees
                      </span>
                      <ul class="d-flex shopping-cart-details">
                        <li class="">
                          <label>Quantity</label>
                          <QuantityPicker
                            width="127px"
                            smooth
                            min="0"
                          ></QuantityPicker>
                        </li>
                        <li class="">
                          <label>Max. Orderable Qty.</label>
                          <span className="d-block">0000</span>
                        </li>
                        <li class="">
                          <label>Cost</label>
                          <span className="d-block">$25.23</span>
                        </li>
                        <li class="">
                          <label>Profit</label>
                          <span className="d-block  text-success">+$25.23</span>
                        </li>
                        <li class="">
                          <label>Total</label>
                          <strong className="d-block">$25.23</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="shoppingcart-remove">
                      <a href="#">
                        <i className="icon-trash"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shopping-cart-group">
                <TableHeader className="d-flex align-items-center justify-content-between shoppingcart-header">
                  <h3 className="table-title">Warehouse Name</h3>
                  <div className="table-header-extras">
                    <Input
                      label="Purchase Order Number"
                      className="field-wrapper"
                      width={"291px"}
                    />
                  </div>
                </TableHeader>
                <div className="shopping-cart-item">
                  <div class="d-flex title-column justify-content-between">
                    <div className="shoppingcart-img">
                      <img width="36" src={TitleImage} alt="no-product" />
                    </div>
                    <div>
                      <span class="title-content">
                        Baby Children Girls Clothes Cartoon Rompers Kids
                        Trousers Jumpsuit Toddler Infant Pants Denim Jeans
                        Overalls Dungarees
                      </span>
                      <ul class="d-flex shopping-cart-details">
                        <li class="">
                          <label>Quantity</label>
                          <QuantityPicker
                            width="127px"
                            smooth
                            min="0"
                          ></QuantityPicker>
                        </li>
                        <li class="">
                          <label>Max. Orderable Qty.</label>
                          <span className="d-block">0000</span>
                        </li>
                        <li class="">
                          <label>Cost</label>
                          <span className="d-block">$25.23</span>
                        </li>
                        <li class="">
                          <label>Profit</label>
                          <span className="d-block  text-success">+$25.23</span>
                        </li>
                        <li class="">
                          <label>Total</label>
                          <strong className="d-block">$25.23</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="shoppingcart-remove">
                      <a href="#">
                        <i className="icon-trash"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="shopping-cart-item">
                  <div class="d-flex title-column justify-content-between">
                    <div className="shoppingcart-img">
                      <img width="36" src={TitleImage} alt="no-product" />
                    </div>
                    <div>
                      <span class="title-content">
                        Baby Children Girls Clothes Cartoon Rompers Kids
                        Trousers Jumpsuit Toddler Infant Pants Denim Jeans
                        Overalls Dungarees
                      </span>
                      <ul class="d-flex shopping-cart-details">
                        <li class="">
                          <label>Quantity</label>
                          <QuantityPicker
                            width="127px"
                            smooth
                            min="0"
                          ></QuantityPicker>
                        </li>
                        <li class="">
                          <label>Max. Orderable Qty.</label>
                          <span className="d-block">0000</span>
                        </li>
                        <li class="">
                          <label>Cost</label>
                          <span className="d-block">$25.23</span>
                        </li>
                        <li class="">
                          <label>Profit</label>
                          <span className="d-block  text-success">+$25.23</span>
                        </li>
                        <li class="">
                          <label>Total</label>
                          <strong className="d-block">$25.23</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="shoppingcart-remove">
                      <a href="#">
                        <i className="icon-trash"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="shopping-cart-summary">
              <div className="cart-summary-shipping">
                <h3>Shipping Information</h3>
                <h4>Customer/Warehouse Name</h4>
                <p>2261 Market Street #4344 San Francisco CA, 94114</p>
              </div>
              <div className="cart-summary-payment">
                <h3>Payment Method</h3>
                <p className="d-flex">
                  <img width={28} src={CardIcon} />
                  4214 91** **** 0345
                </p>
              </div>
              <div className="cart-summary-order">
                <h3>Order Summary</h3>
                <ul>
                  <li>
                    Products <span>3</span>
                  </li>
                  <li>
                    Quantity <span>127</span>
                  </li>
                  <li>
                    <strong>
                      Total <span>$40.00</span>
                    </strong>
                  </li>
                </ul>
              </div>
              <Button>Make Payment</Button>
            </div>
          </Col>
        </Row>
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
      </ShoppingCardWrapper>
    </>
  );
};
export default Index;
