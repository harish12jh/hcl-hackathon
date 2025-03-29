import React from "react";

const Cart = () => {
  const cartproducts = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div>
      {cartproducts.map((product) => {
        return (
          <div class="p-6">
            <div class="flex items-baseline">
              <span class="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                {product.id}
              </span>
              <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                <i class="fas fa-star"></i>
                {product.rating.rate}
                {" (" + product.rating.count + ")"}
              </div>
            </div>
            <h4 class="mt-2 font-semibold text-lg leading-tight truncate">
              {product?.title}
            </h4>
            <div class="mt-1">
              <p class="mt-2 text-sm leading-tight truncate">
                {product.description}
              </p>
            </div>
            <div class="mt-1 left-0 flex gap-2">
              <span class="font-semibold">Price</span>
              <span class="text-blue-700 font-semibold">
                {" "}
                {" " + product.price}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
