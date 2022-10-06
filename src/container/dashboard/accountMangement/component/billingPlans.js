import React from "react"
import { Box, Grid, Stack, Link } from "@mui/material"
import { AccountMangementWrapper } from "../style"
import { BsCheck } from "react-icons/bs";
import MasterCard from "../../../../static/images/master-card.svg"
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { DashboardWrapper } from "../../style"
import Button from "../../../../components/button/button";
import AgGrid from "../../../../components/ag-grid-table/index";
import Pagination from "../../../../components/pagination/index";
const BillingPlans = () => {
    const defaultColDef = {
        resizable: true,
        sortable: true,
    };
    const user_referrals = [
        {
            id: 1,
            AssetOwned: "Bitcoin",
            OwnedAssetsValue: "$275,000",
            AssetPrice: "$275,000",
            MarketCap: "$450,275,000",
            Volume: "$102,750,00",
            CirculatingSupply: "432,632",
        },
        {
            id: 2,
            AssetOwned: "Bitcoin",
            OwnedAssetsValue: "$275,000",
            AssetPrice: "$275,000",
            MarketCap: "$450,275,000",
            Volume: "$102,750,00",
            CirculatingSupply: "432,632",
        },
        {
            id: 3,
            AssetOwned: "Bitcoin",
            OwnedAssetsValue: "$275,000",
            AssetPrice: "$275,000",
            MarketCap: "$450,275,000",
            Volume: "$102,750,00",
            CirculatingSupply: "432,632",
        },
        {
            id: 4,
            AssetOwned: "Bitcoin",
            OwnedAssetsValue: "$275,000",
            AssetPrice: "$275,000",
            MarketCap: "$450,275,000",
            Volume: "$102,750,00",
            CirculatingSupply: "432,632",
        },
        {
            id: 5,
            AssetOwned: "Bitcoin",
            OwnedAssetsValue: "$275,000",
            AssetPrice: "$275,000",
            MarketCap: "$450,275,000",
            Volume: "$102,750,00",
            CirculatingSupply: "432,632",
        },
        {
            id: 6,
            AssetOwned: "Bitcoin",
            OwnedAssetsValue: "$275,000",
            AssetPrice: "$275,000",
            MarketCap: "$450,275,000",
            Volume: "$102,750,00",
            CirculatingSupply: "432,632",
        },
        {
            id: 7,
            AssetOwned: "Bitcoin",
            OwnedAssetsValue: "$275,000",
            AssetPrice: "$275,000",
            MarketCap: "$450,275,000",
            Volume: "$102,750,00",
            CirculatingSupply: "432,632",
        },
        {
            id: 8,
            AssetOwned: "Bitcoin",
            OwnedAssetsValue: "$275,000",
            AssetPrice: "$275,000",
            MarketCap: "$450,275,000",
            Volume: "$102,750,00",
            CirculatingSupply: "432,632",
        },
        {
            id: 9,
            AssetOwned: "Bitcoin",
            OwnedAssetsValue: "$275,000",
            AssetPrice: "$275,000",
            MarketCap: "$450,275,000",
            Volume: "$102,750,00",
            CirculatingSupply: "432,632",
        },
        {
            id: 10,
            AssetOwned: "Bitcoin",
            OwnedAssetsValue: "$275,000",
            AssetPrice: "$275,000",
            MarketCap: "$450,275,000",
            Volume: "$102,750,00",
            CirculatingSupply: "432,632",
        },
        {
            id: 11,
            AssetOwned: "Bitcoin",
            OwnedAssetsValue: "$275,000",
            AssetPrice: "$275,000",
            MarketCap: "$450,275,000",
            Volume: "$102,750,00",
            CirculatingSupply: "432,632",
        },
    ];
    const columnDefinitions = [
        {
            headerName: "Invoice ID",
            minWidth: 152,
            flex: 1,
            field: "Invoice ID",
            cellRenderer: ({ value }) => (value ? value : "0001"),
        },
        {
            headerName: "Date",
            minWidth: 102,
            flex: 1,
            field: "user",
            cellRenderer: ({ value }) => (value ? value : "October 18 2022"),
        },
        {
            headerName: "Detials",
            minWidth: 102,
            flex: 1,
            field: "user",
            cellRenderer: ({ value }) => (value ? value : "Monthly Plan"),
        },
        {
            headerName: "Amount",
            minWidth: 122,
            flex: 1,
            field: "vendor",
            cellRenderer: ({ value }) => (value ? value : "$9.00"),
        },
        {
            headerName: "Download Invoice",
            minWidth: 119,
            flex: 1,
            field: "wareHouse",
            cellRendererFramework: () => {
                return (
                    <Link href="#" underline="none">Invoice Ocotber 8 2022</Link>
                );
            },
        },
    ];
    return (
        <DashboardWrapper>
            <AccountMangementWrapper>
                <Box display="flex" justifyContent="space-between" alignItems="center" >
                    <h1 className="heading">Billing Plan</h1>
                </Box>
                <Grid container >
                    <Grid item md={6}>
                        <Box p={3} className="billing-details">
                            <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
                                <Box display="flex" alignItems="baseline"><h1> $9.99</h1><span className="month">/month</span></Box>
                                <span className="billing-date">Next payment October 18 2022</span>
                            </Stack>
                            <p><b>Upgrade</b> your plan to yearly and receive 2 free months!</p>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{
                    marginTop: "36px",
                    position: "relative"
                }}>
                    <h3 className="payement-heading">Payment Method</h3>
                    <span className="flow-check">FLOW CHECK, DELETE AND ADD</span>

                    <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center" mt={3}>
                        <Box position="relative">
                            <Box p={3} className="payment-card border-gradient" sx={{ borderRadius: "12px" }}>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <span>Credit Card</span>
                                    <span className="check-icon"><BsCheck /></span>
                                </Box>
                                <Box sx={{ marginTop: "14px" }} display="flex" alignItems="flex-start">
                                    <img src={MasterCard} alt="no-card" />
                                    <Box className="card-info" display="flex" flexDirection="column">
                                        <span >**** **** **** 2425</span>
                                        <span>Expiry Date: 06/24 <AiOutlineInfoCircle /></span>
                                    </Box>
                                </Box>

                            </Box>
                            <span className="card-status">Please update your card, it will be expiring soon.</span>
                        </Box>
                        <Box p={3} className="add-card payment-card" sx={{ borderRadius: "12px" }} display="flex" alignItems="center" justifyContent="center">
                            <span className="add-icon"><BsPlus /></span>
                        </Box>
                    </Stack>
                    <Box sx={{
                        marginTop: "46px"
                    }}>
                        <Button variant="outlined"  size="large">Cancel</Button>
                    </Box>
                    <Box sx={{
                        marginTop: "50px"
                    }}>
                        <h3 className="payement-heading">Billing History</h3>
                        <Box bgcolor="#030715" sx={{
                            marginTop: "26px"
                        }} borderRadius={2} p={3}>
                            <div className="asset-content ">
                                <AgGrid
                                    height="240px"
                                    columnDefinitions={columnDefinitions}
                                    defaultColDef={defaultColDef}
                                    user_referrals={user_referrals}
                                    headerHeight={36}
                                    rowHeight={56}
                                    background={({ theme }) => theme.colors.background}
                                />
                                <Pagination  background={({ theme }) => theme.colors.background} />
                            </div>
                        </Box>
                    </Box>
                </Box>
            </AccountMangementWrapper>
        </DashboardWrapper>
    )
}
export default BillingPlans