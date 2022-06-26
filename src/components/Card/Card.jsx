import React from "react";
import { Link } from "react-router-dom";
import './Card.css'

export default function Card({name, price,category,image}) {



  return (
    <div className="card">
      <img
        // className="w-300px h-250px object-cover"
        src={image}
        alt="Pic not found"
      />
      <div className='p-5'>
        <h3 className="Product-title" title={name}>
          {name}
        </h3>

        <p className="text-xl font-bold">Precio: U$S {price}</p>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm line-through opacity-50">U$S 59.99</span>
          <span className="discount-percent">save 17%</span>
        </div>

        <div className="py-5 flex-col gap-3">
          <div className="flex items-center gap-2">
      
            <p className="badge">{category}</p>
          </div>

          <div className="mt-5 flex gap-2">
            <button className="button-primary">Añadir al Carrito</button>
            <Link to="/carrito">
              <button className="button-primary">Ver carrito</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}