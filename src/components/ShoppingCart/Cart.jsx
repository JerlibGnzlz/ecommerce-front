import { React } from "react";
import { useState } from "react";
//import { useDispatch }  from "react-redux";
//import { deleteCart } from "../Redux/action";

function Cart({ name, brandName, id, image, price }) {
  // const dispatch = useDispatch();
  let cart;
  let product;
  cart = localStorage.getItem("cart");
  product = JSON.parse(cart);

  let stock = 5;

  const [count, setCount] = useState(1);

  let contador2 = product.filter((e) => e.id === id);
  console.log(contador2[0].quantity, "con2");

  function counter(e) {
    e.preventDefault();
    const { name } = e.target;

    if (name === "mas") {
      if (product.find((p) => p.id === id).quantity < stock) {
        product.find((p) => p.id === id).quantity += 1;
        let contador = product.filter((e) => e.id === id);

        setCount(contador[0].quantity);

        localStorage.setItem("cart", JSON.stringify(product));
      } else {
        alert("No hay mas stock");
      }
    } else if (name === "menos") {
      if (
        product.find((p) => p.id === id).quantity <= stock &&
        product.find((p) => p.id === id).quantity > 1
      ) {
        product.find((p) => p.id === id).quantity -= 1;

        let contador = product.filter((e) => e.id === id);

        setCount(contador[0].quantity);

        localStorage.setItem("cart", JSON.stringify(product));
      }
    }
  }

  function handleDelete(e) {
    e.preventDefault();
    // dispatch(deleteCart(id))
    product.filter((f) => f.id !== id);
    // localStorage.removeItem("cart");
    // localStorage.setItem("cart", JSON.stringify(filter));
  }

  return (
    <div>
      <>
        <div className="m-1 w-full grid gap-4 grid-cols-4 border-t-2 border-gray-300">
          <img
            className="pict object-contain w-48 h-36 p-2 "
            src={image}
            alt="Pic Not Found"
          />
          <div>
            <h1 className="capitalize text-2xl mt-4 font-semibold">{name}</h1>
            <p className="capitalize text-lg">{brandName}</p>
          </div>
          <div className="m-auto">
            <button
              className="text-lg font-semibold mx-1 box-border h-2 w-2 p-4 border-2 rounded-lg inline-flex justify-center items-center border-gray-400"
              name="menos"
              onClick={(e) => counter(e)}
            >
              -
            </button>
            <h1 className="text-lg font-semibold mx-1 box-border h-2 w-2 p-4 border-2 rounded-lg inline-flex justify-center items-center border-gray-400">
              {contador2[0].quantity > 0 ? contador2[0].quantity : null}
            </h1>
            <button
              className="text-lg font-semibold mx-1 box-border h-2 w-2 p-4 border-2 rounded-lg inline-flex justify-center items-center border-gray-400"
              name="mas"
              onClick={(e) => counter(e)}
            >
              +
            </button>
          </div>
          <div className="my-auto font-semibold text-lg">
            <p>Precio: U$S {price}</p>
            <p>Precio: U$S {(price*contador2[0].quantity).toFixed(2)}</p>
          </div>

          <div className="flex justify-end">
            <button
              onClick={(e) => handleDelete(e)}
              className=" box-content h-4 w-4 p-1 text-xl font-light "
            >
              x
            </button>
          </div>
        </div>
      </>
    </div>
  );
}

export default Cart;
