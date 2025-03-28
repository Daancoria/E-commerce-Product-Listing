import React, { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Croconaw Sitting Cutie",
      price: 50,
      description: "This palm-sized plush is a fun, charming way to show off a favorite Water-type Pokémon originally discovered in Johto!",
      image: "/images/croconaw.jpg",
      category: "Water",
    },
    {
      id: 2,
      name: "Manaphy Sitting Cutie",
      price: 60,
      description: "This palm-sized plush is a fun, charming way to show off a favorite Water-type Mythical Pokémon originally discovered in Sinnoh!",
      image: "/images/manaphy.jpg",
      category: "Water", 
    },
    {
      id: 3,
      name: "Sentret Sitting Cutie",
      price: 35,
      description: "This palm-sized plush is a fun, charming way to show off a favorite Normal-type Pokémon originally discovered in Johto!",
      image: "/images/sentret.jpg",
      category: "Normal", 
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="app">
      <h1>Pokémon Sitting Cuties Collection</h1>
      <div className="filter">
        <label htmlFor="category">Filter by category: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="All">All</option>
          <option value="Water">Sports</option>
          <option value="Normal">Equipment</option>
        </select>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
