import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Button from "../../../components/button/button";
import Input from "../../../components/inputs/input/index";
import Select from "../../../components/select/index";

import AtomicWallet from "../../../static/images/wallet/atomic-wallet.svg";
import ElectrumWallet from "../../../static/images/wallet/electrum-wallet.svg";
import ExodusWallet from "../../../static/images/wallet/exodus-wallet.svg";
import JaxxWallet from "../../../static/images/wallet/jaxx-wallet.svg";
import LedgerWallet from "../../../static/images/wallet/ledger-wallet.svg";
import PortisWallet from "../../../static/images/wallet/portis-wallet.svg";
import TrezorWallet from "../../../static/images/wallet/portis-wallet.svg";
import TrustWallet from "../../../static/images/wallet/portis-wallet.svg";
import { BsExclamationTriangle } from "react-icons/bs";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Modal from "../../../components/modal/index";
import { useNavigate } from "react-router-dom";
import { DashboardWrapper, PageHeader, WalletSource } from "../style";
import { WalletCard } from "./style";

const Index = () => {
  const options = [
    { title: "Select Chain", value: 1 },
    { title: "Chain Name Here", value: 2 },
    { title: "Nam of the Chain Here", value: 3 },
    { title: "Chain Name Here", value: 4 },
    { title: "Nam of the Chain Here", value: 4 },
  ];
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const [popup, setPopup] = useState(false);
  const [popupstatic, setstaticPopup] = useState(false);
  let navigate = useNavigate();
  const handleClickPopup = () => {
    setPopup(true);
    handleClose();
  };
  const handleStaticPopup = () => {
    setstaticPopup(true);
    handleClose();
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <>
      <DashboardWrapper>
        <PageHeader className="d-flex justify-content-between align-items-center">
          <h1 className="page-title">My Wallets</h1>
          <div className="page-header-extras">
            <ul>
              <li>
                <Button variant="outlined">Add Wallet</Button>
              </li>
            </ul>
          </div>
        </PageHeader>
        <div className="dashboard-content">
          <Container maxWidth={"100%"}>
            <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header d-flex justify-content-between align-items-start">
                    <h2>
                      <img src={AtomicWallet} alt="wallet-icon" /> Atomic Wallet
                    </h2>
                    <ul>
                      <li>
                        <i className="icon-dots" onClick={handleClick}></i>

                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          className="custom-dropdown"
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem onClick={handleClickPopup}>
                            Wallet Addresses
                          </MenuItem>
                          <MenuItem onClick={handleStaticPopup}>
                            Static Assetts
                          </MenuItem>
                        </Menu>
                      </li>
                      <li>
                        <i onClick={()=>  navigate("/walletDetails")} className="icon-arrow-right"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="wallet-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>Total Asset Value</h4>
                        <p>$123,093</p>
                      </div>
                      <div className="wallet-info-box">
                        <h4>Currencies Connected</h4>
                        <p>12</p>
                      </div>
                    </div>
                  </div>
                </WalletCard>
              </Grid>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header d-flex justify-content-between align-items-start">
                    <h2>
                      <img src={ElectrumWallet} alt="wallet-icon" /> Electrum
                      Wallet
                    </h2>
                    <ul>
                      <li>
                        <i className="icon-dots"></i>
                      </li>
                      <li>
                        <i className="icon-arrow-right"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="wallet-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>Total Asset Value</h4>
                        <p>$123,093</p>
                      </div>
                      <div className="wallet-info-box">
                        <h4>Currencies Connected</h4>
                        <p>12</p>
                      </div>
                    </div>
                  </div>
                </WalletCard>
              </Grid>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header d-flex justify-content-between align-items-start">
                    <h2>
                      <img src={ExodusWallet} alt="wallet-icon" /> Exodus Wallet
                    </h2>
                    <ul>
                      <li>
                        <i className="icon-dots"></i>
                      </li>
                      <li>
                        <i className="icon-arrow-right"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="wallet-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>Total Asset Value</h4>
                        <p>$123,093</p>
                      </div>
                      <div className="wallet-info-box">
                        <h4>Currencies Connected</h4>
                        <p>12</p>
                      </div>
                    </div>
                  </div>
                </WalletCard>
              </Grid>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header d-flex justify-content-between align-items-start">
                    <h2>
                      <img src={JaxxWallet} alt="wallet-icon" /> Jaxx Wallet
                    </h2>
                    <ul>
                      <li>
                        <i className="icon-dots"></i>
                      </li>
                      <li>
                        <i className="icon-arrow-right"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="wallet-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>Total Asset Value</h4>
                        <p>$123,093</p>
                      </div>
                      <div className="wallet-info-box">
                        <h4>Currencies Connected</h4>
                        <p>12</p>
                      </div>
                    </div>
                  </div>
                </WalletCard>
              </Grid>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header d-flex justify-content-between align-items-start">
                    <h2>
                      <img src={LedgerWallet} alt="wallet-icon" /> Ledger Wallet
                    </h2>
                    <ul>
                      <li>
                        <i className="icon-dots"></i>
                      </li>
                      <li>
                        <i className="icon-arrow-right"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="wallet-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>Total Asset Value</h4>
                        <p>$123,093</p>
                      </div>
                      <div className="wallet-info-box">
                        <h4>Currencies Connected</h4>
                        <p>12</p>
                      </div>
                    </div>
                  </div>
                </WalletCard>
              </Grid>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header d-flex justify-content-between align-items-start">
                    <h2>
                      <img src={PortisWallet} alt="wallet-icon" /> Portis Wallet
                    </h2>
                    <ul>
                      <li>
                        <i className="icon-dots"></i>
                      </li>
                      <li>
                        <i className="icon-arrow-right"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="wallet-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>Total Asset Value</h4>
                        <p>$123,093</p>
                      </div>
                      <div className="wallet-info-box">
                        <h4>Currencies Connected</h4>
                        <p>12</p>
                      </div>
                    </div>
                  </div>
                </WalletCard>
              </Grid>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header d-flex justify-content-between align-items-start">
                    <h2>
                      <img src={TrezorWallet} alt="wallet-icon" /> Trezor Wallet
                    </h2>
                    <ul>
                      <li>
                        <i className="icon-dots"></i>
                      </li>
                      <li>
                        <i className="icon-arrow-right"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="wallet-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>Total Asset Value</h4>
                        <p>$123,093</p>
                      </div>
                      <div className="wallet-info-box">
                        <h4>Currencies Connected</h4>
                        <p>12</p>
                      </div>
                    </div>
                  </div>
                </WalletCard>
              </Grid>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header d-flex justify-content-between align-items-start">
                    <h2>
                      <img src={TrustWallet} alt="wallet-icon" /> Trust Wallet
                    </h2>
                    <ul>
                      <li>
                        <i className="icon-dots"></i>
                      </li>
                      <li>
                        <i className="icon-arrow-right"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="wallet-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>Total Asset Value</h4>
                        <p>$123,093</p>
                      </div>
                      <div className="wallet-info-box">
                        <h4>Currencies Connected</h4>
                        <p>12</p>
                      </div>
                    </div>
                  </div>
                </WalletCard>
              </Grid>
              <Grid item md={4} xs={12}>
                <WalletCard>
                  <div className="wallet-header d-flex justify-content-between align-items-start">
                    <h2>
                      <img src={ExodusWallet} alt="wallet-icon" /> Exodus Wallet
                    </h2>
                    <ul>
                      <li>
                        <i className="icon-dots"></i>
                      </li>
                      <li>
                        <i className="icon-arrow-right"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="wallet-content">
                    <div className="wallet-info d-flex">
                      <div className="wallet-info-box">
                        <h4>Total Asset Value</h4>
                        <p>$123,093</p>
                      </div>
                      <div className="wallet-info-box">
                        <h4>Currencies Connected</h4>
                        <p>12</p>
                      </div>
                    </div>
                  </div>
                </WalletCard>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Modal
          className="modal-wallet"
          open={popup}
          saveText="Save"
          closeText="Cancel"
          onClose={() => setPopup(false)}
          header="Wallet Addresses"
          dialogActions
        >
          <Input
            label="Enter Address"
            placeholder="Enter Address"
            size="medium"
          />
          <Select
            menuItem={options}
          />
        </Modal>
        <Modal
          className="modal-wallet"
          open={popupstatic}
          saveText="Save"
          closeText="Cancel"
          onClose={() => setstaticPopup(false)}
          header="Static Asset"
          dialogActions
        >
          <Input
            label="Enter Asset Name"
            placeholder="Enter Asset Name"
            size="medium"
          />
          <Input
            label="Balance"
            placeholder="Balance"
            size="medium"
          />
          <Input className="mb-0"
            label="USD Price"
            placeholder="USD Price"
            size="medium"
          />
        </Modal>
      </DashboardWrapper>
    </>
  );
};
export default Index;
