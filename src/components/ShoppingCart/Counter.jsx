import React from 'react'

function Counter() {
  return (
    <div className="rounded-2xl bg-white box-border w-9/12 h-auto mx-auto pb-8 shadow-2xl ">
      <div className="bg-white border-2 border-gray-300/100 rounded-xl m-8 pb-4 ">
        <h1 className="text-3xl m-2 ">Order Summary</h1>
        <h2 className="my-10 ml-5 ">SubTotal</h2>
        <h2 className="my-10 ml-5 ">Shipping</h2>
        <h2 className="my-10 ml-5 mr-5 border-t-2 border-gray-500">Total</h2>
      </div>

      <div className="flex justify-center">
        <button className="button-primary mx-8  box-border w-full py-3">CheckOut</button>
      </div>
    </div>
  );
}

export default Counter