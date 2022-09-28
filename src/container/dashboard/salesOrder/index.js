import React, {useState} from "react";
import Select from "../../../components/select/index";
import Input from "../../../components/inputs/input";
import Tabs from "../../../components/tabs/index";
import AgGrid from "../../../components/ag-grid-table/index"
const Index = () => {
  const [count, setCount] = useState(0);
  const Counti =()=>{
      setCount(count-1);
  }
  const Countr =()=>{
      setCount(0);
  }
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
            id: 2,
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
            id: 2,
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
            id: 2,
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
            id: 2,
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
            id: 2,
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
            id: 2,
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
            id: 2,
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
            id: 2,
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
            id: 2,
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
            id: 2,
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
            id: 2,
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
            id: 2,
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
            id: 2,
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
            id: 2,
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
          headerName: "PO#",
          width: 317,
          cellRenderer: ({ value }) =>
            value ? value : "support@digitiumincstore.com",
        },
        {
          headerName: "User",
          width: 200,
          cellRenderer: ({ value }) => (value ? value : "200"),
        },
        {
          headerName: "Vendor",
          width: 227,
          cellRenderer: ({ value }) => (value ? value : "0"),
        },
        {
          headerName: "Warehouse",
          width: 229,
          cellRenderer: ({ value }) => (value ? value : "200"),
        },
        {
          headerName: "PO Status",
          width: 185,
          cellRendererFramework: () => {
            return (
              <span>
              </span>
            );
          },
        },
        {
          headerName: "Ordered",
          width: 145,
          cellRenderer: ({ value }) => (value ? value : "100"),
        },
        {
            headerName: "Received",
            width: 145,
            cellRenderer: ({ value }) => (value ? value : "100"),
          },
          {
            headerName: "Cost",
            width: 145,
            cellRenderer: ({ value }) => (value ? value : "$25.023"),
          },
          {
            headerName: "View",
            width: 145,
            cellRendererFramework: () => {
                return (
                  <span>
                  </span>
                );
              },
          },
          {
            headerName: "Dates",
            width: 145,
            cellRenderer: ({ value }) => (value ? value : "23 Feb 2022"),
          },
          {
            headerName: "View",
            width: 145,
            cellRendererFramework: () => {
                return (
                  <span>
                  </span>
                );
              },
          },
      ];
      const defaultColDef = {
        resizable: true,
        sortable: true,
      };
  const tabs = [
    {
      key: "pick",
      title: "To Pick (112)",
      component: <AgGrid height="432px" columnDefinitions={columnDefinitions} defaultColDef={defaultColDef} user_referrals={user_referrals} rowHeight={44} />,
    },
    {
      key: "ship",
      title: "Ready to Ship (112)",
      component: <AgGrid height="432px" columnDefinitions={columnDefinitions} defaultColDef={defaultColDef} user_referrals={user_referrals} rowHeight={44} />,
    },
    {
      key: "shiped",
      title: "Shipped (112)",
      component: "C",
    },
  ];
  const selectOptions = [
    { value: 'Option 1', label: 'Option 1'},
    { value: 'Option 2', label: 'Option 2'},
    { value: 'Option 3', label: 'Option 3'},
    { value: 'Option 4', label: 'Option 4'}
    // const options = [
    //   { value: 'chocolate', label: 'Chocolate' },
    //   { value: 'strawberry', label: 'Strawberry' },
    //   { value: 'vanilla', label: 'Vanilla' }
    // ]
  ]
  return (
    <>
    <h1>Sales Order</h1>
      <div>
        <h2>Select</h2>
        <Select options={selectOptions}  width="200px"/>
      </div>
      <div>
            <p>
                This is Counter
                You clicked <input type="number" value={count} min="1"/> 
            </p>
            <button className="ant-btn ant-btn-secondary" onClick={() => setCount(count + 1)}>Start Counter</button>
            <button className="ant-btn ant-btn-secondary" onClick={Counti}>Descrese Counter</button>
            <button className="ant-btn ant-btn-secondary" onClick={Countr}>Reset Counter</button>
        </div>
      <div>
        <h2>Input</h2>
        <Input width="200px" type="text"/>
      </div>
      <div>
        <h2>Search Input</h2>
        <Input width="200px" search />
      </div>
      <div>
        <h2>Tabs</h2>
        <Tabs defaultActiveKey={tabs[0].key} tabs={tabs} />
      </div>
    </>
  );
};
export default Index;
