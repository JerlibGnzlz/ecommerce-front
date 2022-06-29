import { React } from "react";
import Cart from "./Cart";
import { useEffect,useState } from "react";
import "./Carts.css"



function Carts() {
  let cart;
  let product;
 cart = localStorage.getItem("cart");
product = JSON.parse(cart);

useEffect(() => {
    const cart2= localStorage.getItem("cart");
    const product2 = JSON.parse(cart2);
    console.log(product2, "producttt")
},[cart])



  return (

    <div>
      {product?.length
        ? product.map((e) => (
        
                  <Cart
   
                  id={e.id}
                  key={e.id}
                  name={e.name}
                  image={e.image}
                  brandName={e.brandName}
                  
        />
            
          ))
        : "tu carrito esta vacio"}
    </div>
  );
}

export default Carts;
