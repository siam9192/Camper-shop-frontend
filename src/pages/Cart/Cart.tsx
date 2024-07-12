import { TCartProduct, TProduct } from '@/types';
import { useGetCartProductsQuery } from '../../redux/features/cart/cart.api';
import { useAppSelector } from '../../redux/hook';
import CartTable from './sections/CartTable';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const cartIds = cartItems.map((item) => item.id);
  const { data } =  useGetCartProductsQuery(cartIds);
  const [isProductStockOut,setIsProductStockOut] = useState<boolean>(false)
  const products =
    data?.data.map((product: TCartProduct) => {
      const findCartItem = cartItems.find((item) =>   item.id === product._id);
      if (product && findCartItem) {
        return {
          ...product,
          quantity: findCartItem.quantity,
        };
      }
    }).filter( (item:any) => item !== undefined) || [];
  const subtotal = products.reduce((prev:number,current:TCartProduct)=>prev + current.price,0) 
  const taxes = subtotal*0.05
  const shipping = 10
  const total = subtotal + taxes + shipping

  const handleProductStockOut = (value:boolean)=>{
    setIsProductStockOut(value)
  }
  return (
    <div className="py-10">
      <div className=" flex justify-between items-center">
        <h1 className=" text-2xl font-extrabold text-black">Shopping Cart</h1>
        <h3 className=" text-gray-800 font-bold">{products.length} items</h3>
      </div>
     <div className=' pt-5 md:pt-10 lg:flex gap-5'>
     <div className="lg:w-[70%]">
        <CartTable setIsStockOut = {handleProductStockOut} products={products}  />
      </div>
      <div className="lg:w-[30%]">
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
                    <Link to={"/my-cart/checkout"}><button className="bg-button_color text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button></Link>
                </div>
            </div>
     </div>
        </div>
    

  );
};

export default Cart;
