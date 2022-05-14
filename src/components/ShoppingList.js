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

  const itemsToDisplay = items.filter((item) => {
    console.log(searchTerm.length);
    console.log(searchTerm);
    // tried adding if statement that doent work
    if (selectedCategory === "All" && searchTerm.length === 0) {
      return true;
    }
    return item.category === selectedCategory;
  });

  // tried making seperate function, but how do i use this?
  const itemsToDisplaySearch = items.filter((item) => {
    if (item.name === searchTerm || searchTerm === "") return true;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={searchTerm}
        handleOnSearchChange={handleOnSearchChange}
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
