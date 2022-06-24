import React from "react";
import { Link } from "react-router-dom";
import './Card.css'

export default function Card({name, price,category,image}) {

  // card = {
  //   name: "Remera Deportiva",
  //   precio: "49.99",
  //   stock: 24,
  //   img: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-flash-entrenamiento-negra-270020w21remene-1.jpg",
  //   categorias: "Deportivo, Fitness",
  // };

  return (
    <div className="card">
      <img
        className="object-contain h-52 w-96 "
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
            {/* <p className="badge">
              <strong>Stock: </strong>
              {card.stock}
            </p> */}
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