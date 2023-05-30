import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/authentication/Signup";
import Login from "./pages/authentication/Login";
import Navbar from "./pages/Navbar";
import Product from "./components/Products";
import ProductDetail from "./pages/ProductDetail";
import Order from "./components/Order";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CategoryProduct from "./pages/CategoryProduct";
import Footer from "./components/Footer";
import Logout from "./pages/authentication/Logout";
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
          {storedToken ? (
            <Route path="/" element={<Product />} />
          ) : (
            <Route
              path="/"
              element={<Signup setStoredToken={setStoredToken} />}
            />
          )}
          {storedToken ? (
            <Route
              path="/login"
              element={<Logout setStoredToken={setStoredToken} />}
            />
          ) : (
            <Route
              path="logout"
              element={<Login setStoredToken={setStoredToken} />}
            />
          )}

          <Route path="/products" element={<Product />} />
          <Route path="/products/:category" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/category/:id" element={<CategoryProduct />} />
          <Route path="/" element={<Product />} />
          <Route path="/footer" element={<Footer />} />
          <Route
            path="/logout"
            element={<Logout setStoredToken={setStoredToken} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
