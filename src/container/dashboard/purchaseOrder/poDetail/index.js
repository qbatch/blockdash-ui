import React, { useState } from "react";

import Select from "../../../../components/select/index";
import Input from "../../../../components/inputs/input";
import AgGrid from "../../../../components/ag-grid-table/index";
import Pagination from "../../../../components/pagination/index";

import Badge from "../../../../components/badge/index";
import TableTitle from '../../component/tableTitle';

import { PageHeader, TableHeader } from "../../style";
import { PoSummary, PoDetailTable } from "../style";
import AmazonImage from '../../../../static/images/amazon.png';

const Index = () => {
  const [value, setValue] = useState();


  const user_referrals = [
    {
      id: 1,
      email: "helo@gmail.com",
      purchase: 12,
      estimate: 4,
      ship: 5,
      full_name: "Hello",
      total_dollars: 35,
    },
    {
      id: 2,
      email: "helo@gmail.com",
      purchase: 12,
      estimate: 4,
      ship: 5,
      full_name: "Hello",
      total_dollars: 35,
    },
    {
      id: 3,
      email: "helo@gmail.com",
      purchase: 12,
      estimate: 4,
      ship: 5,
      full_name: "Hello",
      total_dollars: 35,
    },
    {
      id: 4,
      email: "helo@gmail.com",
      purchase: 12,
      estimate: 4,
      ship: 5,
      full_name: "Hello",
      total_dollars: 35,
    },
    {
      id: 5,
      email: "helo@gmail.com",
      purchase: 12,
      estimate: 4,
      ship: 5,
      full_name: "Hello",
      total_dollars: 35,
    },
    {
      id: 6,
      email: "helo@gmail.com",
      purchase: 12,
      estimate: 4,
      ship: 5,
      full_name: "Hello",
      total_dollars: 35,
    },
    {
      id: 7,
      email: "helo@gmail.com",
      purchase: 12,
      estimate: 4,
      ship: 5,
      full_name: "Hello",
      total_dollars: 35,
    },
    {
      id: 8,
      email: "helo@gmail.com",
      purchase: 12,
      estimate: 4,
      ship: 5,
      full_name: "Hello",
      total_dollars: 35,
    },
    {
      id: 9,
      email: "helo@gmail.com",
      purchase: 12,
      estimate: 4,
      ship: 5,
      full_name: "Hello",
      total_dollars: 35,
    },
    {
      id: 10,
      email: "helo@gmail.com",
      purchase: 12,
      estimate: 4,
      ship: 5,
      full_name: "Hello",
      total_dollars: 35,
    },
    {
      id: 11,
      email: "helo@gmail.com",
      purchase: 12,
      estimate: 4,
      ship: 5,
      full_name: "Hello",
      total_dollars: 35,
    },
    {
      id: 12,
      email: "helo@gmail.com",
      purchase: 12,
      estimate: 4,
      ship: 5,
      full_name: "Hello",
      total_dollars: 35,
    },
    {
      id: 13,
      email: "helo@gmail.com",
      purchase: 12,
      estimate: 4,
      ship: 5,
      full_name: "Hello",
      total_dollars: 35,
    },
    {
      id: 14,
      email: "helo@gmail.com",
      purchase: 12,
      estimate: 4,
      ship: 5,
      full_name: "Hello",
      total_dollars: 35,
    },
  ];
  const columnDefinitions = [
    {
      headerName: "Title",
      minWidth: 364,
      flex: 1,
      cellRendererFramework: () => {
        return <TableTitle />
      },
    },
    {
      headerName: "Status",
      minWidth: 92,
      flex: 1,
      cellRendererFramework: () => {
        return <Badge className="outline-warning" bg="warning">Pending</Badge>;
      },
    },
    {
      headerName: "Vendor’s SKU",
      minWidth: 117,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "NB07NNTER97"),
    },
    {
      headerName: "Qty. Ordered",
      minWidth: 111,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "200"),
    },
    {
      headerName: "Received",
      minWidth: 90,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "Shipped",
      minWidth: 85,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "At Amazon",
      minWidth: 100,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "Cost",
      minWidth: 65,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "$25.023"),
    },
    {
      headerName: "Pack Of",
      minWidth: 83,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "Created Date",
      minWidth: 85,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "23 Feb 2022"),
    },
  ];

  const defaultColDef = {
    flex: 1,
    sortable: false,
    resizable: false,
    filter: false,
  };

  const tabs = [
    {
      key: "pick",
      title: "To Pick (112)",
      component: (
        <AgGrid
          height="432px"
          columnDefinitions={columnDefinitions}
          defaultColDef={defaultColDef}
          user_referrals={user_referrals}
          rowHeight={44}
        />
      ),
    },
    {
      key: "ship",
      title: "Ready to Ship (112)",
      component: (
        <AgGrid
          height="432px"
          columnDefinitions={columnDefinitions}
          defaultColDef={defaultColDef}
          user_referrals={user_referrals}
          rowHeight={44}
        />
      ),
    },
    {
      key: "shiped",
      title: "Shipped (112)",
      component: "C",
    },
  ];
  const selectOptions = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
    { value: "Option 4", label: "Option 4" },
  ];
  return (
    <>
      {/* <Loader/> */}
      <PageHeader className="d-flex justify-content-between align-items-center">
        <h1 className="page-title">
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
        <h3 className="table-title">Product Details</h3>
        <div className="table-header-extras">
          <Select className="field-wrapper" width={'188px'} placeholder="Status" />
          <Input className="field-wrapper" width={'288px'} search placeholder="Search" />
        </div>
      </TableHeader>
      <PoDetailTable>
        <AgGrid height="331px" headerHeight={36} columnDefinitions={columnDefinitions} defaultColDef={defaultColDef} user_referrals={user_referrals} rowHeight={60} />
        <Pagination />
      </PoDetailTable>
    </>
  );
};
export default Index;
