import { TCartProduct } from '@/types';
import { useGetCartProductsQuery } from '../../redux/features/cart/cart.api';
import { useAppSelector } from '../../redux/hook';
import CartTable from './sections/CartTable';

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const cartIds = cartItems.map((item) => item.id);
  const { data } = useGetCartProductsQuery(cartIds);
  const products =
    data?.data.map((product: TCartProduct) => {
      const findCartItem = cartItems.find((item) => item.id === product._id);
      if (findCartItem) {
        return {
          ...product,
          quantity: findCartItem.quantity,
        };
      }
    }) || [];

  return (
    <div className="py-10">
      <div className=" flex justify-between items-center">
        <h1 className=" text-2xl font-extrabold text-black">Shopping Cart</h1>
        <h3 className=" text-gray-800 font-bold">{products.length} items</h3>
      </div>
      <div className="">
        <CartTable products={products} />
      </div>
    </div>
  );
};

export default Cart;
