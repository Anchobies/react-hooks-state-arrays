import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [search, setSearch] = useState("All");

  const handleClick = id => {
    const newFoodsList = foods.map(food => {
      if (food.id === id) {
        food.heatLevel++;
      }

      return food;
    });

    setFoods(currentFoodsList => newFoodsList);
  }

  const filteredFoodsList = foods.filter(food => {
    if (search === "All") {
      return true;
    } else {
      return food.cuisine === search;
    }
  });

  const spicyFoodsList = filteredFoodsList.map(spicyFood => {
    return (
      <li onClick={() => handleClick(spicyFood.id)} key={spicyFood.id}>
        {spicyFood.name} | Heat: {spicyFood.heatLevel} | Cuisine: {spicyFood.cuisine}
      </li>
    )
  })

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodsList = [...foods, newFood];

    setFoods(currentFoodsList => newFoodsList);
  }

  const handleSearch = e => {
    setSearch(search => e.target.value);
  }

  return (
    <div>
      <select onChange={handleSearch} name="filter">
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select> 
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{spicyFoodsList}</ul>
    </div>
  );
}

export default SpicyFoodList;
