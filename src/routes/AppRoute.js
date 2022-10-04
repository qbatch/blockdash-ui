import React from "react";
//Component
import DashboardLayout from "../layout/component/index";
import Dashboard from "../container/dashboard/statistics/index";
import Wallet from "../container/dashboard/wallet/index";
import WalletDetails from "../container/dashboard/wallet/walletDetail/index.js";
import NftDashboard from "../container/dashboard/nftDashboard/index.js";

import { Route, Routes } from "react-router-dom";

const Index = () => {
  return (
    <Routes>
      <Route
        path="blockdash-ui/dashboard"
        exact
        key="/dashboard"
        element={<DashboardLayout Component={Dashboard} />}
      />
      <Route
        path="blockdash-ui/wallet"
        exact
        key="/wallet"
        element={<DashboardLayout Component={Wallet} />}
      />
      <Route
        path="blockdash-ui/walletDetails"
        exact
        key="/walletDetails"
        element={<DashboardLayout Component={WalletDetails} />}
      />
      <Route
        path="blockdash-ui/nft-dashboard"
        exact
        key="/nft-dashboard"
        element={<DashboardLayout Component={NftDashboard} />}
      />
    </Routes>
  );
};

export default Index;
