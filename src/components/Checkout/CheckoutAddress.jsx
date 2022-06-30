import React from "react";

function CheckoutAddress() {
  return (
    <div>
      <h2 className="mt-10 text-lg font-bold text-primary dark:text-white">Contact information</h2>

      <div className="mt-4">
        <label
          htmlFor="email-address"
          className="block text-md font-medium text-primary dark:text-white">
          Email address
        </label>
        <div className="mt-1">
          <input
            type="email"
            id="email-address"
            name="email-address"
            autoComplete="email"
            className="block w-full py-3  border-gray-300 rounded-md drop-shadow-xl focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>
      </div>

      {/* Shipping information */}
      <div className="mt-10 border-t border-gray-300 pt-10">
        <h2 className="text-lg font-bold text-secondary dark:text-white">
          Shipping information
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
          <div>
            <label
              htmlFor="first-name"
              className="block text-md font-medium text-gray-700 dark:text-white">
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="first-name"
                name="first-name"
                autoComplete="given-name"
                className="block w-full py-3 border-gray-300 rounded-md drop-shadow-xl focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-md font-medium text-gray-700 dark:text-white">
              Last name
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="last-name"
                name="last-name"
                autoComplete="family-name"
                className="block w-full py-3 border-gray-300 rounded-md drop-shadow-xl focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-md font-medium text-gray-700 dark:text-white">
              Company
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="company"
                id="company"
                className="block w-full py-3 border-gray-300 rounded-md drop-shadow-xl focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-md font-medium text-gray-700 dark:text-white">
              Address
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="address"
                id="address"
                autoComplete="street-address"
                className="block w-full py-3 border-gray-300 rounded-md drop-shadow-xl focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="apartment"
              className="block text-md font-medium text-gray-700 dark:text-white">
              Apartment, suite, etc.
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="apartment"
                id="apartment"
                className="block w-full py-3 border-gray-300 rounded-md drop-shadow-xl focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-md font-medium text-gray-700 dark:text-white">
              City
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="city"
                id="city"
                className="block w-full py-3 border-gray-300 rounded-md drop-shadow-xl focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-md font-medium text-gray-700 dark:text-white">
              Country
            </label>
            <div className="mt-1">
              <select
                id="country"
                name="country"
                autoComplete="country"
                className="block w-full py-3 border-gray-300 rounded-md drop-shadow-xl focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>Canada</option>
                <option>Mexico</option>
                <option>United States</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="province"
              className="block text-md font-medium text-gray-700 dark:text-white">
              Province
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="province"
                id="province"
                className="block w-full py-3 border-gray-300 rounded-md drop-shadow-xl focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
          </div>

          <div>
            <label
              htmlFor="postal-code"
              className="block text-md font-medium text-gray-700 dark:text-white">
              Postal code
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                autoComplete="postal-code"
                className="block w-full py-3 border-gray-300 rounded-md drop-shadow-xl focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="block text-md font-medium text-gray-700 dark:text-white">
              Phone
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="block w-full py-3 border-gray-300 rounded-md drop-shadow-xl focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutAddress;
