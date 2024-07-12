import React from 'react'
import { BiSupport } from 'react-icons/bi';
import { CiBookmarkCheck } from 'react-icons/ci';
import { FaTruckFast } from 'react-icons/fa6';
import { MdOutlineReviews, MdTipsAndUpdates } from 'react-icons/md';
import { RiSecurePaymentLine } from 'react-icons/ri';
const services = [
    {
      title: "Wide Selection of Camping Gear",
      description: "Explore our extensive collection of high-quality camping gear, including tents, sleeping bags, backpacks, camp kitchen essentials, and more.",
      icon: CiBookmarkCheck
    },
    {
      title: "Expert Product Reviews",
      description: "Benefit from in-depth reviews and recommendations from our experts to help you make informed decisions about your camping gear purchases.",
      icon: MdOutlineReviews
    
    },
    {
      title: "Fast and Reliable Shipping",
      description: "Enjoy fast and reliable shipping options to ensure your camping gear arrives promptly and safely for your next outdoor adventure.",
      icon: FaTruckFast
    },
    {
      title: "Responsive Customer Support",
      description: "Our dedicated customer support team is ready to assist you with any inquiries or issues regarding your orders and products.",
      icon: BiSupport
    },
    {
      title: "Secure Online Payments",
      description: "Shop with confidence using our secure online payment methods, ensuring your transactions are safe and protected.",
      icon: RiSecurePaymentLine
    },
    {
        title: "Camping Tips and Advice",
        description: "Access valuable camping tips, advice, and guides to enhance your outdoor experience and make the most of your camping trips.",
        icon: MdTipsAndUpdates
      }
  ];
  
  
const Services = () => {
  return (
    <div className='py-20'>
        <div className=" space-y-2">
        <h1 className="  text-3xl font-semibold text-center">
          Our Services
        </h1>
     <div className=' py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
     {
        services.map((service,index)=>{
            return <div key={index}>
           <div className=" flex flex-col h-full bg-gray-100 border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 p-4 ">
           <div className='py-5'>
             <div className=' size-10 bg-primary_color text-white text-2xl rounded-full flex justify-center items-center'>
                <service.icon></service.icon>
             </div>
           </div>
   <div className=" flex-grow ">
    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
     {service.title}
    </h3>
    <p className="mt-2 flex-grow text-gray-500 dark:text-neutral-400">
     {service.description}
    </p>
    
    </div>
</div>
            </div>
        })
       }
     </div>
      </div>   
    </div>
  )
}

export default Services