import React from "react";

function Stock({stock, handleStockClick}) {

  function handleClick(stock) {
    console.log("console:", stock)
    handleStockClick(stock)
  }

  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={()=> handleClick(stock)}>
        <h5 className="card-title">{stock.name}</h5>
        <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
