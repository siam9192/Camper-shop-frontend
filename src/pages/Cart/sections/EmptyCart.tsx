import React from 'react';

const EmptyCart = () => {
  return (
    <div className="py-10 flex flex-col items-center justify-center ">
      <img src="/images/no-cart.jpg" alt="" className="w-1/2" />
      <h1 className=" text-gray-900 text-2xl md:text-3xl text-center font-bold ">
        No Items Added
      </h1>
    </div>
  );
};

export default EmptyCart;
