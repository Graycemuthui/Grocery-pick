import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navshow = ({ children }) => {
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/login") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [location]);

  return <div>{show && children}</div>;
};

export default Navshow;
