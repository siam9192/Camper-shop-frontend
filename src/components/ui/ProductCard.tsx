import { TProduct } from '../../types';

import { Link } from 'react-router-dom';
import Rating from './Rating';

type TProductCardProps = {
  product: TProduct;
};

const ProductCard = ({ product }: TProductCardProps) => {
  return (
    <Link to={`/products/${product._id}`}>
      <div className="p-5 flex flex-col h-full bg-white rounded hover:border-2 hover:border-gray-800">
    <div className='flex-wrap'>
    <img src={product.images[0]} className="w-full h-72 " alt="" />
    </div>

        <div className="py-5 space-y-2">
          <div className=" flex justify-between items-center">
            <h2 className=" text-[14px] text-gray-500 uppercase">
              {product.category}
            </h2>
            <Rating rating={product.rating} />
          </div>
          <div className="space-y-2">
            <h1 className="  font-bold text-black uppercase">{product.name}</h1>
            <h2 className=" text-gray-900 text-xl font-semibold  ">
              $ {product.price}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
