import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
 
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../img/logo.png";

function NavBar() {
  return (
    <div className="bg-primary text-tertiary py-4 flex justify-around  ">
      <Link to="/">
        <div>
          <img src={logo} alt="logo" className="h-7 w-20 " />
        </div>
      </Link>


      <div>Hello, Guest</div>
      <Link to="/cart">
        <div className="hover:text-white">
          <FontAwesomeIcon icon={faShoppingCart} /> Cart
        </div>
      </Link>
      {/* Boton Login */}
      <Link to="/login">
        <button className="bg-secondary px-3 rounded py-1.5 hover:text-white ">
          Log in
        </button>
      </Link>
    </div>
  );
}

export default NavBar;
