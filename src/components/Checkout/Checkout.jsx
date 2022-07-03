import React from "react";
import CheckoutAddress from "./CheckoutAddress";
// import CheckoutPayment from "./CheckoutPayment";
import CheckoutPaymentMp from "./CheckoutPaymentMp";



function Checkout() {
  return (
    <div className="">
      <div className="bg-gray-300">
        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-2xl lg:px-8">
          <h2 className="sr-only">Checkout</h2>
          {/* <form className="lg:grid"> */}
            <div>
            <CheckoutAddress/>
            </div>
            {/* <CheckoutPayment/> */}
            <CheckoutPaymentMp/>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
