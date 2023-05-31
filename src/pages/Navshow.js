import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navshow = ({ children }) => {
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/login" ||
      location.pathname === "/logout"
    ) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [location]);

  return <div>{show && children}</div>;
};

export default Navshow;
