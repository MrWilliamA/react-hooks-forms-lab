import React, { useState } from "react";

function ItemForm(props) {
  const [newItemName, setNewitemName] = useState("");
  const [newItemCat, setNewitemCat] = useState("Produce");

  function handleNewItemName(event) {
    setNewitemName(event.target.value);
    console.log(newItemName);
  }

  function handleNewItemCategory(event) {
    setNewitemCat(event.target.value);
    console.log(newItemCat);
  }

  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: itemCategory,
  };
  return (
    <form className="NewItem" onSubmit={newItem}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewItemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleNewItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
