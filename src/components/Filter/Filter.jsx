import React from 'react'
import './Filter.css'

export default function Filter() {
    return (
        <div>
            <div className='category'>
                <h1>Category</h1>
                <h2>Woman</h2>
                <h2>Men</h2>
                <h2>Children</h2>
                <h2>accesories</h2>
            </div>

             <div className='categories'>
                <h1>Categories</h1>

                <input type="checkbox"></input>
                
                </div>
                <div className='price'>
                <h1>Price</h1>
                <h2>under - $100</h2>
                <h2>$100 - $200</h2>
                <h2>$220 - $250</h2>
                <h2>Over  $260</h2>
                </div>



        </div>
    )
}
