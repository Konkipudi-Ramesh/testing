import React, { useState, useEffect } from "react";

const Dashboard2 = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  // Fetch products + categories
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // Filter logic
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "" || p.category === category;
    const matchesPrice = price === "" || p.price <= Number(price);
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="dashboard">
      <h1>Product Dashboard</h1>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Max Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div className="card" key={p.id}>
              <img src={p.image} alt={p.title} />
              <h3>{p.title}</h3>
              <p>${p.price}</p>
              <small>{p.category}</small>
            </div>
          ))
        ) : (
          <p>⚠️ No products found</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard2;
