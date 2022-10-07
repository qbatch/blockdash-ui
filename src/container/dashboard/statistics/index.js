import { Grid } from "@mui/material";
import { Container, Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/button/button";
import IconBlock from "../../../static/images/icon-block.svg";
import BitCoin from "../../../static/images/bitcoin.svg";
import BitCoinIcon from "../../../static/images/bitcoin-icon.svg";
import MetaMask from "../../../static/images/metamask.svg";
import CoinBaseWallet from "../../../static/images/coinbasewallet.svg";
import CoinBase from "../../../static/images/coinbase.svg";
import Eth from "../../../static/images/eth.svg";
import WalletImg from "../../../static/images/wallet.svg";
import TimeChart from "../../../static/images/small-chart.svg";
import LargeChart from "../../../static/images/chart-large.svg";
import PieChart1 from "../../../static/images/pie-chart1.svg";
import PieChart2 from "../../../static/images/pie-chart2.svg";
import Select from "../../../components/select/index";
import AgGrid from "../../../components/ag-grid-table/index";
import Pagination from "../../../components/pagination/index";
import { useNavigate } from "react-router-dom";
import { DashboardWrapper, PageHeader, WalletSource } from "../style";
import { StateBox, AssetBox } from "./style";
const Index = () => {
  let navigate = useNavigate();
  const options = [
    { title: "1h", value: 1 },
    { title: "2h", value: 2 },
    { title: "3h", value: 3 },
    { title: "4h", value: 4 },
  ];
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
      headerName: "Asset Owned",
      minWidth: 152,
      flex: 1,
      field: "AssetOwned",
      cellRendererFramework: () => {
        return (
          <Box display={"flex"} alignItems="center" className="title-image">
            <img width={"20px"} src={BitCoinIcon} alt="asset image" />
            Bitcoin
          </Box>
        );
      },
    },
    {
      headerName: "Wallet Sources",
      minWidth: 102,
      flex: 1,
      field: "user",
      cellRendererFramework: () => {
        return (
          <WalletSource>
            <ul className="wallet-sources">
              <li>
                {" "}
                <img src={MetaMask} />3
              </li>
              <li>
                {" "}
                <img src={CoinBaseWallet} />4
              </li>
            </ul>
          </WalletSource>
        );
      },
    },
    {
      headerName: "Owned Assets Value",
      minWidth: 122,
      flex: 1,
      field: "vendor",
      cellRenderer: ({ value }) => (value ? value : "$275,000"),
    },
    {
      headerName: "Asset Price",
      minWidth: 119,
      flex: 1,
      field: "wareHouse",
      cellRenderer: ({ value }) => (value ? value : "$275,000"),
    },
    {
      headerName: "Market Cap (1 Hour)",
      minWidth: 108,
      flex: 1,
      cellRenderer: ({ value }) => (value ? value : "$450,275,000"),
    },
    {
      headerName: "Volume (24H)",
      minWidth: 84,
      flex: 1,
      field: "ordered",
      cellRenderer: ({ value }) => (value ? value : "$102,750,00"),
    },
    {
      headerName: "Circulating Supply",
      minWidth: 89,
      flex: 1,
      field: "received",
      cellRenderer: ({ value }) => (value ? value : "432,632"),
    },
    {
      headerName: "Last 7 Days",
      minWidth: 84,
      flex: 1,
      field: "shipped",
      cellRendererFramework: () => {
        return (
          <Box
            display={"flex"}
            alignItems="center"
            className="table-time-chart"
          >
            <p className="text-success text-percentage">
              12% <i className="icon-arrow-up"></i>
            </p>
            <div className="time-chart">
              <img src={TimeChart} width={"81px"} alt="chart img" />
            </div>
          </Box>
        );
      },
    },
  ];

  const defaultColDef = {
    resizable: true,
    sortable: true,
  };
  return (
    <>
      <DashboardWrapper>
        <PageHeader>
          <Box display={'flex'} justifyContent="space-between" alignItems="center">
            <h1 className="page-title">
              Good Morning <span>Name Here</span>
            </h1>
            <div className="page-header-extras">
              <ul>
                <li>
                  <Button
                    onClick={() => navigate("/account-management")}
                    variant="outlined"
                  >
                    Refer A Friend
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => navigate("/wallet")}
                    variant="contained"
                  >
                    Add Wallet
                  </Button>
                </li>
              </ul>
            </div>
          </Box>
        </PageHeader>
        <div className="dashboard-content">
          <Container maxWidth={"100%"}>
            <Grid container spacing={3}>
              <Grid item md={3} xs={12}>
                <StateBox className="stat-box-half">
                  <div className="stat-header">
                    <h4>
                      <i className="icon-box-primary"></i> Total Assets Value
                    </h4>
                  </div>
                  <div className="stat-content">
                    <p>$312,988</p>
                  </div>
                </StateBox>
                <StateBox>
                  <Box display={'flex'} alignItems="center" justifyContent={'space-between'} className="stat-header">
                    <div className="stat-header-left">
                      <h4>
                        <i className="icon-box-secondary"></i> Total Assets
                        Value
                      </h4>
                    </div>
                    <div className="stat-header-right">
                      <Select
                        className="chart-time-select"
                        width={"80px"}
                        menuItem={options}
                      />
                    </div>
                  </Box>
                  <Box display={'flex'} alignItems="center" justifyContent={'space-between'} className="stat-content">
                    <div className="stat-content-left">
                      <p className="text-success">$14,287</p>
                    </div>
                    <div className="stat-content-right d-flex align-items-center">
                      <p className="text-success text-percentage">
                        <i className="icon-arrow-up"></i>2%
                      </p>
                      <div className="time-chart">
                        <img src={TimeChart} width={"48px"} alt="chart img" />
                      </div>
                    </div>
                  </Box>
                </StateBox>
              </Grid>
              <Grid item md={3} xs={12}>
                <StateBox>
                  <div className="d-flex stat-header align-items-center">
                    <h2>Total Wallets Connected</h2>
                  </div>
                  <div className="stat-content">
                    <div className="stat-content-inner d-flex align-items-center">
                      <div className="stat-icon d-flex align-items-center justify-content-center">
                        <img src={WalletImg} alt="icon" />
                      </div>
                      <div className="stat-details">
                        <div className="stat-details-connect">
                          <ul>
                            <li>
                              <img src={MetaMask} />3
                            </li>
                            <li>
                              <img src={CoinBaseWallet} />5
                            </li>
                            <li>
                              <img src={CoinBase} />2
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </StateBox>
              </Grid>
              <Grid item md={3} xs={12}>
                <StateBox>
                  <div className="d-flex stat-header align-items-center">
                    <h2>highest value asset</h2>
                  </div>
                  <div className="stat-content">
                    <div className="stat-content-inner d-flex align-items-center">
                      <div className="stat-icon d-flex align-items-center justify-content-center">
                        <img src={BitCoin} alt="icon" />
                      </div>
                      <div className="stat-details">
                        <div className="stat-detail-item">
                          <h5>Value owned</h5>
                          <p>$2,378</p>
                        </div>
                        <div className="stat-detail-item">
                          <h5>Value owned</h5>
                          <p>$2,378</p>
                        </div>
                        <div className="stat-detail-item">
                          <h5>Held in 3 wallets</h5>
                          <ul className="d-flex">
                            <li>
                              <img src={MetaMask} />3
                            </li>
                            <li>
                              <img src={MetaMask} />3
                            </li>
                            <li>
                              <img src={MetaMask} />3
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </StateBox>
              </Grid>
              <Grid item md={3} xs={12}>
                <StateBox>
                  <div className="d-flex stat-header align-items-center">
                    <h2>Asset with Biggest Change</h2>
                  </div>
                  <div className="stat-content">
                    <div className="stat-content-inner d-flex align-items-center">
                      <div className="stat-icon d-flex align-items-center justify-content-center">
                        <img src={Eth} alt="icon" />
                      </div>
                      <div className="stat-details">
                        <div className="stat-detail-item">
                          <h5>Value owned</h5>
                          <p>$2,378</p>
                        </div>
                        <div className="stat-detail-item">
                          <h5>Value owned</h5>
                          <p>$2,378</p>
                        </div>
                        <div className="stat-detail-item">
                          <ul className="d-flex">
                            <li>
                              <div className="time-chart">
                                <img src={TimeChart} alt="chart img" />
                              </div>
                            </li>
                            <li>
                              <Select
                                className="chart-time-select"
                                width={"80px"}
                                menuItem={options}
                              />
                              <p className="text-success text-percentage">
                                <i className="icon-arrow-up"></i>2%
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </StateBox>
              </Grid>
              <Grid item md={6} xs={12}>
                <AssetBox>
                  <div className="d-flex asset-header align-items-center justify-content-between">
                    <h2>
                      Total Asset Value <span>(October 18, 2022)</span>
                    </h2>
                    <ul className="time-period-tabs">
                      <li className="active">1 Day</li>
                      <li>1 Week</li>
                      <li>1 Month</li>
                      <li>1 Year</li>
                    </ul>
                  </div>
                  <div className="asset-content">
                    <div className="asset-chart">
                      <img src={LargeChart} alt="chart" />
                    </div>
                  </div>
                </AssetBox>
              </Grid>
              <Grid item md={6} xs={12}>
                <AssetBox>
                  <div className="asset-coming-soon">
                    <p className="empty-text">
                      NFT support <br />
                      coming soon!
                    </p>
                  </div>
                </AssetBox>
              </Grid>
              <Grid item md={6} xs={12}>
                <AssetBox>
                  <div className="d-flex asset-header align-items-center justify-content-between">
                    <h2>
                      Total Value of Owned Assets{" "}
                      <span>(October 18, 2022)</span>
                    </h2>
                    <ul className="time-period-tabs">
                      <li className="active">1 Day</li>
                      <li>1 Week</li>
                      <li>1 Month</li>
                      <li>1 Year</li>
                    </ul>
                  </div>
                  <div className="asset-content">
                    <div className="asset-chart">
                      <img src={PieChart1} alt="chart" />
                    </div>
                  </div>
                </AssetBox>
              </Grid>
              <Grid item md={6} xs={12}>
                <AssetBox>
                  <div className="d-flex asset-header align-items-center justify-content-between">
                    <h2>
                      Total Assets Owned by Wallet{" "}
                      <span>(October 18, 2022)</span>
                    </h2>
                    <ul className="time-period-tabs">
                      <li className="active">1 Day</li>
                      <li>1 Week</li>
                      <li>1 Month</li>
                      <li>1 Year</li>
                    </ul>
                  </div>
                  <div className="asset-content">
                    <div className="asset-chart">
                      <img src={PieChart2} alt="chart" />
                    </div>
                  </div>
                </AssetBox>
              </Grid>
              <Grid item md={12} xs={12}>
                <AssetBox className="asset-table">
                  <div className="d-flex asset-header align-items-center justify-content-between">
                    <h2>Asset Detail’s</h2>
                    <ul className="time-period-tabs">
                      <li className="active">1 Day</li>
                      <li>1 Week</li>
                      <li>1 Month</li>
                      <li>1 Year</li>
                    </ul>
                  </div>
                  <div className="asset-content ">
                    <AgGrid
                      height="240px"
                      columnDefinitions={columnDefinitions}
                      defaultColDef={defaultColDef}
                      user_referrals={user_referrals}
                      headerHeight={36}
                      rowHeight={56}
                    />
                  </div>
                  <Pagination />
                </AssetBox>
              </Grid>
            </Grid>
          </Container>
        </div>
      </DashboardWrapper>
    </>
  );
};
export default Index;
