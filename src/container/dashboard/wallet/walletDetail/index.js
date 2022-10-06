import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Button from "../../../../components/button/button";

import BitCoinIcon from "../../../../static/images/bitcoin-icon.svg";
import EthIcon from "../../../../static/images/eth-icon.svg";
import BinanceIcon from "../../../../static/images/binance-icon.svg";

import AtomicWallet from "../../../../static/images/wallet/atomic-wallet.svg";
import Modal from "../../../../components/modal/index";

import { DashboardWrapper, PageHeader, WalletSource } from "../../style";
import { WalletCard } from "./../style";

const Index = () => {
  const [popup, setPopup] = useState(false);
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const handleClickPopup = () => {
    setPopup(true);
  };
  const options = [
    { title: "1h", value: 1 },
    { title: "2h", value: 2 },
    { title: "3h", value: 3 },
    { title: "4h", value: 4 },
  ];
  return (
    <>
      <DashboardWrapper>
        <PageHeader className="d-flex justify-content-between align-items-center">
          <h1 className="page-title">
            <i className="icon-arrow-left icon-left-arrow back-arrow"></i>
            <img className="title-img" src={AtomicWallet} alt="wallet-image" />
            Atomic Wallet
          </h1>
        </PageHeader>
        <div className="dashboard-content">
          <Container maxWidth={"100%"}>
            <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header wallet-details-header d-flex justify-content-between align-items-start">
                    <h3>
                      <img src={BitCoinIcon} alt="wallet-icon" />
                      <span>
                        Bitcoin <small>BTC</small>
                      </span>
                    </h3>
                  </div>
                  <div className="wallet-content wallet-details-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>
                          Total Asset Value: <span>$123,093</span>
                        </h4>
                      </div>
                      <div className="wallet-info-box">
                        <h4>
                          Total NFT’S: <span>0,000</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="wallet-footer d-flex align-items-center justify-space-between">
                    <p>
                      <i className="icon-link gradient-icon"></i>
                      0X0080Y708T6Y8IHWGA
                    </p>
                    <Button
                      onClick={handleClickPopup}
                      variant="outlined"
                      width="113px"
                    >
                      Withdraw
                    </Button>
                  </div>
                </WalletCard>
              </Grid>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header wallet-details-header d-flex justify-content-between align-items-start">
                    <h3>
                      <img src={EthIcon} alt="wallet-icon" />
                      <span>
                        Ethereum <small>ETH</small>
                      </span>
                    </h3>
                  </div>
                  <div className="wallet-content wallet-details-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>
                          Total Asset Value: <span>$123,093</span>
                        </h4>
                      </div>
                      <div className="wallet-info-box">
                        <h4>
                          Total NFT’S: <span>0,000</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="wallet-footer d-flex align-items-center justify-space-between">
                    <p>
                      <i className="icon-link gradient-icon"></i>
                      0X0080Y708T6Y8IHWGA
                    </p>
                    <Button variant="outlined" width="113px">
                      Withdraw
                    </Button>
                  </div>
                </WalletCard>
              </Grid>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header wallet-details-header d-flex justify-content-between align-items-start">
                    <h3>
                      <img src={BinanceIcon} alt="wallet-icon" />
                      <span>
                        Binance <small>BNB</small>
                      </span>
                    </h3>
                  </div>
                  <div className="wallet-content wallet-details-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>
                          Total Asset Value: <span>$123,093</span>
                        </h4>
                      </div>
                      <div className="wallet-info-box">
                        <h4>
                          Total NFT’S: <span>0,000</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="wallet-footer d-flex align-items-center justify-space-between">
                    <p>
                      <i className="icon-link gradient-icon"></i>
                      0X0080Y708T6Y8IHWGA
                    </p>
                    <Button variant="outlined" width="113px">
                      Withdraw
                    </Button>
                  </div>
                </WalletCard>
              </Grid>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header wallet-details-header d-flex justify-content-between align-items-start">
                    <h3>
                      <img src={BitCoinIcon} alt="wallet-icon" />
                      <span>
                        Bitcoin <small>BTC</small>
                      </span>
                    </h3>
                  </div>
                  <div className="wallet-content wallet-details-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>
                          Total Asset Value: <span>$123,093</span>
                        </h4>
                      </div>
                      <div className="wallet-info-box">
                        <h4>
                          Total NFT’S: <span>0,000</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="wallet-footer d-flex align-items-center justify-space-between">
                    <p>
                      <i className="icon-link gradient-icon"></i>
                      0X0080Y708T6Y8IHWGA
                    </p>
                    <Button variant="outlined" width="113px">
                      Withdraw
                    </Button>
                  </div>
                </WalletCard>
              </Grid>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header wallet-details-header d-flex justify-content-between align-items-start">
                    <h3>
                      <img src={EthIcon} alt="wallet-icon" />
                      <span>
                        Ethereum <small>ETH</small>
                      </span>
                    </h3>
                  </div>
                  <div className="wallet-content wallet-details-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>
                          Total Asset Value: <span>$123,093</span>
                        </h4>
                      </div>
                      <div className="wallet-info-box">
                        <h4>
                          Total NFT’S: <span>0,000</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="wallet-footer d-flex align-items-center justify-space-between">
                    <p>
                      <i className="icon-link gradient-icon"></i>
                      0X0080Y708T6Y8IHWGA
                    </p>
                    <Button variant="outlined" width="113px">
                      Withdraw
                    </Button>
                  </div>
                </WalletCard>
              </Grid>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header wallet-details-header d-flex justify-content-between align-items-start">
                    <h3>
                      <img src={BinanceIcon} alt="wallet-icon" />
                      <span>
                        Binance <small>BNB</small>
                      </span>
                    </h3>
                  </div>
                  <div className="wallet-content wallet-details-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>
                          Total Asset Value: <span>$123,093</span>
                        </h4>
                      </div>
                      <div className="wallet-info-box">
                        <h4>
                          Total NFT’S: <span>0,000</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="wallet-footer d-flex align-items-center justify-space-between">
                    <p>
                      <i className="icon-link gradient-icon"></i>
                      0X0080Y708T6Y8IHWGA
                    </p>
                    <Button variant="outlined" width="113px">
                      Withdraw
                    </Button>
                  </div>
                </WalletCard>
              </Grid>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header wallet-details-header d-flex justify-content-between align-items-start">
                    <h3>
                      <img src={BitCoinIcon} alt="wallet-icon" />
                      <span>
                        Bitcoin <small>BTC</small>
                      </span>
                    </h3>
                  </div>
                  <div className="wallet-content wallet-details-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>
                          Total Asset Value: <span>$123,093</span>
                        </h4>
                      </div>
                      <div className="wallet-info-box">
                        <h4>
                          Total NFT’S: <span>0,000</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="wallet-footer d-flex align-items-center justify-space-between">
                    <p>
                      <i className="icon-link gradient-icon"></i>
                      0X0080Y708T6Y8IHWGA
                    </p>
                    <Button variant="outlined" width="113px">
                      Withdraw
                    </Button>
                  </div>
                </WalletCard>
              </Grid>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header wallet-details-header d-flex justify-content-between align-items-start">
                    <h3>
                      <img src={EthIcon} alt="wallet-icon" />
                      <span>
                        Ethereum <small>ETH</small>
                      </span>
                    </h3>
                  </div>
                  <div className="wallet-content wallet-details-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>
                          Total Asset Value: <span>$123,093</span>
                        </h4>
                      </div>
                      <div className="wallet-info-box">
                        <h4>
                          Total NFT’S: <span>0,000</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="wallet-footer d-flex align-items-center justify-space-between">
                    <p>
                      <i className="icon-link gradient-icon"></i>
                      0X0080Y708T6Y8IHWGA
                    </p>
                    <Button variant="outlined" width="113px">
                      Withdraw
                    </Button>
                  </div>
                </WalletCard>
              </Grid>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header wallet-details-header d-flex justify-content-between align-items-start">
                    <h3>
                      <img src={BinanceIcon} alt="wallet-icon" />
                      <span>
                        Binance <small>BNB</small>
                      </span>
                    </h3>
                  </div>
                  <div className="wallet-content wallet-details-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>
                          Total Asset Value: <span>$123,093</span>
                        </h4>
                      </div>
                      <div className="wallet-info-box">
                        <h4>
                          Total NFT’S: <span>0,000</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="wallet-footer d-flex align-items-center justify-space-between">
                    <p>
                      <i className="icon-link gradient-icon"></i>
                      0X0080Y708T6Y8IHWGA
                    </p>
                    <Button variant="outlined" width="113px">
                      Withdraw
                    </Button>
                  </div>
                </WalletCard>
              </Grid>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header wallet-details-header d-flex justify-content-between align-items-start">
                    <h3>
                      <img src={BitCoinIcon} alt="wallet-icon" />
                      <span>
                        Bitcoin <small>BTC</small>
                      </span>
                    </h3>
                  </div>
                  <div className="wallet-content wallet-details-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>
                          Total Asset Value: <span>$123,093</span>
                        </h4>
                      </div>
                      <div className="wallet-info-box">
                        <h4>
                          Total NFT’S: <span>0,000</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="wallet-footer d-flex align-items-center justify-space-between">
                    <p>
                      <i className="icon-link gradient-icon"></i>
                      0X0080Y708T6Y8IHWGA
                    </p>
                    <Button variant="outlined" width="113px">
                      Withdraw
                    </Button>
                  </div>
                </WalletCard>
              </Grid>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header wallet-details-header d-flex justify-content-between align-items-start">
                    <h3>
                      <img src={EthIcon} alt="wallet-icon" />
                      <span>
                        Ethereum <small>ETH</small>
                      </span>
                    </h3>
                  </div>
                  <div className="wallet-content wallet-details-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>
                          Total Asset Value: <span>$123,093</span>
                        </h4>
                      </div>
                      <div className="wallet-info-box">
                        <h4>
                          Total NFT’S: <span>0,000</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="wallet-footer d-flex align-items-center justify-space-between">
                    <p>
                      <i className="icon-link gradient-icon"></i>
                      0X0080Y708T6Y8IHWGA
                    </p>
                    <Button variant="outlined" width="113px">
                      Withdraw
                    </Button>
                  </div>
                </WalletCard>
              </Grid>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header wallet-details-header d-flex justify-content-between align-items-start">
                    <h3>
                      <img src={BinanceIcon} alt="wallet-icon" />
                      <span>
                        Binance <small>BNB</small>
                      </span>
                    </h3>
                  </div>
                  <div className="wallet-content wallet-details-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>
                          Total Asset Value: <span>$123,093</span>
                        </h4>
                      </div>
                      <div className="wallet-info-box">
                        <h4>
                          Total NFT’S: <span>0,000</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="wallet-footer d-flex align-items-center justify-space-between">
                    <p>
                      <i className="icon-link gradient-icon"></i>
                      0X0080Y708T6Y8IHWGA
                    </p>
                    <Button variant="outlined" width="113px">
                      Withdraw
                    </Button>
                  </div>
                </WalletCard>
              </Grid>
            </Grid>
            <Button className="show-more-button" variant="text">
              Show More
            </Button>
          </Container>
          <Modal
            className="modal-wallet cancel-modal"
            open={popup}
            saveText="Yes"
            closeText="No"
            onClose={() => setPopup(false)}
            header="Hello World"
          >
            <i className="icon-error"></i>
            <h3>Are you sure you want to withdraw!</h3>
            <p>You won’t be able to revert it back.</p>
          </Modal>
        </div>
      </DashboardWrapper>
    </>
  );
};
export default Index;
