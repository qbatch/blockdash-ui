import React, { useState } from "react";

// Components
import Select from "../../../../components/select/index";
import Input from "../../../../components/inputs/input";
import AgGrid from "../../../../components/ag-grid-table/index";
import Pagination from "../../../../components/pagination/index";
import Drawer from "../../../../components/drawer";
import Tabs from "../../../../components/tabs/index";
import Modal from "../../../../components/modal/index";


import { PageHeader, TableHeader, PoSummary, PoDetailTable, OrderDetails } from "../../style";
import TableTitle from '../../component/tableTitle';

import Button from "../../../../components/button/button.styled";
import Badge from "../../../../components/badge/index";
import AmazonImage from '../../../../static/images/amazon.png';



const Index = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [popup, setPopup] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(true);
  }
  const handleClick = () => {
    setPopup(true)
  }
  const user_referrals = [
    {
      id: 1,
      poNumber: '845123095775',
      user: 'John Doe',
      vendor: "ChinaVendor",
      wareHouse: 'WH-12ambs',
      ordered: '100',
      received: '5',
      shipped: 100,
      atAmazon: 100,
      date: '23 Feb 2022',
    },
    {
      id: 2,
      poNumber: '845123095775',
      user: 'John Doe',
      vendor: "ChinaVendor",
      wareHouse: 'WH-12ambs',
      ordered: '100',
      received: '5',
      shipped: 100,
      atAmazon: 100,
      date: '23 Feb 2022',
    },
    {
      id: 3,
      poNumber: '845123095775',
      user: 'John Doe',
      vendor: "ChinaVendor",
      wareHouse: 'WH-12ambs',
      ordered: '100',
      received: '5',
      shipped: 100,
      atAmazon: 100,
      date: '23 Feb 2022',
    }
    ,
    {
      id: 4,
      poNumber: '845123095775',
      user: 'John Doe',
      vendor: "ChinaVendor",
      wareHouse: 'WH-12ambs',
      ordered: '100',
      received: '5',
      shipped: 100,
      atAmazon: 100,
      date: '23 Feb 2022',
    },
    {
      id: 5,
      poNumber: '845123095775',
      user: 'John Doe',
      vendor: "ChinaVendor",
      wareHouse: 'WH-12ambs',
      ordered: '100',
      received: '5',
      shipped: 100,
      atAmazon: 100,
      date: '23 Feb 2022',
    },
    {
      id: 6,
      poNumber: '845123095775',
      user: 'John Doe',
      vendor: "ChinaVendor",
      wareHouse: 'WH-12ambs',
      ordered: '100',
      received: '5',
      shipped: 100,
      atAmazon: 100,
      date: '23 Feb 2022',
    },
    {
      id: 7,
      poNumber: '845123095775',
      user: 'John Doe',
      vendor: "ChinaVendor",
      wareHouse: 'WH-12ambs',
      ordered: '100',
      received: '5',
      shipped: 100,
      atAmazon: 100,
      date: '23 Feb 2022',
    },
    {
      id: 8,
      poNumber: '845123095775',
      user: 'John Doe',
      vendor: "ChinaVendor",
      wareHouse: 'WH-12ambs',
      ordered: '100',
      received: '5',
      shipped: 100,
      atAmazon: 100,
      date: '23 Feb 2022',
    },
    {
      id: 9,
      poNumber: '845123095775',
      user: 'John Doe',
      vendor: "ChinaVendor",
      wareHouse: 'WH-12ambs',
      ordered: '100',
      received: '5',
      shipped: 100,
      atAmazon: 100,
      date: '23 Feb 2022',
    },
    {
      id: 10,
      poNumber: '845123095775',
      user: 'John Doe',
      vendor: "ChinaVendor",
      wareHouse: 'WH-12ambs',
      ordered: '100',
      received: '5',
      shipped: 100,
      atAmazon: 100,
      date: '23 Feb 2022',
    },
    {
      id: 11,
      poNumber: '845123095775',
      user: 'John Doe',
      vendor: "ChinaVendor",
      wareHouse: 'WH-12ambs',
      ordered: '100',
      received: '5',
      shipped: 100,
      atAmazon: 100,
      date: '23 Feb 2022',
    },
    {
      id: 12,
      poNumber: '845123095775',
      user: 'John Doe',
      vendor: "ChinaVendor",
      wareHouse: 'WH-12ambs',
      ordered: '100',
      received: '5',
      shipped: 100,
      atAmazon: 100,
      date: '23 Feb 2022',
    },
    {
      id: 13,
      poNumber: '845123095775',
      user: 'John Doe',
      vendor: "ChinaVendor",
      wareHouse: 'WH-12ambs',
      ordered: '100',
      received: '5',
      shipped: 100,
      atAmazon: 100,
      date: '23 Feb 2022',
    },
    {
      id: 14,
      poNumber: '845123095775',
      user: 'John Doe',
      vendor: "ChinaVendor",
      wareHouse: 'WH-12ambs',
      ordered: '100',
      received: '5',
      shipped: 100,
      atAmazon: 100,
      date: '23 Feb 2022',
    }

  ];
  const columnDefinitions = [
    {
      headerName: "Title",
      minWidth: 404,
      flex: 1,
      cellRendererFramework: () => {
        return <TableTitle />
      },
    },
    {
      headerName: "Status",
      minWidth: 130,
      flex: 1,
      cellRendererFramework: () => {
        return <Badge className="outline-warning" bg="warning">Pending</Badge>;
      },
    },
    {
      headerName: "Ordered",
      minWidth: 106,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "200"),
    },
    {
      headerName: "Received",
      minWidth: 111,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "In Shipment",
      minWidth: 124,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "Cost",
      minWidth: 110,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "$25.023"),
    },
    {
      headerName: "Pack Of",
      minWidth: 120,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "Uploaded Date",
      minWidth: 115,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "23 Feb 2022"),
    },
    {
      headerName: "",
      minWidth: 48,
      flex: 1,
      cellRendererFramework: () => {
        return <a href="#"><i className="icon-receive-action"></i></a>;
      },
    },
  ];

  //   table 2
  const columnDefinitions2 = [
    {
      headerName: "Title",
      minWidth: 415,
      flex: 1,
      cellRendererFramework: () => {
        return <TableTitle />
      },
    },
    {
      headerName: "Status",
      minWidth: 140,
      flex: 1,
      cellRendererFramework: () => {
        return <Badge className="outline-warning" bg="warning">Pending</Badge>;
      },
    },
    {
      headerName: "Ordered",
      minWidth: 116,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "200"),
    },
    {
      headerName: "Received",
      minWidth: 121,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "In Shipment",
      minWidth: 134,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "Cost",
      minWidth: 120,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "$25.023"),
    },
    {
      headerName: "Pack Of",
      minWidth: 114,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "Uploaded Date",
      minWidth: 80,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "23 Feb 2022"),
    },
  ];
  // table 3
  const columnDefinitions3 = [
    {
      headerName: "Title",
      minWidth: 415,
      flex: 1,
      cellRendererFramework: () => {
        return <TableTitle />
      },
    },
    {
      headerName: "Status",
      minWidth: 140,
      flex: 1,
      cellRendererFramework: () => {
        return <Badge className="outline-success" bg="success">Shipped</Badge>;
      },
    },
    {
      headerName: "Ordered",
      minWidth: 116,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "200"),
    },
    {
      headerName: "Received",
      minWidth: 121,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "In Shipment",
      minWidth: 134,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "Cost",
      minWidth: 120,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "$25.023"),
    },
    {
      headerName: "Pack Of",
      minWidth: 114,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "Uploaded Date",
      minWidth: 80,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "23 Feb 2022"),
    },
  ];
  const selectOptions = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
    { value: "Option 4", label: "Option 4" },
  ];
  const defaultColDef = {
    resizable: true,
    sortable: true,
  };
  const tabs = [
    {
      key: "Pick",
      title: "To Pick (112)",
      component: (
        <>
          <TableHeader className="table-header-secondary d-flex align-items-center 
            justify-content-between">
            <h3 className="table-title"></h3>
            <div className="table-header-extras">
              <Select className="field-wrapper" width={'188px'} 
                placeholder="Status" options={selectOptions} />
              <Input className="field-wrapper" width={'288px'} search 
                placeholder="Search" />
            </div>
          </TableHeader>
          <PoDetailTable>
            <AgGrid 
              height="375px" 
              headerHeight={36} 
              columnDefinitions={columnDefinitions} 
              defaultColDef={defaultColDef} 
              user_referrals={user_referrals} 
              rowHeight={60} />
            <Pagination />
          </PoDetailTable>
        </>
      ),
    },
    {
      key: "Readytoship",
      title: "Ready to Ship (112)",
      component: (
        <>
          <TableHeader className="table-header-secondary d-flex align-items-center 
          justify-content-between">
            <h3 className="table-title"></h3>
            <div className="table-header-extras">
              <Select className="field-wrapper" 
              width={'188px'} placeholder="Status" options={selectOptions}/>
              <Input 
                className="field-wrapper" width={'288px'} search placeholder="Search" />
              <Button 
                onClick={handleClick} outlined className="field-btn" width={'179px'}>
                  <i className="icon-shipping-van"></i>
                  Create Shipment
              </Button>
            </div>
          </TableHeader>
          <PoDetailTable>
            <AgGrid 
              height="375px" 
              headerHeight={36} 
              columnDefinitions={columnDefinitions2} 
              defaultColDef={defaultColDef} 
              user_referrals={user_referrals} 
              rowHeight={60} />
            <Pagination />
          </PoDetailTable>
        </>
      ),
    },
    {
      key: "shipped",
      title: "Shipped (112)",
      component: (
        <>
          <TableHeader className="table-header-secondary d-flex align-items-center 
            justify-content-between">
            <h3 className="table-title"></h3>
            <div className="table-header-extras">
              <Select className="field-wrapper" 
              width={'188px'} placeholder="Status" options={selectOptions} />
              <Input 
                className="field-wrapper" width={'288px'} search placeholder="Search" />
              <Button 
                onClick={toggleDrawer} outlined className="field-btn" width={'179px'}>
                  <i className="icon-eye"></i>
                  View Shipment Details
              </Button>
            </div>
          </TableHeader>
          <PoDetailTable>
            <AgGrid 
              height="375px" 
              headerHeight={36} 
              columnDefinitions={columnDefinitions3} 
              defaultColDef={defaultColDef} 
              user_referrals={user_referrals} 
              rowHeight={60} />
            <Pagination />
          </PoDetailTable>
        </>
      ),
    },
  ];
  return (
    <>
      {/* <Loader/> */}


      <PageHeader className="d-flex justify-content-between align-items-center">
        <h1 className="page-title page-title-secondary">
          <a className="back-arrow" href="#"><i className="icon-left-arrow"></i></a>PO# 845123095775</h1>
      </PageHeader>

      <PoSummary>
        <div className="d-flex po-summary-details">
          <div className="po-summary-user summary-col">
            <label>User</label>
            <p>John Doe</p>
          </div>
          <div className="po-summary-vendor summary-col">
            <label>Vendor</label>
            <p>ChinaVendor</p>
          </div>
          <div className="po-summary-warehouse summary-col">
            <label>Warehouse</label>
            <p>WH-12ambs</p>
          </div>
          <div className="po-summary-status summary-col">
            <label>PO Status</label>
            <p><Badge className="outline-warning" bg="warning">Pending</Badge></p>
          </div>
          <div className="po-summary-order summary-col">
            <label>Order Qty.</label>
            <p>35</p>
          </div>
          <div className="po-summary-supplier summary-col">
            <label>Supplier</label>
            <p><img src={AmazonImage} alt="supplier-image" /></p>
          </div>
          <div className="po-summary-amazon summary-col">
            <label>Amazon Receive</label>
            <p>N/A</p>
          </div>
          <div className="po-summary-cost summary-col">
            <label>Cost</label>
            <p>$25.023</p>
          </div>
          <div className="po-summary-invoice summary-col">
            <label>Invoice</label>
            <p><a href="#">View</a></p>
          </div>
          <div className="po-summary-date summary-col">
            <label>Date</label>
            <p>23 Feb 2022</p>
          </div>
        </div>
      </PoSummary>
      <TableHeader className="d-flex align-items-center justify-content-between">
        <h3 className="table-title table-title-single">Product Details</h3>
      </TableHeader>
      <Tabs defaultActiveKey={tabs[0].key} tabs={tabs} />

      <Modal className="shipment-modal" header heading="Review Shipment Plan" open={popup} saveText="Create Shipment" closeText="Cancel" onClose={() => setPopup(false)}>
        <OrderDetails>
          <ul className="order-info d-flex">
            <li>
              <label>Shipment ID</label>
              <p>FBA15LR2C308</p>
            </li>
            <li>
              <label>Destination</label>
              <p><a href="#">FTWI</a></p>
            </li>
            <li>
              <label>No. of Products</label>
              <p>20</p>
            </li>
            <li> 
              <label>No. of Units</label>
              <p>20</p>
            </li>
            <li>
              <label>Shipment ID</label>
              <p>FBA15LR2C308</p>
            </li>
            <li>
              <label>Destination</label>
              <p><a href="#">FTWI</a></p>
            </li>
            <li>
              <label>No. of Products</label>
              <p>20</p>
            </li>
            <li> 
              <label>No. of Units</label>
              <p>20</p>
            </li>
            <li>
              <label>Shipment ID</label>
              <p>FBA15LR2C308</p>
            </li>
            <li>
              <label>Destination</label>
              <p><a href="#">FTWI</a></p>
            </li>
            <li>
              <label>No. of Products</label>
              <p>20</p>
            </li>
            <li> 
              <label>No. of Units</label>
              <p>20</p>
            </li>
            <li>
              <label>Shipment ID</label>
              <p>FBA15LR2C308</p>
            </li>
            <li>
              <label>Destination</label>
              <p><a href="#">FTWI</a></p>
            </li>
            <li>
              <label>No. of Products</label>
              <p>20</p>
            </li>
            <li> 
              <label>No. of Units</label>
              <p>20</p>
            </li>
            
          </ul>
        </OrderDetails>
      </Modal>
      <OrderDetails>
        <Drawer className="drawer-sm" crossIcon drawerHeader="Review Shipment Plan" show={isOpen} onHide={() => { setIsOpen(false) }}>
          <ul className="order-info d-flex">
            <li>
              <label>Shipment ID</label>
              <p>FBA15LR2C308</p>
            </li>
            <li>
              <label>Destination</label>
              <p><a href="#">FTWI</a></p>
            </li>
            <li>
              <label>No. of Products</label>
              <p>20</p>
            </li>
            <li> 
              <label>No. of Units</label>
              <p>20</p>
            </li>
            <li>
              <label>Shipment ID</label>
              <p>FBA15LR2C308</p>
            </li>
            <li>
              <label>Destination</label>
              <p><a href="#">FTWI</a></p>
            </li>
            <li>
              <label>No. of Products</label>
              <p>20</p>
            </li>
            <li> 
              <label>No. of Units</label>
              <p>20</p>
            </li>
            <li>
              <label>Shipment ID</label>
              <p>FBA15LR2C308</p>
            </li>
            <li>
              <label>Destination</label>
              <p><a href="#">FTWI</a></p>
            </li>
            <li>
              <label>No. of Products</label>
              <p>20</p>
            </li>
            <li> 
              <label>No. of Units</label>
              <p>20</p>
            </li>
            <li>
              <label>Shipment ID</label>
              <p>FBA15LR2C308</p>
            </li>
            <li>
              <label>Destination</label>
              <p><a href="#">FTWI</a></p>
            </li>
            <li>
              <label>No. of Products</label>
              <p>20</p>
            </li>
            <li> 
              <label>No. of Units</label>
              <p>20</p>
            </li>
            
          </ul>
        </Drawer>
      </OrderDetails>

    </>
  );
};
export default Index;
