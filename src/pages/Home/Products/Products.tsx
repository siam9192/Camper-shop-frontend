import React from 'react';
import Shop from './sections/Shop';
import Filter from './sections/Filter';

const Products = () => {
  return (
    <div className="min-h-[86vh] bg-gray-30 py-5">
      <h1 className=" text-4xl text-black font-bold text-jakarta">Shop</h1>
      <div className=" mt-5 flex lg:flex-row flex-col-reverse gap-5">
        <Shop />
        <Filter />
      </div>
    </div>
  );
};

export default Products;
