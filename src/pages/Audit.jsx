import React from "react";

import { ordersData, contextMenuItems, ordersGrid } from "../data/data";
import { Header } from "../components";

const Audit = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Audit" />
    </div>
  );
};

export default Audit;
