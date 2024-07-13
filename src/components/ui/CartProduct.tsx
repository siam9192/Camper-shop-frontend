import {
  removeCartItem,
  updateCartQuantity,
} from '../../redux/features/cart/cartSlice';
import { useAppDispatch } from '../../redux/hook';
import { TCartProduct } from '../../types';
import { useEffect, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import ConfirmPopup from './ConfirmPopup';

type TCartProductProps = {
  product: TCartProduct;
};

const CartProduct = ({ product }: TCartProductProps) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateCartQuantity({ id: product._id, quantity }));
  }, [quantity]);

  const increment = () => {
    const value = quantity + 1;

    setQuantity(value);
  };
  const decrement = () => {
    const value = quantity - 1;
    if (value < 1) {
      return;
    }
    setQuantity(value);
  };

  const handleRemoveProduct = () => {
    dispatch(removeCartItem(product._id));
  };
  return (
    <div className="border-b py-5">
      <div className="flex items-center justify-between ">
        <div>
          <img
            src={product.images[0]}
            className="md:w-32 md:h-32 w-10 h-10"
            alt=""
          />
        </div>

        {/* Details */}

        <div className=" space-y-1">
          <h2 className=" text-[8px] md:text-[14px] text-secondary_color uppercase font-bold">
            {product.category}
          </h2>
          <h1 className=" text-[10px] md:text-xl text-black uppercase font-bold">
            {product.name}
          </h1>
        </div>

        {/* Quantity */}

        <div className="flex items-center gap-1">
          <button
            onClick={increment}
            className=" ext-xl md:text-2xl font-extrabold "
          >
            +
          </button>
          <span className=" w-4 md:min-w-14 text-center text-black font-bold">
            {quantity}
          </span>
          <button
            onClick={decrement}
            className=" text-xl md:text-2xl font-extrabold"
          >
            -
          </button>
        </div>

        {/* Price */}

        <div>
          <h1 className=" text-[10px] md:text-[16px] font-bold text-black">
            ${(product.price * quantity).toFixed(2)}
          </h1>
        </div>

        {/* Delete */}
        <div>
          <ConfirmPopup id={product._id} clickFn={handleRemoveProduct}>
            <span className="inline-flex justify-center items-center size-[25px] md:size-[46px] rounded-full bg-gray-50 text-gray-800 dark:bg-neutral-700 dark:text-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className=" size-4 md:size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </span>
          </ConfirmPopup>
        </div>
      </div>
      {product.quantity > product.stock && (
        <p className="py-2 font-medium text-red-500">
          {product.quantity} quantity is not available on stock
        </p>
      )}
    </div>
  );
};

export default CartProduct;
