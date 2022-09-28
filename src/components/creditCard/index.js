import React, { Children } from "react";
import { CreditCard } from "./style";
const Index = (props) => {
  const { Children } = props;
  return <CreditCard>{Children}</CreditCard>;
};

export default Index;
