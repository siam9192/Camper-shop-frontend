import { TCartProduct, TProduct } from '@/types';
import { useGetCartProductsQuery } from '../../redux/features/cart/cart.api';
import { useAppSelector } from '../../redux/hook';
import CartTable from './sections/CartTable';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CartSummery from './sections/CartSummery';
import EmptyCart from './sections/EmptyCart';

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
        {
          cartItems.length ? <CartTable products={products}  />
          :
          <EmptyCart/>
        }
      </div>
     <div className='lg:w-[30%]'>
      <CartSummery products = {products}/>
     </div>
     </div>
        </div>
    

  );
};

export default Cart;
