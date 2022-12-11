import React, {useState, useEffect} from "react";
import Stock from "./Stock";

function StockContainer({stocks, addPortfolioStock}) {

  function handleStockClick(stock) {
    addPortfolioStock(stock)
  }

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) =>
        <Stock stock={stock} handleStockClick={handleStockClick} />
      )}
    </div>
  );
}

export default StockContainer;
