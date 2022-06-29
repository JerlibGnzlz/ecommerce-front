import React from 'react'
import NavBar from '../searchBar/Search'
import Filter from '../Filter/Filter'
import Card from '../Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect,useState } from 'react'
import { getCategories, getProduct,getBrand } from '../Redux/action'
import { useParams } from 'react-router-dom'
import Paginado from "../Paginado/Paginado"
import "./Products.css"

export default function Products() {

const Products = useSelector(state => state.products)
const dispatch = useDispatch()
const {genre} =useParams()
const [cart, setCart] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [productPerPage, setproductPerPage] = useState(6);
const indexOfLastProduct = currentPage * productPerPage;
const indexOfFirstProduct = indexOfLastProduct - productPerPage;
const currentProduct = Products.slice(
  indexOfFirstProduct,
  indexOfLastProduct
);

// console.log(currentProduct, "Estos son los primeros productos");
// console.log(setproductPerPage)

function paginado(pageNumber) {
  setCurrentPage(pageNumber);
}



useEffect(() => {
  dispatch(getProduct({ genre: genre }));
  dispatch(getCategories({ genre: genre }));
  dispatch(getBrand({ genre: genre }));
}, [dispatch, genre]);

useEffect(() => {
  cart.length && localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

const cart2=localStorage.getItem("cart")
const objCart2=JSON.parse(cart2)
console.log(objCart2, "obj")



function handleAddToCart(product) {
product.cantidad=1

  if (objCart2!==null && !objCart2?.some((p) => p.name.includes(product.name))) {
    setCart([...objCart2,product]);
    console.log("entre al if")
  }else if
    (cart!==null && !cart?.some((p) => p.name.includes(product.name))) {
      setCart([...cart,product]);
      console.log("entre al else if")
  }

}


    

    return (

        <div>
            <NavBar />
            <div className='products'>

            <h1>Products</h1>

            </div>
            <div className='cards2'>
                <div className='card2'>
                    <Filter />
                </div>
                <div className='container'>
                {currentProduct &&
          currentProduct?.map((p) => {
            return (
              <Card
                handleAddToCart={handleAddToCart}
                key={p.id}
                id={p.id}
                name={p.name}
                price={p.price}
                image={p.image}
                category={p.category.name}
                brand={p.brand.name}
              />
            );
          })}
          </div>
            </div>
            <Paginado
        productPerPage={productPerPage}
        currentPage={currentPage}
        Products={Products.length}
        paginado={paginado}
      />

        </div>






    )
}
