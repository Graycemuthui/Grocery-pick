import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [product]);

  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900  text-center">
        OUR COLLECTION
      </h2>
      <div className=" px-4 pt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-10 cursor-pointer ">
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
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg text-red-700">
                      {product.product_name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.product_description}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Ksh{product.product_price}
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {product.product_quantity}
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
