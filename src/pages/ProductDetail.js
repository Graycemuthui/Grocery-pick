import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../Context";
import { Button } from "@material-tailwind/react";
import Navcart from "./Navcart";

const ProductDetail = () => {
  const { addCart } = useContext(RoomContext);
  const { id } = useParams();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:4000/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [id]);

  return (
    <>
      <Navcart />
      <div className="bg-white">
        <div className="pt-6">
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3  rounded-lg lg:block">
              <img
                src={product.product_image}
                alt={product.product_name}
                className="h-80 w-full object-cover object-center sm:h-72 md:h-96 lg:w-full"
              />
            </div>
          </div>

          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.product_name}
              </h1>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.product_description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                Ksh{product.product_price}
              </p>
              <Button
                onClick={() => addCart(product)}
                className="mt-6 block w-full bg-green-800 border border-transparent rounded-md py-3 px-8 text-center font-medium text-white hover:bg-gray-900"
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
