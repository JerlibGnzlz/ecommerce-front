import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProduct,getCategories, getBrand} from '../Redux/action'
import './Filter.css'

export default function Filter() {

    
    const categories= useSelector(state=>state.categories)
    const brands = useSelector(state=> state.brand)
    const [price, setPrice] = useState()
    const [category, setCategory] = useState()
    const [brand, setBrand] = useState()
    const dispatch = useDispatch()
   
    const {genre} =useParams()





    function handleOrderPrice(e){
       setPrice(e.target.value)
        dispatch(getProduct({genre:genre,price:e.target.value,categoryId:category, brandId:brand}))
    }

    function handleCheck(e){
 
        setCategory(e.target.value)
        dispatch(getProduct({genre:genre,categoryId:e.target.value, brandId:brand, price:price}))
        dispatch(getBrand({genre:genre,category:e.target.value}))
    }

    function  handleCheckBrand(e){
        
   setBrand(e.target.value)
   dispatch(getProduct({genre:genre,brandId:e.target.value,categoryId:category, price:price}))
   dispatch(getCategories({genre:genre,brand:e.target.value}))

    }



    return (
        <div>
            <div className='category'>
                <h1>Category</h1>
                <button> <a href='/products'>All Products</a></button>
                <a href="/products/women"><h2>Women</h2></a>
                <a href="/products/men"><h2>Men</h2></a>
                <a href="/products/kids"><h2>Kids</h2></a>
                <a href="/products/accesories"><h2>Accesories</h2></a>

            </div>

            <div className='price'>
                <h1>Price</h1>

                <select onChange={e=> handleOrderPrice(e)} >
                <option value="">select price</option>
                    <option value="ASC">Lower price</option>
                    <option value="DESC">Higher price</option>
                </select>
            </div>
            <div className='brands'>
                <h1>Brands</h1>
            {brands?.map((b)=>{
                return(
                <div>
                    
                    <button 
                    value={b.id}
                    name={b.name} 
                    onClick={(e) => handleCheckBrand(e)}>{b.name}</button>
                    
                </div>)
            })}
            </div>

           <div className='categories'>
            <h1>Categories</h1>
            {categories?.map((c)=>{
                return(
                <div>
                   
                    <button
                    value={c.id}
                    name={c.name} 
                    onClick={(e) => handleCheck(e)}>{c.name}</button>
                    
                </div>)
            })}
           </div>

     

        
         




        </div>
    )
}
