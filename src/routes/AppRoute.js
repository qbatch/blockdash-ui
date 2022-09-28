import React from "react";
//Component
import DashboardLayout from "../layout/component/index";
import PurchaseOrder from "../container/dashboard/purchaseOrder/index";
import PurchaseOrderDetails from "../container/dashboard/purchaseOrder/poDetail/index";
import wareHouse from "../container/dashboard/wareHouse/index";
import wareHouseDetail from "../container/dashboard/wareHouse/whDetail/index";
import wareHouseDetailship from "../container/dashboard/wareHouse/whDetailship/index";
import wareHouseInventory from "../container/dashboard/wareHouse/whInventory/";
import UserInventory from '../container/dashboard/user/userInventory/index';
import AdminInventory from '../container/dashboard/user/adminInventory/index';
import User from '../container/dashboard/user/index';
import UserPo from '../container/dashboard/user/userPo/index';
import UserPoDetail from '../container/dashboard/user/userPoDetail/index';
import SalesOrder from "../container/dashboard/salesOrder/index";
import ShoppingCart from '../container/dashboard/shoppingCart/index';
import Settings from '../container/dashboard/settings/index';
import { Route, Routes } from "react-router-dom";

const Index = () => {
  return (
    <Routes>
      <Route
        path="/purchaseOrder"
        exact
        key="/purchaseOrder"
        element={<DashboardLayout Component={PurchaseOrder} />}
      />
      <Route
        path="/PurchaseOrderDetails"
        exact
        key="/PurchaseOrderDetails"
        element={<DashboardLayout Component={PurchaseOrderDetails} />}
      />
       <Route
        path="/wareHouse"
        exact
        key="/wareHouse"
        element={<DashboardLayout Component={wareHouse} />}
      />
             <Route
        path="/wareHouseDetail"
        exact
        key="/wareHouseDetail"
        element={<DashboardLayout Component={wareHouseDetail} />}
      />
      <Route
        path="/wareHouseDetailship"
        exact
        key="/wareHouseDetailship"
        element={<DashboardLayout Component={wareHouseDetailship} />}
      />
        <Route
        path="/wareHouseInventory"
        exact
        key="/wareHouseInventory"
        element={<DashboardLayout Component={wareHouseInventory} />}
      />
      <Route
        path="/user"
        exact
        key="/user"
        element={<DashboardLayout Component={User} />}
      />
      <Route
        path="/user-po"
        exact
        key="/user"
        element={<DashboardLayout Component={UserPo} />}
      />
      <Route
        path="/user-podetail"
        exact
        key="/user"
        element={<DashboardLayout Component={UserPoDetail} />}
      />
      <Route
        path="/userInventory"
        exact
        key="/userInventory"
        element={<DashboardLayout Component={UserInventory} />}
      />
      <Route
        path="/adminInventory"
        exact
        key="/adminInventory"
        element={<DashboardLayout Component={AdminInventory} />}
      />
      <Route
        path="/shoppingCart"
        exact
        key="/shoppingCart"
        element={<DashboardLayout Component={ShoppingCart} />}
      />
      <Route
        path="/salesOrder"
        exact
        key="/salesOrder"
        element={<DashboardLayout Component={SalesOrder} />}
      />
      <Route
        path="/settings"
        exact
        key="/settings"
        element={<DashboardLayout Component={Settings} />}
      />
    </Routes>
  );
};

export default Index;
