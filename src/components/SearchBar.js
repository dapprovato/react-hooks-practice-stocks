import React from "react";

function SearchBar({stocks, setFilteredStocks}) {

  function handleChange(event) {
      setFilteredStocks(stocks.filter((stock) => {
        return stock.type === event.target.value
      }))
  }

  function handleSortName() {
    console.log('handleSortNameL ', stocks)
    setFilteredStocks([...stocks].sort((a, b) =>
      a.name > b.name ? 1 : -1
    ))
  }

  function handleSortPrice() {
    console.log('handleSortNameL ', stocks)
    setFilteredStocks([...stocks].sort((a, b) =>
        a.price > b.price ? 1 : -1
    ))
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={handleSortName}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={handleSortPrice}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
