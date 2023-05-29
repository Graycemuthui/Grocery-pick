import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import Product from "./components/Products";
import ProductDetail from "./pages/ProductDetail";
import Order from "./components/Order";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CategoryProduct from "./pages/CategoryProduct";
import "./App.css";

const App = () => {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    fetch("http://127.0.0.1:4000/api/v1/profile ", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [storedToken]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/signup"
            element={<Signup setStoredToken={setStoredToken} />}
          />
          <Route
            path="/login"
            element={<Login setStoredToken={setStoredToken} />}
          />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:category" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/category/:id" element={<CategoryProduct />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
