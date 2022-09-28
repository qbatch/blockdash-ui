import React, { useState } from "react";

import Select from "../../../components/select/index";
import Input from "../../../components/inputs/input";
import AgGrid from "../../../components/ag-grid-table/index";
import Pagination from "../../../components/pagination/index";
import Drawer from "../../../components/drawer";
import Stepper from "../../../components/stepper/index";

import Tabs from "../../../components/tabs/index";

import Button from "../../../components/button/button.styled";
import Badge from "../../../components/badge/index";

import { PageHeader, TableHeader } from "../style";


const Index = () => {
  const [value, setValue] = useState();
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen(true);
  }
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
      headerName: "PO#",
      minWidth: 134,
      flex: 1,
      field: 'poNumber',
      cellRenderer: ({ value }) =>
        value ? value : "845123095775",
    },
    {      
      headerName: "User",
      minWidth: 92,
      flex: 1,
      field: 'user',
      cellRenderer: ({ value }) => (value ? value : "John Doe"),
    },
    {      
      headerName: "Vendor",
      minWidth: 114,
      flex: 1,
      field: 'vendor',
      cellRenderer: ({ value }) => (value ? value : "ChinaVendor"),
    },
    {      headerName: "Warehouse",
      minWidth: 116,
      flex: 1,
      field: 'wareHouse',
      cellRenderer: ({ value }) => (value ? value : "WH-12ambs"),
    },
    {      headerName: "PO Status",
      minWidth: 105,
      flex: 1,
      cellRendererFramework: () => {
        return <Badge className="outline-warning" bg="warning">Pending</Badge>;
      },
    },
    {      headerName: "Ordered",
      minWidth: 72,
      flex: 1,
      field: 'ordered',
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {      headerName: "Received",
      minWidth: 89,
      flex: 1,
      field: 'received',
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {      headerName: "Shipped",
      minWidth: 84,
      flex: 1,
      field:'shipped',
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {      headerName: "At Amazon",
      minWidth: 99,
      flex: 1,
      field:'atAmazon',
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "Cost",
      minWidth: 67,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "$25.023"),
    },
    {
      headerName: "Invoice",
      minWidth: 79,
      flex: 1,
      cellRendererFramework: () => {
        return <span><a href="#">View</a></span>;
      },
    },
    {
      headerName: "Dates",
      minWidth: 85,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "23 Feb 2022"),
    },
    {
      headerName: "",
      minWidth: 66,
      flex: 1,
      type: 'rightAligned',
      cellRendererFramework: () => {
        return <a href="#"><i className="icon-right-arrow"></i></a>;
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
      headerName: "PO#",
      minWidth: 156,
      flex: 1,
      field: 'poNumber',
      cellRenderer: ({ value }) =>
        value ? value : "845123095775",
    },
    {      
      headerName: "User",
      minWidth: 122,
      field: 'user',
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "John Doe"),
    },
    {      
      headerName: "Vendor",
      minWidth: 142,
      flex: 1,
      field: 'vendor',
      cellRenderer: ({ value }) => (value ? value : "ChinaVendor"),
    },
    {      headerName: "Warehouse",
      minWidth: 139,
      flex: 1,
      field: 'wareHouse',
      cellRenderer: ({ value }) => (value ? value : "WH-12ambs"),
    },
    {      headerName: "PO Status",
      minWidth: 128,
      flex: 1,
      cellRendererFramework: () => {
        return <Badge className="outline-warning" bg="warning">Pending</Badge>;
      },
    },
    {      
      headerName: "Ordered",
      minWidth: 104,
      flex: 1,
      field: 'ordered',
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {      
      headerName: "Received",
      minWidth: 109,
      field: 'received',
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "100"),
    },
    {
      headerName: "Cost",
      minWidth: 115,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "$25.023"),
    },
    {
      headerName: "Invoice",
      minWidth: 99,
      flex: 1,
      cellRendererFramework: () => {
        return <span><a href="#">View</a></span>;
      },
    },
    {
      headerName: "Dates",
      minWidth: 85,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "23 Feb 2022"),
    },
    {
      headerName: "",
      minWidth: 66,
      flex: 1,
      type: 'rightAligned',
      cellRendererFramework: () => {
        return <a href="#"><i className="icon-right-arrow"></i></a>;
      },
    },
  ];

  const defaultColDef = {
    resizable: true,
    sortable: true,
  };
  const tabs = [
    {
      key: "Receive",
      title: "Receive and Put to Inventory (120)",
      component: (
        <>
        <TableHeader className="d-flex align-items-center justify-content-between">
            <h3 className="table-title"></h3>
            <div className="table-header-extras">
            <Select className="field-wrapper" width={'188px'} placeholder="Status" />
            <Input className="field-wrapper" width={'288px'} search placeholder="Search" />
            </div>
        </TableHeader>
      <AgGrid height="240px" 
      columnDefinitions={columnDefinitions2} 
      defaultColDef={defaultColDef} 
      user_referrals={user_referrals2}
      headerHeight={36}
      rowHeight={44}
      />
      </>
      ),
    },
    {
      key: "ship",
      title: "Pick and Ship (120)",
      component: (
        <>
        <TableHeader className="d-flex align-items-center justify-content-between">
            <h3 className="table-title"></h3>
            <div className="table-header-extras">
                <Select className="field-wrapper" width={'188px'} placeholder="Status" />
                <Input className="field-wrapper" width={'288px'} search placeholder="Search" />
            </div>
        </TableHeader>
        <AgGrid height="240px" 
        columnDefinitions={columnDefinitions} 
        defaultColDef={defaultColDef} 
        user_referrals={user_referrals}
        headerHeight={36}
        rowHeight={44}
        />
        </>
        ),
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
        Purchase Orders Detail</h1>
        <div className="page-header-extras d-none">
          <ul>
            <li><Button onClick={toggleDrawer} outlined>Create Order</Button></li>
          </ul>
          </div>
      </PageHeader>
 

      <Tabs defaultActiveKey={tabs[0].key} tabs={tabs} />
      {/* <AgGrid height="240px" columnDefinitions={columnDefinitions} defaultColDef={defaultColDef} user_referrals={user_referrals} headerHeight={36} rowHeight={44} /> */}
      <Pagination/>
      <Drawer className="" crossIcon drawerHeader="Create Purchase Order" show={isOpen} onHide={()=>{setIsOpen(false)}}>
            <Stepper />
        </Drawer>
    </>
  );
};
export default Index;
