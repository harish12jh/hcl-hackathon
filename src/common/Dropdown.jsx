import { useState } from "react";
import { categories } from "../constants/productlist";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <div class="relative inline-block text-left">
      <div>
        <button
          type="button"
          class="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-sm font-semibold text-white ring-1 shadow-xs cursor-pointer"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setOpen(!open)}
        >
          {selected === "" ? "Categories" : selected}
          <svg
            class="-mr-1 size-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {open && (
        <div
          class="absolute right-0 z-10 mt-2 w-fit origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1 w-fit" role="none">
            {categories?.map((cat) => (
              <span
                class="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
                onClick={(e) => {
                  setSelected(e.currentTarget.innerText);
                  setOpen(!open);
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
