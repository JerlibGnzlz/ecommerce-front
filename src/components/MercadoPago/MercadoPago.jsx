import React from 'react'
import { useSelector } from "react-redux";
import logo from '../../img/mercadopago_off.png'



function MercadoPago() {
  const mp= useSelector((state) => state.linkmp)

  return (
    <div>
        <div className='flex mt-28'>
            <img src={logo} alt="" className='w-1/3 m-auto '/>
        </div>
      <div className='mt-10 text-center'>
      <a href={mp.init_point} className="bg-primary border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 ">Pay with MercadoPago</a>
      </div>

    </div>
  )
}

export default MercadoPago

