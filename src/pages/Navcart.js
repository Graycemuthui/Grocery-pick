import React, { useContext } from "react";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import { AiFillHome } from "react-icons/ai";

function Navcart() {
  const { saved } = useContext(RoomContext);

  return (
    <nav className="top-0 right-0 w-[30vw] pt-40 p-10 pl-20 text-black absolute h-60 ">
      <Link
        to="/products"
        style={{ textDecoration: "none", color: "black" }}
        className="navbar-brand d-flex justify-content-start mx-4"
      >
        <AiFillHome
          style={{ fontSize: "25px", color: "#f55a98" }}
          className="mx-2"
        />

        <h2 className="italic-font">HOME</h2>
      </Link>
      <Link
        to="/cart"
        style={{ textDecoration: "none", color: "black" }}
        className="d-flex justify-content-end mx-4"
      >
        <h2 className="italic-font">CART</h2>
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
    </nav>
  );
}

export default Navcart;
