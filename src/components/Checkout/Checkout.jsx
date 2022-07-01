import React from "react";
import CheckoutAddress from "./CheckoutAddress";
import CheckoutPayment from "./CheckoutPayment";


function Checkout() {
  return (
    <div>
      <div className="dark:bg-gray-800">
        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Checkout</h2>
          <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            <div>
            <CheckoutAddress/>
            </div>
            <CheckoutPayment/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
