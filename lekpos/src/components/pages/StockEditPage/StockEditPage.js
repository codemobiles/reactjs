import React from "react";

const StockEditPage = props => {
  return <div style={{ marginTop: 100 }}>{props.match.params.id}</div>;
};

export default StockEditPage;
