import React, { useEffect } from "react";
import { Route, Routes, useHistory } from "react-router-dom";
import PurchaseOrder from "../container/dashboard/purchaseOrder/index"
const PrivateRoute = ({
  component:Component,
  withLayout: Layout,
  path
}) => {
  const renderRoute = () => (
    <Routes>
      <Route path={path} element={<Component />}  />
    </Routes>
  );

  return <Layout>{renderRoute()}</Layout>;
};

export default PrivateRoute;
