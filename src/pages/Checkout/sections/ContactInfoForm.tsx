import { useNavigate } from 'react-router-dom'
import { usePostOrderMutation } from '../../../redux/features/order/order.api'
import { useAppDispatch, useAppSelector } from '../../../redux/hook'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { removeAllCartItems } from '../../../redux/features/cart/cartSlice'


const Spinner = ()=> <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-gray-400 rounded-full" role="status" aria-label="loading">
<span className="sr-only">Loading...</span>
</div>

 export const ContactInfoForm = () => {
 const [loading,setLoading] = useState(false)
 const navigate = useNavigate();
 const cartItems = useAppSelector(state=>state.cart.cartItems)
 const dispatch = useAppDispatch()
 const {handleSubmit,register} = useForm()
 const [postOrder] = usePostOrderMutation()
  const handleCheckOut = (value:any)=>{
    const user = {
        name:value.firstName + value.lastName,
        email:value.email,
        phone:value.phone
    }
    const orders = cartItems.map((item)=>{
      return {
        user,
        product:item.id,
        quantity:item.quantity,
        paymentMethod:"cash on",
        deliveryAddress:value.address
      }
    })

    Promise.all(orders.map((order)=>postOrder(order)))
    .then(values=>{
     dispatch(removeAllCartItems())
     navigate("/my-cart/checkout/success")
    })
   
  }
  return (
   <form action="" onSubmit={handleSubmit(handleCheckOut)} className='my-5'>
    <h1 className='text-xl text-black font-bold'>Contact Information</h1>
    <div className='space-y-4 py-3'>
    <input type="text" {...register("email")} required  className=' w-full text-black placeholder:text-gray-600 placeholder:font-semibold p-2 border border-gray-200 focus:border-gray-900 rounded-md '  placeholder='Email'/>
    <input type="text" {...register("phone")} required  className=' w-full text-black placeholder:text-gray-600 placeholder:font-semibold p-2 border border-gray-200 focus:border-gray-900 rounded-md '  placeholder='Phone'/>
    <div className='space-y-3'>
    <h1 className='text-xl text-black font-bold'>Shipping Address</h1>
    <input  type="text" required className=' w-full text-black placeholder:text-gray-600 placeholder:font-semibold p-2 border border-gray-200 focus:border-gray-900 rounded-md '  placeholder='Country'/>
   <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
   <input {...register("firstName")} required type="text" className=' w-full text-black placeholder:text-gray-600 placeholder:font-semibold p-2 border border-gray-200 focus:border-gray-900 rounded-md '  placeholder='First name'/>
   <input {...register("lastName")} required type="text" className=' w-full text-black placeholder:text-gray-600 placeholder:font-semibold p-2 border border-gray-200 focus:border-gray-900 rounded-md '  placeholder='Last name'/>
   </div>
   <input type="text" {...register("address")} required className=' w-full text-black placeholder:text-gray-600 placeholder:font-semibold p-2 border border-gray-200 focus:border-gray-900 rounded-md '  placeholder='Address'/>
    </div>
    </div>
    <button type='submit' onClick={handleCheckOut} className='w-full my-5 py-2 bg-button_color text-white font-semibold'>{loading?<Spinner/>:"Checkout"}</button>
   </form>
  )
}
