import React from 'react'
import NavBar from '../NavBar/NavBar'
import Filter from '../Filter/Filter'
import Cards from '../Cards/Cards'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProduct } from '../Redux/action'
import { useParams } from 'react-router-dom'
import "./Products.css"

export default function Products() {

const Products = useSelector(state => state.products)
const dispatch = useDispatch()
const {genre} =useParams()



useEffect(() => {
    dispatch(getProduct({genre:genre}))
    
}, [])



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

                <Cards product={Products}/>
            </div>


        </div>






    )
}
