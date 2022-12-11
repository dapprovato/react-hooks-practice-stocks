import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioStocks, deletePortfolioStock}) {

  function handleStockClick(stock) {
      deletePortfolioStock(stock)
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocks.map((stock) =>
        <Stock stock={stock} handleStockClick={handleStockClick} />
      )}
    </div>
  );
}

export default PortfolioContainer;
