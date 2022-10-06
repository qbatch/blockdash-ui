import React from "react"
import { Box, Grid } from "@mui/material"
import {AccountMangementWrapper} from "../style"
import Button from "../../../../components/button/button";
import MetaMask from "../../../../static/images/metamask.svg"
import CoinBase from "../../../../static/images/coinbase.svg"
import CoinBaseWallet from "../../../../static/images/coinbasewallet.svg"
import Kraken from "../../../../static/images/kraken.svg"
import WalletConnect from "../../../../static/images/walletConnect.svg"
import Gemini from "../../../../static/images/gemini.svg"
const wallets = () => {
    const wallet=[
        {
            img:MetaMask,
            title:"MetaMask",
            data:"Added on October 18, 2022"
        },
        {
            img:CoinBaseWallet,
            title:"Coinbase Wallet",
            data:"Added on July 18, 2022"
        },
        {
            img:CoinBase,
            title:"Coinbase",
            data:"Added on May 18, 2022"
        },
        {
            img:Kraken,
            title:"Gemini",
            data:"Added on October 18, 2022"
        },
        {
            img:WalletConnect,
            title:"WalletConnect",
            data:"Added on October 18, 2022"
        },
        {
            img:Gemini,
            title:"WalletConnect",
            data:"Added on October 18, 2022"
        },
    ]
    return (
        <AccountMangementWrapper >
            <Box display="flex" justifyContent="space-between" alignItems="center" >
                <h1 className="heading">My Wallet</h1>
                <Button variant="outlined">Connect Wallet</Button>
            </Box>
            <Box mt={0.8}>
            <Grid container spacing={3}>
                {wallet.map((value,index)=>{
                    return(
                        <Grid item md={4}>
                            <Box bgcolor="#030715" className="wallet-box">
                               <img src={value.img} alt="no-wallet" />
                                <Box display="flex" flexDirection="column" className="wallet-info">
                                    <span>{value.title}</span>
                                  <span>{value.data}</span>  
                                </Box>
                            </Box>
                          </Grid>  
                    )
                })}
                </Grid>
                </Box>

        </AccountMangementWrapper>
    )
}
export default wallets