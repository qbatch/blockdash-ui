import React from "react";

// Components
import Select from "../../../../components/select/index";
import Input from "../../../../components/inputs/input";
import AgGrid from "../../../../components/ag-grid-table/index";
import Pagination from "../../../../components/pagination/index";

import { PageHeader, TableHeader, PoDetailTable } from "../../style";
import TableTitle from '../../component/tableTitle';


const Index = () => {
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
      minWidth: 401,
      flex: 1,
      cellRendererFramework: () => {
        return <TableTitle />
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
      {/* <Loader/> */}
      <PageHeader className="d-flex justify-content-between align-items-center">
        <h1 className="page-title">
          Warehouse Invertory</h1>
      </PageHeader>

      <TableHeader className="d-flex align-items-center justify-content-between">
        <h3 className="table-title">Inventory Detail</h3>
        <div className="table-header-extras">
          <Select className="field-wrapper"
           width={'188px'} placeholder="Status" options={selectOptions} />
          <Input className="field-wrapper" width={'288px'} search placeholder="Search" />
        </div>
      </TableHeader>
      
      <PoDetailTable>
        <AgGrid 
          height="240px" 
          columnDefinitions={columnDefinitions} 
          defaultColDef={defaultColDef} 
          user_referrals={user_referrals} 
          headerHeight={36} 
          rowHeight={60} />
        <Pagination />
      </PoDetailTable>
    </>
  );
};
export default Index;
