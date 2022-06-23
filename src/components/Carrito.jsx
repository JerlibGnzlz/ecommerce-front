import React from 'react'
import { Link } from 'react-router-dom'

export default function Carrito() {
    return (
      <>
        <div className="text-6xl temt-10 font-medium">
          Estamos en el carrito
            </div>
            <Link to='/'>
        <button className="button-primary m-5">ATRAS</button>
            </Link>
      </>
    );
}
