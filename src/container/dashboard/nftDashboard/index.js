import { Grid } from "@mui/material";
import { Container, Box } from "@mui/system";
import React, { useState } from "react";
import Button from "../../../components/button/button";
import ChartImage from "../../../static/images/chart1.svg";
import ChartImage1 from "../../../static/images/chart1small.svg";
import ChartImage2 from "../../../static/images/chart2.svg";
import Legend1 from "../../../static/images/legend1.svg";
import Legend2 from "../../../static/images/legend2.svg";
import TimeChart from "../../../static/images/small-chart.svg";
import AgGrid from "../../../components/ag-grid-table/index";
import Pagination from "../../../components/pagination/index";
import NftImage from "../../../static/images/nft-image.png";
import NftImage2 from "../../../static/images/nft-image2.png";
import NftImage3 from "../../../static/images/nft-image3.png";
import NftImage4 from "../../../static/images/nft-image4.png";
import NftImage5 from "../../../static/images/nft-image5.png";
import NftImage6 from "../../../static/images/nft-image6.png";
import EthIcon from "../../../static/images/eth-icon.svg";
import Nft from "../../../components/Nft/index";
import Tabs from "../../../components/tabs";
import { DashboardWrapper, PageHeader, WalletSource } from "../style";
import { StateBox } from "../statistics/style";
import { NftDashboardWrapper } from "./style";
const Index = () => {
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
      headerName: "NFT Name",
      minWidth: 601,
      flex: 1,
      field: "AssetOwned",
      cellRendererFramework: () => {
        return (
          <div className="d-flex title-image align-items-center">
            <img width={"32px"} src={NftImage} alt="asset image" />
            NFT Title Will Come Here
          </div>
        );
      },
    },
    {
      headerName: "Asset Price",
      minWidth: 482,
      flex: 1,
      field: "wareHouse",
      cellRenderer: ({ value }) => (value ? value : "$275,000"),
    },
    {
      headerName: "Trading Pecentage",
      minWidth: 134,
      flex: 1,
      field: "shipped",
      cellRendererFramework: () => {
        return (
          <div className="table-time-chart d-flex align-items-center">
            <p className="text-success text-percentage">
              12% <i className="icon-arrow-up"></i>
            </p>
            <div className="time-chart">
              <img src={TimeChart} width={"81px"} alt="chart img" />
            </div>
          </div>
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
      index: 0,
      icon: <i className="icon-sorting-block"></i>,
      label:"",
      component:
      <>
          <Grid container spacing={3}>
               <Grid item md={12} xs={12}>
                  <div className="d-flex nft-dashboard-header justify-content-between">
                    <div className="nft-grid-title">
                       <h3>NFT Gallery</h3>
                    </div>
                    <div className="nft-grid-filters">
                       <ul className="d-flex">
                        <li className="active">Asset</li>
                         <li>Blockchain</li>
                        <li>Wallet</li>
                       </ul>
                     </div>
                </div>
               </Grid>
                <Grid item md={2} xs={12}>
                  <Nft
                    nftimage={NftImage}
                    name="NFT Name"
                    icon={EthIcon}
                    price="1.25"
                  />
                </Grid>
                <Grid item md={2} xs={12}>
                  <Nft
                    nftimage={NftImage2}
                    name="NFT Name"
                    icon={EthIcon}
                    price="1.25"
                  />
                </Grid>
                <Grid item md={2} xs={12}>
                  <Nft
                    nftimage={NftImage3}
                    name="NFT Name"
                    icon={EthIcon}
                    price="1.25"
                  />
                </Grid>
                <Grid item md={2} xs={12}>
                  <Nft
                    nftimage={NftImage4}
                    name="NFT Name"
                    icon={EthIcon}
                    price="1.25"
                  />
                </Grid>
                <Grid item md={2} xs={12}>
                  <Nft
                    nftimage={NftImage5}
                    name="NFT Name"
                    icon={EthIcon}
                    price="1.25"
                  />
                </Grid>
                <Grid item md={2} xs={12}>
                  <Nft
                    nftimage={NftImage6}
                    name="NFT Name"
                    icon={EthIcon}
                    price="1.25"
                  />
                </Grid>
                <Grid item md={2} xs={12}>
                  <Nft
                    nftimage={NftImage}
                    name="NFT Name"
                    icon={EthIcon}
                    price="1.25"
                  />
                </Grid>
                <Grid item md={2} xs={12}>
                  <Nft
                    nftimage={NftImage2}
                    name="NFT Name"
                    icon={EthIcon}
                    price="1.25"
                  />
                </Grid>
                <Grid item md={2} xs={12}>
                  <Nft
                    nftimage={NftImage3}
                    name="NFT Name"
                    icon={EthIcon}
                    price="1.25"
                  />
                </Grid>
                <Grid item md={2} xs={12}>
                  <Nft
                    nftimage={NftImage4}
                    name="NFT Name"
                    icon={EthIcon}
                    price="1.25"
                  />
                </Grid>
                <Grid item md={2} xs={12}>
                  <Nft
                    nftimage={NftImage5}
                    name="NFT Name"
                    icon={EthIcon}
                    price="1.25"
                  />
                </Grid>
                <Grid item md={2} xs={12}>
                  <Nft
                    nftimage={NftImage6}
                    name="NFT Name"
                    icon={EthIcon}
                    price="1.25"
                  />
                </Grid>
                <Grid item md={2} xs={12}>
                  <Nft
                    nftimage={NftImage}
                    name="NFT Name"
                    icon={EthIcon}
                    price="1.25"
                  />
                </Grid>
                <Grid item md={2} xs={12}>
                  <Nft
                    nftimage={NftImage2}
                    name="NFT Name"
                    icon={EthIcon}
                    price="1.25"
                  />
                </Grid>
                <Grid item md={2} xs={12}>
                  <Nft
                    nftimage={NftImage3}
                    name="NFT Name"
                    icon={EthIcon}
                    price="1.25"
                  />
                </Grid>
                <Grid item md={2} xs={12}>
                  <Nft
                    nftimage={NftImage4}
                    name="NFT Name"
                    icon={EthIcon}
                    price="1.25"
                  />
                </Grid>
                <Grid item md={2} xs={12}>
                  <Nft
                    nftimage={NftImage5}
                    name="NFT Name"
                    icon={EthIcon}
                    price="1.25"
                  />
                </Grid>
                <Grid item md={2} xs={12}>
                  <Nft
                    nftimage={NftImage6}
                    name="NFT Name"
                    icon={EthIcon}
                    price="1.25"
                  />
                </Grid>
              </Grid>
              <Button className="show-more-button" variant="text">
                Show More
              </Button>
            </>,

    },
    {
      index: 1,
      icon: <i className="icon-sorting-listing"></i>,
      label:"",
      component:  <>
              <Grid container spacing={3}>
                 <Grid item md={12} xs={12}>
                   <div className="d-flex nft-dashboard-header justify-content-between">
                     <div className="nft-grid-title">
                       <h3>NFT Details</h3>
                     </div>
                     <div className="nft-grid-filters">
                       <ul className="d-flex">
                         <li className="active">Asset</li>
                         <li>Blockchain</li>
                         <li>Wallet</li>
                       </ul>
                     </div>
                   </div>
                 </Grid>
                 <Grid item md={12} xs={12}>
                   <div className="nft-details-table">
                     <AgGrid
                       height="240px"
                       className=""
                       columnDefinitions={columnDefinitions}
                     defaultColDef={defaultColDef}
                       user_referrals={user_referrals}
                       headerHeight={54}
                      rowHeight={56}
                     />
                     <Pagination />
                   </div>
                 </Grid>
               </Grid>
           </>,
    }
  ]
  const [value, setValue] =useState(0);
  const [component, setComponet] = useState(tabs[0])
  const handleChange = (event, newValue) => {
    setComponet(tabs.find(x=> x.index === newValue));
    setValue(newValue);
  };
  return (
    <>
      <DashboardWrapper>
        <PageHeader>
          <Box display={'flex'} alignItems="center" justifyContent={'space-between'}>
            <h1 className="page-title">NFT Dashboard</h1>
            <div className="page-header-extras">
              <ul>
                <li>
                  <Button variant="outlined">Refer A Friend</Button>
                </li>
                <li>
                  <Button variant="contained">Add Wallet</Button>
                </li>
              </ul>
            </div>
          </Box>
        </PageHeader>
        <div className="dashboard-content">
          <Container maxWidth={"100%"}>
            <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                <StateBox>
                  <img src={ChartImage} alt="chart image" />
                </StateBox>
              </Grid>
              <Grid item md={4} xs={12}>
                <StateBox>
                  <div className="d-flex stat-header align-items-center justify-content-between">
                    <h4>
                      <i className="icon-box-secondary"></i> Total Value of
                      Owned Assets
                    </h4>
                  </div>
                  <div className="stat-content d-flex align-items-center justify-content-between">
                    <div className="stat-content-left">
                      <p>512,896</p>
                    </div>
                    <div className="stat-content-right d-flex align-items-center">
                      <div className="chart-image">
                        <img
                          src={ChartImage1}
                          style={{ height: "47px" }}
                          alt="no-chart"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="stat-content-bottom">
                    <div className="chart">
                      <img src={Legend1} alt="chart img" />
                    </div>
                  </div>
                </StateBox>
              </Grid>
              <Grid item md={4} xs={12}>
                <StateBox>
                  <div className="d-flex stat-header align-items-center justify-content-between">
                    <h4>
                      <i className="icon-box-secondary"></i> Total Assets Owned
                      by Wallet
                    </h4>
                  </div>
                  <div className="stat-content d-flex align-items-center justify-content-between">
                    <div className="stat-content-left">
                      <p>$312,988</p>
                    </div>
                    <div className="stat-content-right d-flex align-items-center">
                      <div className="chart-image">
                        <img
                          src={ChartImage2}
                          style={{ height: "47px" }}
                          alt="chart-img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="stat-content-bottom">
                    <div className="chart">
                      <img src={Legend2} alt="chart img" />
                    </div>
                  </div>
                </StateBox>
              </Grid>
            </Grid>
            <NftDashboardWrapper>
              <Tabs value={value} tabs={tabs} handleChange={handleChange} className="icon-tabs"  />
                            <Box mt={4}>
                              {component?.component}
                            </Box>
            </NftDashboardWrapper>
          </Container>
        </div>
      </DashboardWrapper>
    </>
  );
};
export default Index;
