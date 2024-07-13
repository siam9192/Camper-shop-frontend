import { TProduct } from '../../types/index';
import { useGetProductsQuery } from '../../redux/features/Products/products.api';
import React, { useEffect, useState } from 'react';
import UpdateProductForm from './sections/UpdateProductForm';
import Pagination from '../../components/ui/Pagination';
import { generatePages, openModal } from '../../utils/constant';
import ManageProductCard from '../../components/ui/ManageProductCard';
import ProductCreateForm from './sections/ProductCreateForm';
import { useAppDispatch } from '../../redux/hook';
import { toggleProductCreateForm } from '../..//redux/features/toggle/toggleSlice';

const ManageProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, refetch } = useGetProductsQuery(
    `?currentPage=${currentPage}`,
  );
  const products = data?.data.products || [];
  const totalProduct = data?.data.totalProduct || 0;
  const pages = generatePages(totalProduct, 6);

  useEffect(() => {
    refetch();
  }, [currentPage]);

  const handleCurrentPage = (value: number) => {
    setCurrentPage(value);
  };

  const openProductAddForm = () => {
    openModal('hs-full-screen-modal-1');
  };
  return (
    <div className="min-h-[88vh]">
      <div>
        <h1 className=" text-3xl text-black font-extrabold pt-5">
          Manage Products
        </h1>
        <div className="py-5 ">
          <div className=" flex justify-end">
            <button
              onClick={openProductAddForm}
              className=" text-white bg-button_color px-4 py-2"
            >
              Add Product +
            </button>
          </div>
          <div />
          <div className="flex flex-col min-h-[50vh]">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full m inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs  text-black font-bold uppercase dark:text-neutral-500"
                        >
                          Product info
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs  text-black font-bold uppercase dark:text-neutral-500"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs  text-black font-bold uppercase dark:text-neutral-500"
                        >
                          Stock
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs  text-black font-bold uppercase dark:text-neutral-500"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                      {products.map((product: TProduct, index: number) => {
                        return (
                          <ManageProductCard key={index} product={product} />
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4">
            {products.length && (
              <Pagination
                currentPage={currentPage}
                setCurrentPage={handleCurrentPage}
                pages={pages}
              />
            )}
          </div>
        </div>
      </div>
      <ProductCreateForm />
      <UpdateProductForm />
    </div>
  );
};

export default ManageProducts;
