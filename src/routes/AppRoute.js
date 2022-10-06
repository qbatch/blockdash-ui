import React from "react";
//Component
import DashboardLayout from "../layout/component/index";
import Dashboard from "../container/dashboard/statistics/index";
import Wallet from "../container/dashboard/wallet/index";
import WalletDetails from "../container/dashboard/wallet/walletDetail/index.js";
import NftDashboard from "../container/dashboard/nftDashboard/index.js";
import Payment from "../container/dashboard/payment/index";
import AccountMangement from "../container/dashboard/accountMangement/Index"
import Faq from "../container/dashboard/staticPages/faq";
import Terms from "../container/dashboard/staticPages/termsConditions";
import Privacy from "../container/dashboard/staticPages/privacyPolicy";
import Roadmap from "../container/dashboard/staticPages/roadmap";
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
        />
        <Route
        path="/account-mangement"
        exact
        key="/account-mangement"
        element={<DashboardLayout Component={AccountMangement} />}
      />
      <Route
        path="/faq"
        exact
        key="/faq"
        element={<DashboardLayout Component={Faq} />}
      />
      <Route
        path="/terms"
        exact
        key="/terms"
        element={<DashboardLayout Component={Terms} />}
      />
      <Route
        path="/privacy"
        exact
        key="/privacy"
        element={<DashboardLayout Component={Privacy} />}
      />
      <Route
        path="/roadmap"
        exact
        key="/roadmap"
        element={<DashboardLayout Component={Roadmap} />}
      />
    </Routes>
  );
};

export default Index;
