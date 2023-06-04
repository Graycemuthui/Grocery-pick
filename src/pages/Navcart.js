import React, { useContext } from "react";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import { AiFillHome } from "react-icons/ai";

function Navcart() {
  const { saved } = useContext(RoomContext);

  return (
    <nav className="mx-auto px-2 left-0 lg:right-0 lg:mr-10 w-[30vw] pt-80 lg:pt-40 p-10 text-black absolute h-60">
      <div className="mx-auto lg:mx-0 lg:px-10 pt-30 flex flex-row justify-between items-center sm:justify-evenly sm:items-evenly sm:flex-col">
        <Link
          to="/products"
          style={{ textDecoration: "none", color: "black" }}
          className="navbar-brand d-flex justify-content-start mx-4"
        >
          <AiFillHome
            style={{ fontSize: "25px", color: "#f55a98" }}
            className="mx-2"
          />
          <h2 className="italic-font">Home</h2>
        </Link>
        <Link
          to="/cart"
          style={{ textDecoration: "none", color: "black" }}
          className="d-flex justify-content-end mx-4"
        >
          <h2 className="italic-font">Cart</h2>
          <BsCartFill
            style={{ fontSize: "25px", color: "#f55a98" }}
            className="mx-2"
          />
          <h2 className="italic-font">{saved.length}</h2>
        </Link>
        <Link
          to="/checkout"
          className="d-flex justify-content-center mx-4 text-decoration-none text-dark fw-bold"
        >
          <button className="group relative flex w-40 justify-center rounded-md bg-green-800 px-2 py-1 text-sm font-semibold text-white hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            CHECKOUT
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navcart;
