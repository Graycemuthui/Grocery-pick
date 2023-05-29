import React, { useContext, useEffect, useState } from "react";
import { RoomContext } from "../Context";
import { Link } from "react-router-dom";

function Checkout() {
  const { saved } = useContext(RoomContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (saved.length > 0) {
      let total = 0;
      saved.forEach((product) => {
        total += Number(product.product_price);
      });
      setTotalPrice(total);
    }
  }, [saved]);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Handle
                  </th>
                </tr>
              </thead>
              {saved.map((product) => (
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      <img
                        src={product.product_image}
                        alt={product.product_name}
                        className="h-60 w-80 object-cover object-center"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {product.product_name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {product.product_price}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <Link className="text-decoration-none text-dark fw-bold">
                        View Product
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div className="d-flex justify-content-center my-3">
              <h3>Total Price: ${totalPrice}</h3>
              <button
                className="mx-2"
                style={{
                  backgroundColor: "#f55a98",
                  color: "white",
                  border: "none",
                  borderRadius: "30px",
                  padding: "10px 20px",
                }}
                onClick={() => {
                  if (totalPrice > 0)
                    alert(
                      "Thank you for shopping with us! Your order has been placed."
                    );
                  else alert("Please add items to cart before checking out.");
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
