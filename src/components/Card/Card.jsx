import { React } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Card.css'
import { getProductDetail } from "../Redux/action";
export default function Card({ id, name, price, category, image, brand, handleAddToCart }) {
  let contador = 0;
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.detail);
  // const { id } = useParams();
  // contador < 2 && console.log(productDetail, 'Soy el producto');

  // console.log(productDetail,'esto es del details')
  productDetail.length&&handleAddToCart(productDetail[0])

  function handleClick(e) {
    contador += 1;
    e.preventDefault();
    contador < 2 && dispatch(getProductDetail(id));
  }

  return (
    <Link to={`/detail/${id}`}>
      <div className="card">
        <div className="img">
          <img
            className="object-contain h-52 w-96 "
            src={image}
            alt="Pic not found"
          />
        </div>
        <div className="p-5">
          <h3 className="Product-title" title={name}>
            {name}
          </h3>

          <p className="text-xl font-bold">Precio: U$S {price}</p>

          {/* <div className="flex items-center gap-2 mt-1">
          <span className="text-sm line-through opacity-50">U$S 59.99</span>
          <span className="discount-percent">save 17%</span>
        </div> */}

          <div className="py-5 flex-col gap-3">
            <div className="flex items-center gap-2">
              {/* <p className="badge">
              <strong>Stock: </strong>
              {card.stock}
            </p> */}
              <p className="badge">{category}</p>
              <p className="badge">{brand}</p>
            </div>

            <div className="mt-5 flex gap-2">
              <button
                className="button-primary"
                onClick={(e) => handleClick(e)}
              >
                Add to Cart
              </button>
              <Link to="/cart">
                <button className="button-primary">Cart</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}