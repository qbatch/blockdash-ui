import React, { useState } from "react";

import Select from "../../../../components/select/index";
import Input from "../../../../components/inputs/input";
import AgGrid from "../../../../components/ag-grid-table/index";
import Pagination from "../../../../components/pagination/index";
import TableTitle from '../../component/tableTitle';

import { PageHeader, TableHeader, PoSummary, PoDetailTable} from "../../style";
import Tabs from "../../../../components/tabs/index";

import Badge from "../../../../components/badge/index";
import AmazonImage from '../../../../static/images/amazon.png';



const Index = () => {
  const user_referrals = [
    {
      id:1,
      poNumber:'845123095775', 
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
      id:2,
      poNumber:'845123095775', 
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
      id:3,
      poNumber:'845123095775', 
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
      id:4,
      poNumber:'845123095775', 
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
      id:5,
      poNumber:'845123095775', 
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
      id:6,
      poNumber:'845123095775', 
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
      id:7,
      poNumber:'845123095775', 
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
      id:8,
      poNumber:'845123095775', 
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
      id:9,
      poNumber:'845123095775', 
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
      id:10,
      poNumber:'845123095775', 
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
      id:11,
      poNumber:'845123095775', 
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
      id:12,
      poNumber:'845123095775', 
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
      id:13,
      poNumber:'845123095775', 
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
      id:14,
      poNumber:'845123095775', 
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
      minWidth: 401,
      flex: 1,
      cellRendererFramework: () => {
        return <TableTitle />
      },
    },
    {
      headerName: "Status",
      minWidth: 103,
      flex: 1,
      cellRendererFramework: () => {
        return <Badge className="outline-warning" bg="warning">Pending</Badge>;
      },
    },
    {
      headerName: "Ordered",
      minWidth: 91,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "200"),
    },
    {
      headerName: "Received",
      minWidth: 96,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "In Storage",
      minWidth: 92,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "Pending",
      minWidth: 134,
      flex: 1,
      cellRendererFramework: () => {
        return <Input 
        className="input-accent input-success" 
        inputInfo="Updated" 
        width={'71px'} 
        height={'26px'} 
        value={200}/>;
      },
    },
    {
      headerName: "Cost",
      minWidth: 100,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "$25.023"),
    },
    {
      headerName: "Pack Of",
      minWidth: 91,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "Uploaded Date",
      minWidth: 112,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "23 Feb 2022"),
    },
    {
      headerName: "",
      minWidth: 66,
      flex: 1,
      type: 'rightAligned',
      cellRendererFramework: () => {
        return <a href="#"><i className="icon-receive-action"></i></a>;
      },
    },
  ];

  //   table 2
  const user_referrals2 = [
      {
        id:1,
        poNumber:'845123095775', 
          user: 'John Doe',
          vendor: "ChinaVendor",
          wareHouse: 'WH-12ambs',
          ordered: '100',
          received: '5',
          cost: '$25.023', 
          shipped: 100,
          atAmazon: 100,
          date: '23 Feb 2022',
      }, 
      {
        id:2,
        poNumber:'845123095775', 
        user: 'John Doe',
        vendor: "ChinaVendor",
        wareHouse: 'WH-12ambs',
        ordered: '100',
        received: '5',
        cost: '$25.023', 
        shipped: 100,
        atAmazon: 100,
        date: '23 Feb 2022',
      }, 
      {
        id:3,
        poNumber:'845123095775', 
        user: 'John Doe',
        vendor: "ChinaVendor",
        wareHouse: 'WH-12ambs',
        ordered: '100',
        received: '5',
        cost: '$25.023', 
        shipped: 100,
        atAmazon: 100,
        date: '23 Feb 2022',
      }
      , 
      {
        id:4,
        poNumber:'845123095775', 
          user: 'John Doe',
          vendor: "ChinaVendor",
          wareHouse: 'WH-12ambs',
          ordered: '100',
          received: '5',
          cost: '$25.023', 
          shipped: 100,
          atAmazon: 100,
          date: '23 Feb 2022',
      }, 
      {
        id:5,
        poNumber:'845123095775', 
        user: 'John Doe',
        vendor: "ChinaVendor",
        wareHouse: 'WH-12ambs',
        ordered: '100',
        received: '5',
        cost: '$25.023', 
        shipped: 100,
        atAmazon: 100,
        date: '23 Feb 2022',
      }, 
      {
        id:6,
        poNumber:'845123095775', 
        user: 'John Doe',
        vendor: "ChinaVendor",
        wareHouse: 'WH-12ambs',
        ordered: '100',
        received: '5',
        cost: '$25.023', 
        shipped: 100,
        atAmazon: 100,
        date: '23 Feb 2022',
      }, 
      {
        id:7,
        poNumber:'845123095775', 
        user: 'John Doe',
        vendor: "ChinaVendor",
        wareHouse: 'WH-12ambs',
        ordered: '100',
        received: '5',
        cost: '$25.023', 
        shipped: 100,
        atAmazon: 100,
        date: '23 Feb 2022',
      }, 
      {
        id:8,
        poNumber:'845123095775', 
        user: 'John Doe',
        vendor: "ChinaVendor",
        wareHouse: 'WH-12ambs',
        ordered: '100',
        received: '5',
        cost: '$25.023', 
        shipped: 100,
        atAmazon: 100,
        date: '23 Feb 2022',
      }, 
      {
        id:9,
        poNumber:'845123095775', 
        user: 'John Doe',
        vendor: "ChinaVendor",
        wareHouse: 'WH-12ambs',
        ordered: '100',
        received: '5',
        cost: '$25.023', 
        shipped: 100,
        atAmazon: 100,
        date: '23 Feb 2022',
      }, 
      {
        id:10,
        poNumber:'845123095775', 
        user: 'John Doe',
        vendor: "ChinaVendor",
        wareHouse: 'WH-12ambs',
        ordered: '100',
        received: '5',
        cost: '$25.023', 
        shipped: 100,
        atAmazon: 100,
        date: '23 Feb 2022',
      }, 
      {
        id:11,
        poNumber:'845123095775', 
        user: 'John Doe',
        vendor: "ChinaVendor",
        wareHouse: 'WH-12ambs',
        ordered: '100',
        received: '5',
        cost: '$25.023', 
        shipped: 100,
        atAmazon: 100,
        date: '23 Feb 2022',
      }
      
  ];
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
      minWidth: 141,
      flex: 1,
      cellRendererFramework: () => {
        return <Badge className="outline-warning" bg="warning">Pending</Badge>;
      },
    },
    {
      headerName: "Ordered",
      minWidth: 117,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "200"),
    },
    {
      headerName: "Received",
      minWidth: 122,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "In Storage",
      minWidth: 127,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "Cost",
      minWidth: 121,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "$25.023"),
    },
    {
      headerName: "Pack Of",
      minWidth: 116,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "Uploaded Date",
      minWidth: 85,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "23 Feb 2022"),
    },
  ];

  const defaultColDef = {
    resizable: true,
    sortable: true,
  };
  const tabs = [
    {
      key: "Receive",
      title: "To Receive (120)",
      component: (
        <>
            <TableHeader 
            className="table-header-secondary d-flex align-items-center justify-content-between">
              <h3 className="table-title"></h3>
              <div className="table-header-extras">
                <Select 
                className="field-wrapper" 
                width={'188px'} 
                placeholder="Status" />
                <Input 
                className="field-wrapper" 
                width={'288px'} 
                search 
                placeholder="Search" />
              </div>
          </TableHeader>
          <PoDetailTable>
            <AgGrid height="375px"
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
      key: "inventory",
      title: "Inventory (120)",
      component: (
        <>
      <TableHeader 
        className="table-header-secondary d-flex align-items-center justify-content-between">
        <h3 className="table-title"></h3>
        <div className="table-header-extras">
          <Select 
            className="field-wrapper" 
            width={'188px'} 
            placeholder="Status" />
          <Input 
            className="field-wrapper"
            width={'288px'} 
            search 
            placeholder="Search" />
        </div>
      </TableHeader>
         <PoDetailTable>
        <AgGrid height="375px" headerHeight={36} columnDefinitions={columnDefinitions2} defaultColDef={defaultColDef} user_referrals={user_referrals2} rowHeight={60} />
        <Pagination />
      </PoDetailTable>
        </>
        ),
    },
  ];
  return (
    <>
  
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

    </>
  );
};
export default Index;
