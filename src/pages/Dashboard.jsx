import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Fetch all products + categories
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // Filter products
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || p.category === category;

    const matchesMin = minPrice === "" || p.price >= Number(minPrice);
    const matchesMax = maxPrice === "" || p.price <= Number(maxPrice);

    return matchesSearch && matchesCategory && matchesMin && matchesMax;
  });

  return (
    <div className="dashboard">
      <h1 className="heading">Product Dashboard</h1>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="dropdown"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Min Price"
          className="price-box"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max Price"
          className="price-box"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid">
          {filteredProducts.map((p) => (
            <div className="card" key={p.id}>
              <img src={p.image} alt={p.title} />
              <h3>{p.title}</h3>
              <p>${p.price}</p>
              <small>{p.category}</small>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-data">⚠️ No products found</p>
      )}
    </div>
  );
};

export default Dashboard;
