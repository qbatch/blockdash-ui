import React from "react";

// Components
import AgGrid from "../../../components/ag-grid-table/index";
import Pagination from "../../../components/pagination/index";

import { PageHeader} from "../style";


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
            headerName: "Name",
            minWidth: 319,
            flex: 1,
            cellRenderer: ({ value }) => (value ? value : "User Name Here"),
        },
        {
            headerName: "Email",
            minWidth: 490,
            flex: 1,
            cellRenderer: ({ value }) => (value ? value : "youremailwillcomehere@companyname.com"),
        },
        {
            headerName: "Company Name",
            minWidth: 347,
            flex: 1,
            cellRenderer: ({ value }) => (value ? value : "Company Name here"),
        },
        {
            headerName: "Dates",
            minWidth: 85,
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
                    Users</h1>
            </PageHeader>

            <AgGrid
                height="190px"
                columnDefinitions={columnDefinitions}
                defaultColDef={defaultColDef}
                user_referrals={user_referrals}
                headerHeight={36}
                rowHeight={44} />
            <Pagination />
        </>
    );
};
export default Index;
