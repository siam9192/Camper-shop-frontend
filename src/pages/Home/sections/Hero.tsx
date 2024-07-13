import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const images = ['/images/slider-1.jpg', '/images/slider-2.jpg'];
  return (
    <div className="min-h-[90vh] py-10  grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
      <div className=" space-y-10">
        <div className="space-y-3">
          <h1 className=" md:text-5xl text-3xl font-bold text-gray-900">
            Welcome to Capmers Shop -{' '}
            <span className=" text-secondary_color">
              Your Ultimate Destination
            </span>{' '}
            for Outdoor Adventures
          </h1>
          <p>Discover Premium Camping Gear, Apparel, and Essentials</p>
        </div>
        <h2 className="py-2 text-2xl font-medium text-secondary_color">
          Get up to 40% discount on your first order
        </h2>
        <Link to="/products">
          <button className="px-6 py-3 rounded-lg bg-button_color hover:bg-primary_color text-white uppercase">
            Explore Now
          </button>
        </Link>
      </div>
      <div>
        <img src={images[1]} alt="" />

        {/* <div data-hs-carousel='{
  "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }'  className="relative">
  <div  className="hs-carousel relative overflow-hidden w-full min-h-96  rounded-lg">
    <div  className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
     {
        images.map((image,index)=>{
            return  <div  className="hs-carousel-slide" key={index}>
            <div  className="flex justify-center h-full  p-6 dark:bg-neutral-900">
            <img src={image} className='rounded-md w-full'  alt="" />
            </div>
          </div>
        })
     }
     
    </div>
  </div>

 

  <div  className="hs-carousel-pagination flex justify-center absolute bottom-0 start-0 end-0 space-x-2">
   {
    images.map(()=>{
        return  <span  className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
    })
   }
  </div>
  
</div> */}
      </div>
    </div>
  );
};

export default Hero;
