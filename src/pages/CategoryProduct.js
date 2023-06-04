import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const CategoryProduct = () => {
  const { id } = useParams();
  const [category, setCategory] = useState([]);
  const [product, setProducts] = useState([]);

  //get the 3rd segment of the url path
  let url_prod_id = window.location.pathname.split("/")[2];
  useEffect(() => {
    fetch(`http://127.0.0.1:4000/api/v1/categories/${url_prod_id}`)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
        console.log(data);
        setProducts(data.products);
      });
  }, [id]);

  return (
    <div>
      <div
        key={category.id}
        className="flex justify-center items-center text-center gap-2 bg-white lg:left-32 "
      >
        <div>
          <h1 className=" text-4xl font-bold text-black">
            {category.category_name}
          </h1>
        </div>
      </div>
      <div className="px-4 pt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-10 cursor-pointer">
        {product.map((product) => (
          <div
            key={product.id}
            className="product-description pt-3 col-span-1 flex flex-col border-2 h-full border-radius-2xl border-gray-200 "
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
                <div className="mt-10 flex flex-col justify-center items-center ">
                  <Rating />
                  <div>
                    <h3 className="text-lg text-black">
                      {product.product_name}
                    </h3>
                  </div>
                  <p className="text-md font-medium  text-gray-900">
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

export default CategoryProduct;
