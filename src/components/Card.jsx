import { useEffect, useState } from "react";
import "../App.css";
import { Button } from "../common/Button";
const cartList = [];
const Card = ({ data }) => { 
  const [products, setProducts] = useState([]);


  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const getProducts = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((response) => setProducts(response));
  };

  const addtoCart = (product) => {
    cartList.push(product)
    localStorage.setItem("cart", JSON.stringify(cartList));   
    const cart = { userId: 1, products: [{ id: product.id }] };
    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cart),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="grid grid-cols-4 gap-4 mt-4 justify-between w-full overflow-x-hidden overflow-y-hidden">
      {products.map((product) => (
        <div class="bg-white rounded-lg shadow-2xl">
          <img
            class="h-48 w-fit object-cover object-end"
            src={product.image}
            alt={product.name}
          />
          <div class="p-6">
            <div class="flex items-baseline">
              <span class="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                {product.category}
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
            <Button addtoCart={addtoCart} product={product} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
