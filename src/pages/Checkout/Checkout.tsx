import React from 'react';
import { ContactInfoForm } from './sections/ContactInfoForm';

const Checkout = () => {
  return (
    <div className=" min-h-[80vh]">
      <h1 className=" text-3xl font-bold text-black">Checkout</h1>
      <div className="lg:flex">
        <div className="lg:w-[60%]">
          <div className="py-10">
            <div className="space-y-2">
              <h2 className=" text-black font-semibold">Payment Method:</h2>
              <div className="grid sm:grid-cols-2 gap-2">
                <label
                  htmlFor="hs-radio-in-form"
                  className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                >
                  <input
                    type="radio"
                    checked
                    name="hs-radio-in-form"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-radio-in-form"
                  />
                  <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                    Cash on delivery
                  </span>
                </label>

                <label
                  htmlFor="hs-radio-checked-in-form"
                  className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                >
                  <input
                    type="radio"
                    name="hs-radio-in-form"
                    className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-radio-checked-in-form"
                  />
                  <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                    Stripe
                  </span>
                </label>
              </div>
            </div>
          </div>
          <ContactInfoForm />
        </div>
        <div className=" hidden lg:block w-[40%]">
          <img src="/images/checkout.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
