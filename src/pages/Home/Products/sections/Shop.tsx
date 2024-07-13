import { useEffect, useState } from 'react';
import ProductCard from '../../../../components/ui/ProductCard';
import ProductLoadingCard from '../../../../components/ui/ProductLoadingCard';

import { useGetProductsQuery } from '../../../../redux/features/Products/Products.api';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { loadingItems, generatePages } from '../../../../utils/constant';

const Shop = () => {
  const searchParams = window.location.search;

  const { data, isLoading, refetch } = useGetProductsQuery(searchParams);

  // const currentPageFromUrl = parseInt()
  const parsedQuery = queryString.parse(searchParams);

  const [currentPage, setCurrentPage] = useState(
    parseInt((parsedQuery.currentPage || '1') as string),
  );
  const navigate = useNavigate();
  const products = data?.data.products || [];
  const totalProduct = data?.data?.totalProduct || 0;
  const pages = generatePages(totalProduct, 6);

  const options = [
    {
      display: 'DEFAULT SORTING',
      value: '',
      isChecked: true,
    },
    {
      display: 'PRICE(LOW-HIGH)',
      value: '-1',
    },
  ];

  const changePage = (page: number) => {
    setCurrentPage(page);
    const query = queryString.parse(searchParams);
    const searchQuery = queryString.stringify({ ...query, currentPage: page });

    navigate(`?${searchQuery}`);
    refetch();
  };
  if (!isLoading && !products.length) {
    return (
      <div className="lg:w-[70%]  min-h-[70vh]">
        <h1 className=" text-4xl text-black text-center font-semibold my-20">
          No Product Found
        </h1>
      </div>
    );
  }

  const handleSort = (e: any) => {
    const query = queryString.parse(searchParams);
    const newSearchQuery: any = { ...query, currentPage: 1 };
    if (e.target.value === 'p-h-l') {
      newSearchQuery.sort = '-1';
    } else {
      delete newSearchQuery.sort;
    }
    const searchQuery = queryString.stringify(newSearchQuery);

    navigate(`?${searchQuery}`);
    refetch();
  };
  return (
    <div className="lg:w-[80%] ">
      <div className=" flex justify-between items-center">
        <div>
          <h2 className=" text-black font-bold uppercase md:block hidden">
            Showing {pages.length * (currentPage - 1)}-
            {pages.length * (currentPage - 1) + products.length} of{' '}
            {totalProduct} results
          </h2>
        </div>
        <select
          onChange={handleSort}
          name=""
          id=""
          className=" bg-transparent p-2 uppercase text-black font-bold"
        >
          <option value="" defaultChecked>
            Default Sorting
          </option>
          <option value="p-h-l">Price(Low-High)</option>
        </select>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {isLoading
          ? loadingItems.map((item: any, index: number) => (
              <ProductLoadingCard />
            ))
          : products.map((product: any, index: number) => (
              <ProductCard product={product} key={index} />
            ))}
      </div>

      <div className="pt-10 flex flex-grow justify-center items-center gap-2">
        {pages.map((page, index) => {
          return (
            <div
              onClick={() => changePage(page)}
              className={` px-3 py-1 md:px-4 md:py-2 border border-primary_color text-center text-black  hover:bg-primary_color hover:text-white hover:cursor-pointer ${currentPage === page ? 'bg-info_color' : ''}`}
              key={index}
            >
              {page}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
