import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getProduct, getCategories, getBrand } from "../Redux/action";
import { NavLink } from "react-router-dom";
import "./Filter.css";

export default function Filter() {
  const [genres, setGenres] = useState();
  const categories = useSelector((state) => state.categories);
  const brands = useSelector((state) => state.brand);
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [brand, setBrand] = useState();
  const dispatch = useDispatch();

  const { genre } = useParams();

  function handleOrderPrice(e) {
    if (genres === genre) {
      setGenres(genre);
      setPrice(e.target.value);
      dispatch(
        getProduct({
          genre: genre,
          price: e.target.value,
          categoryId: category,
          brandId: brand,
        })
      );
    } else {
      setBrand();
      setCategory();
      setPrice(e.target.value);
      setGenres(genre);
      dispatch(getProduct({ genre: genre, price: e.target.value }));
    }
  }

  function handleCheck(e) {
    if (genres === genre) {
      setGenres(genre);
      setCategory(e.target.value);
      dispatch(
        getProduct({
          genre: genre,
          categoryId: e.target.value,
          brandId: brand,
          price: price,
        })
      );
      dispatch(getBrand({ genre: genre, category: e.target.value }));
    } else {
      setBrand();
      setCategory(e.target.value);
      setPrice();
      setGenres(genre);
      dispatch(getProduct({ genre: genre, categoryId: e.target.value }));
      dispatch(getBrand({ genre: genre, category: e.target.value }));
    }
  }

  function handleCheckBrand(e) {
    if (genres === genre) {
      setGenres(genre);
      setBrand(e.target.value);
      dispatch(
        getProduct({
          genre: genre,
          brandId: e.target.value,
          categoryId: category,
          price: price,
        })
      );

      dispatch(getCategories({ genre: genre, brand: e.target.value }));
    } else {
      setBrand(e.target.value);
      setCategory();
      setPrice();
      setGenres(genre);
      dispatch(getProduct({ genre: genre, brandId: e.target.value }));
      dispatch(getCategories({ genre: genre, brand: e.target.value }));
    }
  }

  return (
    <div>
      <div className="category ">
        <h1>Category</h1>
        <button>
          {" "}
          <NavLink to="/products">All Products</NavLink>
        </button>

        <NavLink to="/products/women" activeStyle={{color:"#036CB6"}}>
          <h2>Women</h2>
        </NavLink>

        <NavLink to="/products/men" activeStyle={{color:"#036CB6"}}>
          <h2>Men</h2>
        </NavLink>
        <NavLink to="/products/kids" activeStyle={{color:"#036CB6"}}>
          <h2>Kids</h2>
        </NavLink>
        <NavLink to="/products/accesories"activeStyle={{color:"#036CB6"}}>
          <h2>Accesories</h2>
        </NavLink>
      </div>

      <div className="price">
        <h1>Price</h1>

        <select onChange={(e) => handleOrderPrice(e)} className="border-solid border-2 border-black">
          <option value="">select price</option>
          <option value="ASC">Lower price</option>
          <option value="DESC">Higher price</option>
        </select>
      </div>
      <div className="brands ">
        <h1>Brands</h1>

        {brands?.map((b) => {
          return (
            <div key={b.id}>
          <button
                value={b.id}
                name={b.name}
                className="hover:bg-blue-200 active:bg-violet-200 focus:bg-blue-200 rounded-sm flex inline"
                onClick={(e) => handleCheckBrand(e) }  
               
              >
                {b.name}
              </button>
            </div>
          );
        })}
      </div>

      <div className="categories">
        <h1>Categories</h1>
        {categories?.map((c) => {
          return (
            <div key={c.id}>
              <button
                value={c.id}
                name={c.name}
                onClick={(e) => handleCheck(e)}
                className="hover:bg-blue-200 active:bg-blue-200 focus:bg-blue-200 rounded-sm flex inline"
              >
                {c.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
