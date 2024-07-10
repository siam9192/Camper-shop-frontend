import { productCategories } from '../../../utils/constant';
import React, { FormEvent, useState } from 'react';
// type 
const CreateProductForm = () => {
 const [addedImages,addImage] = useState([])

 const handleAddImage = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const imagesUrl = e.currentTarget.files
    
    // addImage([...addImage,...e.currentTarget.files])
    
 }
  return (
    <div>
      <div
        id="hs-vertically-centered-modal"
        className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none p-10"
      >
         <div className="w-full h-full  bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
         <h1 className=" text-2xl  md:text-3xl text-black font-extrabold md:p-10 p-5 border-b">Create Product</h1>
         <form action="" className='md:py-10 md:px-20 p-5 space-y-4'>
            <div className='grid grid-cols-1  md:grid-cols-2 gap-5'>
                <div className=' space-y-1'>
               <label htmlFor="product-name" className='text-black font-semibold'>Product Name:</label>
               <input type="text" id='product-name' className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm text-black focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Product name"/>
                </div>
                <div className=' space-y-1'>
               <label htmlFor="product-name" className='text-black font-semibold'>Product Category:</label>
               <select  id='product-name' className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm text-black uppercase font-bold focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                {
                    productCategories.map((category,index)=><option value={category} key={index}>{category}</option>)
                }
               </select>
                </div>
                <div className=' md:col-span-2 space-y-1'>
                <label htmlFor="description" className='text-black font-semibold'>Product Category:</label>
                <textarea name="" id="description" className='w-full p-2 rounded-lg min-h-72 border bg-gray-100' placeholder='Write something about product'></textarea>
            </div>
            </div>
            <div className='grid grid-cols-2  md:grid-cols-4 gap-5'>
            <div className=' space-y-1'>
               <label htmlFor="price" className='text-black font-semibold'>Product Price:</label>
               <input type="text" id='price' className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm text-black focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter product price"/>
                </div>
                <div className=' space-y-1'>
               <label htmlFor="price" className='text-black font-semibold'>Available Stock:</label>
               <input type="text" id='price' className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm text-black focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter available stock"/>
                </div>
                <div className=' space-y-1'>
               <label htmlFor="price" className='text-black font-semibold'>Product Ratting:</label>
               <input type="text" id='price' className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm text-black focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter Product ratting"/>
                </div>
                <div className=' space-y-1'>
               
                </div>
            </div>
            <div className=''>
            <label htmlFor="file-input" className="sr-only">Choose file</label>
  <input onChange={handleAddImage} type="file" multiple name="file-input" id="file-input" className="block w-1/3 border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-neutral-700 dark:file:text-neutral-400"/>
            </div>
         </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProductForm;
