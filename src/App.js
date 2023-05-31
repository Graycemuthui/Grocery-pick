import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import Navshow from "./pages/Navshow";
import "./App.css";

const App = () => {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (storedToken) {
      localStorage.setItem("token", storedToken);
    } else {
      localStorage.removeItem("token");
    }
  }, [storedToken]);

  const handleSignup = () => {
    // Handle successful signup
    // Navigate to the login page
    return <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <Router>
        <Navshow>{showNavbar && <Navbar />}</Navshow>
        <Routes>
          {storedToken ? (
            <>
              <Route
                path="/"
                element={
                  <Signup
                    setStoredToken={setStoredToken}
                    handleSignup={handleSignup}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <Login
                    setStoredToken={setStoredToken}
                    setShowNavbar={setShowNavbar}
                  />
                }
              />
              <Route path="/*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Product />} />
              <Route path="/products/*" element={<Product />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/order" element={<Order />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/category/:id" element={<CategoryProduct />} />
              <Route path="/footer" element={<Footer />} />
              <Route
                path="/logout"
                element={
                  <Logout
                    setStoredToken={setStoredToken}
                    setShowNavbar={setShowNavbar}
                  />
                }
              />
              <Route path="/*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
