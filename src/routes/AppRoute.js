import React from "react";
//Component
import DashboardLayout from "../layout/component/index";
import Dashboard from "../container/dashboard/statistics/index";
import Wallet from "../container/dashboard/wallet/index";
import WalletDetails from "../container/dashboard/wallet/walletDetail/index.js";
import NftDashboard from "../container/dashboard/nftDashboard/index.js";
import Payment from "../container/dashboard/payment/index";
import AccountMangement from "../container/dashboard/accountMangement/Index"
import { Route, Routes } from "react-router-dom";

const Index = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        exact
        key="/dashboard"
        element={<DashboardLayout Component={Dashboard} />}
      />
      <Route
        path="/wallet"
        exact
        key="/wallet"
        element={<DashboardLayout Component={Wallet} />}
      />
      <Route
        path="/walletDetails"
        exact
        key="/walletDetails"
        element={<DashboardLayout Component={WalletDetails} />}
      />
      <Route
        path="/nft-dashboard"
        exact
        key="/nft-dashboard"
        element={<DashboardLayout Component={NftDashboard} />}
      />
      <Route
        path="/payment"
        exact
        key="/payment"
        element={<DashboardLayout Component={Payment} />}
        path="/account-mangement"
        exact
        key="/account-mangement"
        element={<DashboardLayout Component={AccountMangement} />}
      />
    </Routes>
  );
};

export default Index;
