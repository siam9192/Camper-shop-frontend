import { useForm } from 'react-hook-form';
import { productCategories, toastError, toastSuccess } from '../../../utils/constant';
import React, { FormEvent, useRef, useState } from 'react';
import {usePostProductMutation } from '../../../redux/features/Products/products.api';
import HSOverlay from '@preline/overlay';
import { TProduct } from '@/types';
type TFormInputs = {
  name:string;
  description:string;
  price: string,
  stock: string,
  category:string,
  rating: number,
}
type TUpdateProductFormProps = {
product:TProduct
}

const UpdateProductForm = ({product}:TUpdateProductFormProps) => {
 
  const {
    register,
    handleSubmit,
  } = useForm<TFormInputs>()

 const [addedImages,addImage] = useState<string[]>([])
 const [loading,setLoading] = useState<boolean>(false) 
 const imageRef = useRef<HTMLInputElement>(null)

 const[postData,{isError}] = usePostProductMutation()
 
 

 const handleAddImage = ()=>{
  const image = imageRef.current?.value
  
 if(image){
  addImage([...addedImages,image])
  imageRef.current.value = ""
 }
  
  }
   
 const handleRemoveImage = (index:number)=>{
  const images = addedImages;
  images.splice(index,1)
  addImage([...images])
 }
 
 const submit = async  (data:any)=>{
  data.images = addedImages;
  data.price = parseInt(data.price)
  data.stock = parseInt(data.stock)
  data.rating = parseInt(data.rating)
  const modal = document.querySelector(`#update-product-${product._id}-modal`) as HTMLElement;

  

setLoading(true)
 const {data:res,error} = await postData(data)
 if(error){
   toastError("Something went wrong")
   setLoading(false)
  return;
 }
 
 toastSuccess(res.message)
  
 setLoading(false)
 HSOverlay.close(modal);
 }
 
  return (
    <div>
        <div className="">
            <span   
              data-hs-overlay={`#update-product-${product._id}-modal`} className="inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </span>
          </div>
          <div
        id={`update-product-${product._id}-modal`}
        className="hs-overlay hidden size-full text-start fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none p-10"
      >
         <div className="w-full h-full  bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70 overflow-y-auto">
         <h1 className=" text-2xl  md:text-3xl text-black font-extrabold md:p-10 p-5 border-b">Create Product</h1>
         <form onSubmit={handleSubmit(submit)} className='md:py-10 md:px-20 p-5 space-y-4 overflow-y-auto '>
            <div className='grid grid-cols-1  md:grid-cols-2 gap-5'>
                <div className=' space-y-1'>
               <label htmlFor="name" className='text-black font-semibold'>Product Name:</label>
               <input {...register("name")} type="text" id='name' className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm text-black focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Product name"/>
                </div>
                <div className=' space-y-1'>
               <label htmlFor="product-name" className='text-black font-semibold'>Product Category:</label>
               <select  {...register("category")} id='product-name' className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm text-black uppercase font-bold focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                {
                    productCategories.map((category,index)=><option value={category} key={index}>{category}</option>)
                }
               </select>
                </div>
                <div className='items-start md:col-span-2 space-y-1'>
                <label htmlFor="description" className='text-black font-semibold'>Product Category:</label>
                <textarea  {...register("description")} name="description" id="description" className='w-full p-2 rounded-lg min-h-72 border bg-gray-100' placeholder='Write something about product'></textarea>
            </div>
            </div>
            <div className='grid grid-cols-2  md:grid-cols-4 gap-5'>
            <div className=' space-y-1'>
               <label htmlFor="price" className='text-black font-semibold'>Product Price:</label>
               <input  {...register("price")} type="number" id='price' className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm text-black focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter product price"/>
                </div>
                <div className=' space-y-1'>
               <label htmlFor="stock" className='text-black font-semibold'>Available Stock:</label>
               <input  {...register("stock")} type="number" id='stock' className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm text-black focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter available stock"/>
                </div>
                <div className=' space-y-1'>
               <label htmlFor="rating" className='text-black font-semibold'>Product Ratting:</label>
               <input  {...register("rating")} type="number" id='rating' className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm text-black focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter Product ratting"/>
                </div>
                <div className=' space-y-1'>
               
                </div>
            </div>
            <div className='space-y-2'>
            <label  className='text-black font-semibold'>Added Images: <span className=' text-secondary_color'> {addedImages.length}</span> (Double tap on image for remove )</label>
            <div className=' flex items-center gap-2 flex-wrap'>
              {
                addedImages.map((image,index)=>{
                return <div onDoubleClick={()=>handleRemoveImage(index)} className='hover:cursor-pointer' key={index}>
                  <img src={image} className='w-20 h-20' alt={`image ${index+1}`}/>
                  <div className=' absolute -right- -top-2'>

                  </div>
                  </div>
                }
                )
              }
            </div>
            </div>
            <div className='space-y-2'>
            <label htmlFor="image" className='text-black font-semibold'>Add Image:</label>
            <input ref={imageRef} type="text" id='image' className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm text-black focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter image url"/>
           <div className=' text-end'> <button  onClick={handleAddImage} type='button' className=' px-4 py-2 bg-button_color text-white uppercase'>Add Image</button></div>
            </div>
            <div className=''> <button 
             type='submit' className=' px-6 py-2 bg-secondary_color text-white uppercase'>{loading ? "Posting..." : "Post"}</button></div>
          
         </form>
        
        </div>
      </div>
      
    </div>
  );
}

export default UpdateProductForm;
