import React,{useState} from "react"
import { Box, Grid, Link } from "@mui/material"
import { AccountMangementWrapper } from "../style"
import TextField from "../../../../components/inputs/input/index"
import Button from "../../../../components/button/button"
import AgGrid from "../../../../components/ag-grid-table/index";
import Pagination from "../../../../components/pagination/index";
import LeroyDean from "../../../../static/images/Leroy-dean.svg"
import Modal from '../../../../components/modal/index';
import { BsCheckCircle } from "react-icons/bs"
import metaMask from "../../../../static/images/meta-mask-small.svg"
const Referral = () => {
    const [copyLink,setCopyLink]=useState(false)
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
            headerName: "Name",
            flex: 1,
            minWidth: 500,
            field: "Invoice ID",
            cellRendererFramework: () => {
                return (
                    <div className="d-flex title-image align-items-center">
                        <img width={"32px"} src={LeroyDean} alt="no-name" />
                        Leroy Dean
                    </div>
                );
            },
        },
        {
            headerName: "Date",
            flex: 1,
            minWidth: 500,
            field: "user",
            cellRenderer: ({ value }) => (value ? value : "October 18 2022"),
        },
        {
            headerName: "Reward",
            flex: 1,
            field: "user",
            cellRendererFramework: () => {
                return (
                    <div className="d-flex title-image align-items-center">
                        <img src={metaMask} alt="no-reward" />
                        MetaMask
                    </div>
                );
            },
        },
    ];
    return (
        <AccountMangementWrapper>
            <Box display="flex" justifyContent="space-between" alignItems="center" >
                <h1 className="heading">Referral Bonus Managment</h1>
            </Box>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item md={7}>
                    <Box sx={{
                        marginTop: "26px"
                    }} display="flex" flexDirection="column" className="copy-url">
                        <span className="free-wallet">Reffer to a friend and get a <span>“Free Wallet”</span></span>
                        <Box sx={{
                            margin: "27px 26px"
                        }}>
                            <TextField
                                fullWidth
                            />
                            <Button fullWidth variant="outlined"   onClick={()=>setCopyLink(true)}>Copy Link</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{
                marginTop: "50px"
            }}>
                <h1 className="payement-heading">Reffered Users</h1>
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
                            background="#030715"
                        />
                        <Pagination background="#030715" />
                    </div>
                </Box>
            </Box>
            <Modal
                className="cancel-modal success-modal"
                open={copyLink}
                maxWidth="xs"
                onClose={()=>setCopyLink(false)}
                closeButton

            >
                <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                    <Box sx={{ marginBottom: "28px" }}><BsCheckCircle color="13D802" fontSize={80} /></Box>
                    <Box sx={{ marginBottom: "30px" }}>
                        <h3>Link Copied</h3>
                    </Box>

                    <p>Send this link to your frieds and get a  <br/><strong>”Free Wallet”</strong></p>
                </Box>
            </Modal>
        </AccountMangementWrapper>
    )
}
export default Referral