import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faLocationDot,
  faMagnifyingGlass,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../img/logo.png";

function NavBar() {
  const [product, setProduct] = useState("");

  const handleChange = (e) => {
    setProduct(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-primary text-tertiary py-4 flex justify-around  ">
      <div>
        <img src={logo} alt="logo" className="h-7 w-20 " />
      </div>

      <div>
        <FontAwesomeIcon icon={faLocationDot} className="mx-1" />
        Location
      </div>

      <div className="text-black flex ">
        <select className="outline-0 h-8 text-sm text-tertiary w-auto text-center rounded-l bg-secondary hover:cursor-pointer hover:text-white">
          <option selected value="all">
            All
          </option>
          <option value="mens">Mens</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>

        <input
          type="search"
          value={product}
          onChange={handleChange}
          className=" w-80 outline-0 text-black px-1 h-8 "
        />

        <button
          onSubmit={handleSubmit}
          className="bg-secondary  px-3 h-8 rounded-r"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      <div>Hello, Guest</div>
      <Link to="">
        <div className="hover:text-white">
          <FontAwesomeIcon icon={faShoppingCart} /> Cart
        </div>
      </Link>

      <button className="bg-secondary px-3 rounded hover:text-white ">
        Log in
      </button>
    </div>
  );
}

export default NavBar;
