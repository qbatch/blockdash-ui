import React, { Component, useState } from "react";
import { UpperHeader, ContentWrapper } from "./style";
import { Box, Grid } from "@mui/material"
import Avatar from "../../../static/images/avatar.svg"
import OwnedNft from "./component/ownedNft";
import MyWallet from "./component/myWallet" 
import BillingPlans from "./component/billingPlans"
import Referral from "./component/referral";
import Profile from  "./component/profile"
import { DashboardWrapper } from "../style";
const Index = () => {
    const [selected, setSelected] = useState("profile")
    const lists = [
        {
            title: "Owned NFTs",
            value: "nft",
            number: 45
        },
        {
            title: "Connected Wallets",
            value: "wallets",
            number: 5
        },
        {
            title: "Billing Details",
            value: "details",
            number: ''
        },
        {
            title: "Referral",
            value: "referral",
            number: ''
        },
        {
            title: "Profile",
            value: "profile",
            number: ''
        },
    ]
    return (
        <DashboardWrapper>
            <UpperHeader>
                <Box >
                    <Box className="upper-header">
                    </Box>
                    <Box className="header-info" bgcolor="#151A26" display="flex">
                        <img src={Avatar} alt="no-profile" />
                        <Box className="user-info">

                            <h6>Alec Thompson</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing ”</p>
                        </Box>
                    </Box>
                </Box>

            </UpperHeader>
            <ContentWrapper>
                <Box className="main-content" bgcolor="#151A26">
                    <Grid container spacing={2}>
                        <Grid item md={3}>
                            <Box className="sidebar-list">
                                {lists.map((list, index) => {
                                    return (
                                        <Box key={index} className={selected === list.value ? "list-tab border-gradient" : "list-tab"} onClick={() => setSelected(list.value)}>
                                            <Box display="flex" justifyContent="space-between">
                                                <span>{list.title}</span>
                                                <span>{list.number && `(${list.number})`}</span>
                                            </Box>

                                        </Box>
                                    )
                                })}
                            </Box>
                        </Grid>
                        <Grid item md={9}>
                            <Box className="content-box">
                            <div className="content">
                            {selected === "nft" ? <OwnedNft /> : selected === "wallets" ?  <MyWallet /> : selected === "details" ? <BillingPlans /> : selected ===  "referral" ? <Referral /> : <Profile /> }
                            </div>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </ContentWrapper>
        </DashboardWrapper>
    )
}
export default Index