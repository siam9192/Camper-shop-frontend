import React, { ReactNode, useState } from 'react';
import { TProduct } from '../../../types';
import Rating from '../../../components/ui/Rating';
import InputNumber from '../../../components/ui/InputNumber';
import { AiOutlineStock } from 'react-icons/ai';
import { LuPencilLine } from 'react-icons/lu';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { addToCart } from '../../../redux/features/cart/cartSlice';
import { toastError, toastSuccess } from '../../../utils/constant';


type TProductDetailsProps = {
  product: TProduct;
};
const ProductDetails = ({ product }: TProductDetailsProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const handleQuantity = (value: number) => {
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    const cartData = {
      id: product._id,
      quantity,
    };
    const findItem = cartItems.find((item) => item.id === cartData.id);
    if (findItem) {
      toastError("Item already on your cart")
      return;
    }
    dispatch(addToCart(cartData));
  };
  return (
    <div className=" pb-5 space-y-10 font-jakarta">
      <div className=" space-y-2 pb-5 border-b-2">
        <h1 className="md:text-3xl text-2xl text-black font-bold font-jakarta uppercase">
          {product?.name}
        </h1>
        <p className="text-gray-700 uppercase font-bold">{product?.category}</p>
        <h1 className=" text-primary_color font-bold md::text-3xl text-2xl">
          $ {product?.price}
        </h1>
        <div className=" flex items-center gap-2">
          <div className=" flex items-center gap-1 text-secondary_color">
            <Rating rating={product?.rating} />
          </div>
          <div>
            <span className="text-gray-800 font-bold">({product.rating})</span>
          </div>
        </div>
      </div>
      <div className=" space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 ">
          <InputNumber quantity={quantity} setQuantity={handleQuantity} />
          <button
            onClick={handleAddToCart} disabled={product.stock < product.quantity}
            className="w-full  py-4 uppercase font-bold bg-button_color text-white disabled:bg-gray-300"
          >
            Add to cart
          </button>
        </div>
        <div className=" flex items-center gap-2">
          <span className=" text-xl text-secondary_color">
            {' '}
            <AiOutlineStock />
          </span>
          {product.stock ? (
            <p className="font-bold text-gray-800">
              Available stock{' '}
              <span className=" text-secondary_color">{product.stock}</span>
            </p>
          ) : (
            <p className=" text-red-500 font-bold">Out of stock</p>
          )}
        </div>
        <div className="flex  gap-2">
          <span className=" text-xl text-secondary_color ">
            <LuPencilLine />
          </span>
          <p className="font-semibold text-gray-600">
            {product.description}
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
