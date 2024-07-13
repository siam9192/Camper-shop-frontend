import { TCartProduct } from '@/types';
import CartProduct from '../../../components/ui/CartProduct';

type TCartTableProps = {
  products: TCartProduct[];
};

const CartTable = ({ products }: TCartTableProps) => {
  return (
    <div className=" w-full">
      <div className="flex flex-col">
        <div className="">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {products.map((product, index) => {
                    return <CartProduct product={product} key={index} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
