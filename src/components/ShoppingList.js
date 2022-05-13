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

  const itemsToDisplay = items.filter((item) => {
    if (item.name === searchTerm) return true;
    console.log("item name: " + item.name);
    console.log("search Term: " + searchTerm);

    // if (selectedCategory === "All") return true;

    // return item.category === selectedCategory;
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
