import React from "react"
import { Box, Grid } from "@mui/material"
import Nft from "../../../../components/Nft/index";
import NftImage from "../../../../static/images/nft-image.png";
import EthIcon from "../../../../static/images/eth-icon.svg";
import {AccountMangementWrapper} from "../style"
const OwnedNft = () => {
    return (
        <AccountMangementWrapper >
            <Box display="flex" justifyContent="space-between">
                <h1 className="heading">Owned NFT’S</h1>
                <div className="order-list">
                    <ul>
                        <li className="active">1 Day</li>
                        <li>1 Week</li>
                        <li>1 Month</li>
                    </ul>
                </div>
            </Box>
            <Grid container spacing={3}>
                {[1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((value) => (
                    <Grid key={value} item md={3}>
                        <Nft
                            nftimage={NftImage} 
                            name="NFT Name"
                            icon={EthIcon}
                            price="1.25"
                            background="#030715"
                        />
                    </Grid>
                ))}
                
            </Grid>

        </AccountMangementWrapper>
    )
}
export default OwnedNft