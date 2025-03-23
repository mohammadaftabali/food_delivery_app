import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const foodItems = [
  { id: 1, name: "Cheese Burger", img: "./burger.jpg" },
  { id: 2, name: "Chicken 65 Pizza", img: "./pizza.jpg" },
  { id: 3, name: "Pasta", img: "./pasta.jpg" },
  { id: 4, name: "Tacos", img: "./tacos.jpg" },
  { id: 5, name: "Biryani", img: "./biryani.jpg" },
  { id: 6, name: "Shawarma", img: "./shawarma.jpg" },
];

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Handle search
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setSearchResults([]);
    } else {
      const filteredItems = foodItems.filter(item =>
        item.name.toLowerCase().includes(query)
      );
      setSearchResults(filteredItems);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">🍔 Hungry Hound</Link>

        {/* Mobile Menu Toggle */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fw-bold text-white" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-white" to="/Login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-white" to="/Register">Register</Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex ms-3">
            <input 
              className="form-control me-2"
              type="search"
              placeholder="Search Food..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <button className="btn btn-warning fw-bold" type="button">🔍 Search</button>
          </form>
        </div>
      </div>

      {/* Search Results Dropdown */}
      {searchResults.length > 0 && (
        <div className="search-results bg-light p-2 position-absolute" style={{ top: "60px", right: "50px", width: "250px", borderRadius: "5px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
          <ul className="list-unstyled">
            {searchResults.map(item => (
              <li key={item.id} className="p-2 border-bottom">
                <img src={item.img} alt={item.name} style={{ width: "40px", height: "40px", marginRight: "10px", borderRadius: "50%" }} />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;