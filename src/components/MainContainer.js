import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [portfolioStocks, setPortfolioStocks] = useState([])
  const [stocks, setStocks] = useState([])
  const [filteredStocks, setFilteredStocks] = useState(stocks)

    useEffect(() => {
        fetch("http://localhost:3001/stocks")
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setStocks(data);
            setFilteredStocks(data);
          });
      }, []);

  function addPortfolioStock(stock) {
      setPortfolioStocks([...portfolioStocks, stock])
  }

  function deletePortfolioStock(stock) {
    setPortfolioStocks(portfolioStocks.filter((portfolioStock) => {
      return stock.name !== portfolioStock.name
    }))
  }

  return (
    <div>
      <SearchBar stocks={stocks} setFilteredStocks={setFilteredStocks} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} addPortfolioStock={addPortfolioStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} deletePortfolioStock={deletePortfolioStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
