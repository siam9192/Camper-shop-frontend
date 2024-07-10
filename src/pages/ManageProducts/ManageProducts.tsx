import { TProduct } from '../../types/index';
import { useGetProductsQuery } from '../../redux/features/Products/Products.api';
import React from 'react';
import UpdateProductForm from './sections/UpdateProductForm';
import CreateProductForm from './sections/CreateProductForm';

const ManageProducts = () => {
  const { data, isLoading } = useGetProductsQuery('');
  const products = data?.data.products || [];

  return (
    <div>
      <div>
        <h1 className=" text-3xl text-black font-extrabold">Manage Products</h1>
        <div className="py-5">
          <div className=" flex  justify-end">
            <button
              data-hs-overlay="#hs-vertically-centered-modal"
              className=" bg-button_color text-white px-4 py-2"
            >
              ADD PRODUCT
            </button>
          </div>
          <div className="flex flex-col">
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
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                              <div className="flex gap-2">
                                <img
                                  src="/images/bag1.jpg"
                                  alt=""
                                  className="w-16 h-16 md:w-20 md:h-20 rounded-md"
                                />
                                <div className="space-y-1">
                                  <h3 className=" text-[10px] md:text-xs text-secondary_color font-bold uppercase">
                                    {product.category}
                                  </h3>
                                  <h3 className=" text-[12px] md:text-[18px] font-bold uppercase">
                                    {product.name}
                                  </h3>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                              ${product.price}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                              {product.stock}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                              <div className=" flex items-center  gap-2 md:gap-4 ">
                                <span className="inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="size-4"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                    />
                                  </svg>
                                </span>{' '}
                                <span className="inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="size-4"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UpdateProductForm />
      <CreateProductForm />
    </div>
  );
};

export default ManageProducts;
