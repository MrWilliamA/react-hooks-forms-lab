import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";
import ItemForm from "./ItemForm";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleOnSearchChange(event) {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  }

  console.log(items);

  const itemsToDisplay = items
    .filter((item) => {
      return selectedCategory === "All" || item.category === selectedCategory;
    })
    .filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        searchTerm === ""
      );
    });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter
        search={searchTerm}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleOnSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
