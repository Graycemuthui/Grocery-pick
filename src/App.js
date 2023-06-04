import React, { useState, useEffect, useRef } from "react";
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
import Navshow from "./pages/Navshow";
import "./App.css";

const App = () => {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  const footerRef = useRef();

  const handleFooterNavigation = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (storedToken) {
      localStorage.setItem("token", storedToken);
    } else {
      localStorage.removeItem("token");
    }
  }, [storedToken]);

  const handleSignup = () => {
    return <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <Router>
        <Navshow>
          {<Navbar handleFooterNavigation={handleFooterNavigation} />}
        </Navshow>
        <Routes>
          {!storedToken ? (
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
                element={<Login setStoredToken={setStoredToken} />}
              />
              <Route path="/*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/products/*" element={<Product />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/order" element={<Order />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/category/:id" element={<CategoryProduct />} />
              <Route path="/footer" element={<Footer ref={footerRef} />} />
              <Route path="/*" element={<Navigate to="/products" />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
