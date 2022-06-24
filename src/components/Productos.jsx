import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card/Card";

function Products() {
  return (
    <>
      <div className="flex items-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Link to= '/'>
      <button className="button-primary">Back</button>
      </Link>
    </>
  );
}

export default Products;
