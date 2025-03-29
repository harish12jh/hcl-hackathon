import { useEffect, useState } from "react";
import "../App.css";

const Card = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((response) => setProducts(response));
  };

  return (
    <div className="grid grid-cols-4 gap-4 justify-between w-full overflow-x-hidden overflow-y-hidden">
      {products.map((product) => (
        <div class="bg-white rounded-lg shadow-2xl">
          <img
            class="h-48 object-cover object-end"
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
                {product.rating.rate} &bull; {product.rating.count}
              </div>
            </div>
            <h4 class="mt-2 font-semibold text-lg leading-tight truncate">
              {product?.title}
            </h4>

            <div class="mt-1">
              <span>Price</span>
              <span class="text-gray-600 text-sm"> {" " + product.price}</span>
            </div>
            <div class="mt-2 flex items-center">
              <button
                type="button"
                onClick={() => setCount(count + 1)}
                class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  class="w-3.5 h-3.5 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>{" "}
                Add to Cart
                <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                  {count}
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
