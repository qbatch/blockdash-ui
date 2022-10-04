import React, { Children } from "react";
import { NftWrapper } from "./style";
import TimeChart from "../../static/images/small-chart.svg";
const Index = (props) => {
  const { Children, nftimage, name, icon, price } = props;
  return (
    <NftWrapper>
      <div className="nft-image">
        {/* <img width={'100px'} src={nftpreview} alt="Nft Image" /> */}
        <img src={nftimage} alt="price icon"/> 
        
      </div>
      <div className="nft-description">
        <h3>{name}</h3>
        <div className="d-flex justify-content-between">
          <div className="price d-flex align-items-center"><img width={'20px'} src={icon} alt="price icon"/><span>{price}</span></div>
          <div className="d-flex align-items-center">
            <p className="text-success text-percentage">
              <i className="icon-arrow-up"></i>2%
            </p>
            <div className="time-chart">
              <img src={TimeChart} width={"48px"} alt="chart img" />
            </div>
          </div>
        </div>
      </div>
    </NftWrapper>
  );
};

export default Index;
