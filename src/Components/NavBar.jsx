import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const NavBar = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchInput = (event) => setSearchText(event.target.value);

  return (
    <>
      <nav className="bg-blue-950 text-white py-4 px-6 flex font-bold justify-between">
        <h3 className="font-bold text-xl items-start">
          Shopping Cart
        </h3>
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
        </div>

        <h3 className="flex font-bold text-lg">
          Hello Guest!
        </h3>
        <button className="flex items-center font-bold text-lg border-2 bg-white text-blue-900 rounded-md px-2">
            <svg
              class="w-3.5 h-3.5 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
            Cart
          </button>
      </nav>
      <div className="flex">{children}</div>
    </>
  );
};

export default NavBar;
