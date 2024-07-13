import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../redux/hook'
import { TCartProduct } from '../../../types'
import React from 'react'

type TCartSummeryProps = {
    products:TCartProduct[]
}
const CartSummery = ({products}:TCartSummeryProps) => {
    
  const subtotal = products.reduce((prev:number,current:TCartProduct)=>prev + current.price*current.quantity,0) 
  
  const taxes = Number( (subtotal*0.05).toFixed(2))

  const shipping = products.length ? 10 : 0
  const total = (subtotal + taxes + shipping)
  const stockOutProduct = products.find((product)=> product.quantity > product.stock)
  const navigate = useNavigate()

  const handelNavigate  = ()=>{
    navigate("/my-cart/checkout")
  }
  return (
    
    <div className="bg-gray-100 rounded-lg p-5">
        <h2 className="text-lg font-semibold mb-4">Summary</h2>
        <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal}</span>
        </div>
        <div className="flex justify-between mb-2">
            <span>Taxes</span>
            <span>${taxes}</span>
        </div>
        <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>${shipping}</span>
        </div>
        <hr className="my-2"/>
        <div className="flex justify-between mb-2">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">${total}</span>
        </div>
        <button onClick={handelNavigate} disabled={stockOutProduct?true:false} className="bg-button_color text-white disabled:bg-gray-600 py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
    </div>

  )
}

export default CartSummery