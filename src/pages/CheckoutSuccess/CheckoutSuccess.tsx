import React from 'react';

const CheckoutSuccess = () => {
  return (
    <div className="min-h-[80vh]">
      <div className="py-10">
        <svg
          viewBox="0 0 24 24"
          className="text-green-600 w-16 h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
          Checkout Successful
        </h2>
        <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
          Thanks for making a purchase you can check our order summary
        </p>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
