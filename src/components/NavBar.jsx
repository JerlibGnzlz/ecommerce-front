import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="bg-primary text-white py-3 flex justify-around ">
      <div>FREE STYLE</div>

      <div>
        <FontAwesomeIcon icon={faLocationDot} className="mx-1" />
        Location
      </div>

      <div>
        <input type="search" className=" w-80 outline-0 text-black" />
        <button className="bg-secondary  px-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      <div>Hello, Guest</div>
      <div>
        <FontAwesomeIcon icon={faShoppingCart} /> Cart
      </div>
      <button className="bg-secondary px-2">Log in</button>
    </div>
  );
}

export default NavBar;
