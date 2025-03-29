import React, { useEffect, useState } from "react";
import Dropdown from "../common/Dropdown";
import { useNavigate } from "react-router-dom";

const NavBar = ({ children, setData }) => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [cartproducts, setCartproducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    category != "" && getProducts();
  }, [category]);

  useEffect(() => {
    getCarts();
  }, []);

  const getCarts = async () => {
    fetch("https://fakestoreapi.com/carts")
      .then((response) => response.json())
      .then((data) => {
        setCartproducts(data);
        setCartCount(data.length);
      });
  };

  useEffect(() => {
    getProducts();
  }, [category]);

  const getProducts = async () => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((response) => setData(response));
  };

  const handleSearchInput = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <nav className="bg-blue-950 text-white py-3 px-6 flex font-bold justify-between sticky top-0">
        <button onClick={() => navigate("/")} className="font-bold text-xl items-start">Shopping Cart</button>
        <div className="flex justify-center items-center ml-40 border-2 border-white rounded-lg">
          <input
            type="text"
            id="search"
            name="search"
            value={searchText}
            placeholder="Search Products"
            className="w-72 rounded text-center justify-between py-1 border-white"
            onChange={handleSearchInput}
          />
          <Dropdown onChange={(value) => setCategory(value)} />
        </div>
        <button onClick={() => navigate("/orders")}>My Orders</button>
        <h3 className="flex items-center font-bold text-lg">Hello Guest!</h3>
        <button onClick={() => navigate("/cart")} className="flex items-center font-bold text-lg border-2 bg-white text-blue-900 rounded-md px-2">
          <svg
            class="w-3.5 h-3.5 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 21"
          >
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
          </svg>
          Cart {" " + cartCount}
        </button>
      </nav>
      <div>{children}</div>
    </>
  );
};

export default NavBar;
