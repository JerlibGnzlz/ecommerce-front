import React from "react";
import { useAuth } from "../context/AuthContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faLocationDot,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../img/logo.png";

function NavBar() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  let welcome = user ? "Hello, " + user.email : "Hello, Guest";

  return (
    <div className="bg-primary text-tertiary py-4 flex justify-around  ">
      <Link to="/">
        <div>
          <img src={logo} alt="logo" className="h-7 w-20 " />
        </div>
      </Link>
      <div>
        <FontAwesomeIcon icon={faLocationDot} className="mx-1" />
        Location
      </div>

      <div>{welcome}</div>
      <Link to="">
        <div className="hover:text-white">
          <FontAwesomeIcon icon={faShoppingCart} /> Cart
        </div>
      </Link>
      {/* Boton Login */}

      <button
        onClick={handleLogout}
        className="bg-secondary px-3 rounded py-1.5 hover:text-white "
      >
        {user ? "Log out" : <Link to="/login">Log in</Link>}
      </button>
    </div>
  );
}

export default NavBar;
