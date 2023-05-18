import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cover from "../images/cover.jpg";

const Product = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [product]);

  return (
    <div className="bg-white">
      <div className="relative">
        <img src={cover} alt="cover" className="w-full h-64 object-cover" />
        <div className="absolute w-1/2 h-3/4 top-0 left-80 bottom-50  bg-gray-800 opacity-70 invisible lg:visible">
          <h3 className=" text-4xl font-bold text-white">Grocerypick</h3>
          <p className=" text-2xl text-white">
            Fresh produce delivered to your doorstep
          </p>
        </div>
      </div>
      <div className=" px-4 pt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-10 cursor-pointer ">
        {product.map((product) => (
          <div
            key={product.id}
            className="product-description col-span-1 flex flex-col bg-white border-2 p-2 h-full"
          >
            <div className="mt-6">
              <div className="group relative">
                <Link to={`/product/${product.id}`}>
                  <div>
                    <img
                      src={product.product_image}
                      alt={product.product_name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </Link>
                <div className="mt-10 ">
                  <div>
                    <h3 className="text-lg text-black">
                      {product.product_name}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Ksh{product.product_price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
